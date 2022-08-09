const recipeRouter = require('express').Router();

const {isAuth} = require('../middlewares/guards')
const{getAllRecipes,createRecipe, deleteRecipe, editRecipe,getRecipe, likeRecipe,dislikeRecipe,attachComment,getFirstThreeRecipies} = require('../services/recipeServices')
const {addRecipeToLiked, removeRecipeFromLiked,findUser,addRecipeToOwned} = require('../services/userService')
const {createComment} = require('../services/commentServices')

const errorMapper = require('../utils/errorMapper')

recipeRouter.get('/catalog',async(req,res)=>{
    res.json(await getAllRecipes());
   
})
recipeRouter.get('/getLatest',async(req,res)=>{
    res.json(await getFirstThreeRecipies())
 })

recipeRouter.post('/catalog/search',async (req,res)=>{
   res.json( await getAllRecipes(req.body))
})

recipeRouter.get('/details/:recipeId',async(req,res)=>{
    try{
        const recipe = await getRecipe(req.params.recipeId)
        if(req.user){
            const user = await findUser(req.user._id);
            const isLikedByUser = user.likedRecipies.some(x=>x._id.toString()==req.params.recipeId)
            res.json({recipe,isLiked:isLikedByUser,isOwned:req.user._id==recipe.ownerId.toString()})  
        }else{
            res.json({recipe:recipe})
        }
    }catch(err){
        res.status(404).json({message:err.message})
    }
})

recipeRouter.get('/likeRecipe/:recipeId',isAuth(),async (req,res)=>{
    try{
        const recipe =await getRecipe(req.params.recipeId)
        await addRecipeToLiked(req.user._id,recipe)
          await likeRecipe(req.params.recipeId);
        res.json({message:'Successfuly liked!'})
    }catch(err){
        res.status(400).json({message:err.message})
    }
      
})

recipeRouter.get('/dislikeRecipe/:recipeId',async (req,res)=>{
    try{
        const recipe = await getRecipe(req.params.recipeId)
        await removeRecipeFromLiked(req.user._id,recipe)
         await dislikeRecipe(req.params.recipeId);
        res.json({message:'Successfuly disliked!'})
    }catch(err){
        res.status(400).json({message:err.message})
    }
   
})

recipeRouter.post('/comment/:recipieId',isAuth(),async(req,res)=>{
try{
        const comment = await createComment(req.body,req.user._id);
       const recipe= await attachComment(comment,req.params.recipieId)
      res.status(201).json(comment)
    }catch(err){
       res.status(400).json({message:err.message})
   }
   
})


recipeRouter.post('/create',isAuth(),async(req,res)=>{
  try{
    const createdRecipe =await createRecipe(req.body,req.user._id);
    addRecipeToOwned(req.user._id,createdRecipe)
    res.status(201).json(createdRecipe)
    
  }catch(err){
    res.status(400).json({message:err.message})

  }  
})

recipeRouter.put('/edit/:recipeId',isAuth(),async(req,res)=>{
    try{
        const recipe = await getRecipe(req.params.recipeId);
        if(req.user._id!=recipe.ownerId){
            throw new Error('U cant edit recipe that is not yours!')
        }
        const editedRecipe = await editRecipe(req.params.recipeId,req.body)
        res.json(editedRecipe)

    }catch(err){
        res.status(400).json({message:err.message})
    }  
})


recipeRouter.delete('/delete/:recipeId',isAuth(),async(req,res)=>{
    try{
        const recipe = await getRecipe(req.params.recipeId);
        if(req.user._id!=recipe.ownerId){
            throw new Error('U cant delete recipe that is not yours!')
        }
        await deleteRecipe(req.params.recipeId);
        res.json({message:'Deleted!'})

    }catch(err){
        res.status(400).json({message:err.message})
    }
   
})


module.exports = recipeRouter;