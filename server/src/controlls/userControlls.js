const userRouter = require('express').Router();

const{loginUser,logoutUser,registerUser} = require('../services/authServices');
const {findUser,getLikedRecepies,getOwnedRecipes} = require('../services/userService')

const {isAuth} = require('../middlewares/guards')

const errorMapper = require('../utils/errorMapper')

userRouter.post('/login',async(req,res)=>{
  try{
    const userSessionData = await loginUser(req.body);
    res.json(userSessionData);
  }catch(err){
    res.status(400).json({message:err.message})
  }
   
})

userRouter.post('/register',async(req,res)=>{
    try{
    const userSessionData =await registerUser(req.body)
    res.status(201).json(userSessionData)
    }catch(err){
      const message = errorMapper(err)
     res.status(400).json({message:message})
    }
   
})

userRouter.get('/logout',isAuth(),(req,res)=>{
   logoutUser(req.user.token);
   res.status(200).json({message:'successfully logouted!'})
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