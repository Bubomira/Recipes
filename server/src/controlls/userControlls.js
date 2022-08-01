const userRouter = require('express').Router();

const{loginUser,logoutUser,registerUser} = require('../services/authServices');
const {findUser,getLikedRecepies,getOwnedRecipes} = require('../services/userService')

const {isAuth} = require('../middlewares/guards')

userRouter.post('/login',async(req,res)=>{
  try{
    const token = await loginUser(req.body);
    res.json(token);
  }catch(err){
    res.status(400).json({message:err.message})
  }
   
})

userRouter.post('/register',async(req,res)=>{
    try{
    const token =await registerUser(req.body)
    res.status(201).json(token)
    }catch(err){
     res.status(400).json({message:err.message})
    }
   
})

userRouter.get('/logout',(req,res)=>{
   logoutUser(req.user.token);
   res.status(204).end()
})

userRouter.get('/profile',isAuth(),async(req,res)=>{
   res.json(await findUser(req.user._id))
})

userRouter.get('/likedRecepies/:userId',isAuth(),async(req,res)=>{
  try{
     const likedRecipies = await getLikedRecepies(req.params.userId)
     res.json(likedRecipies)
  }catch(err){
   res.status(400).json({message:err.message})
  }
})
userRouter.get('/ownedRecipies/:userId',isAuth(),async(req,res)=>{
   try{
      const ownedRecipies = await getOwnedRecipes(req.params.userId)
      res.json(ownedRecipies)
   }catch(err){
    res.status(400).json({message:err.message})
   }
})




module.exports = userRouter;