const authRouter = require('express').Router();

const{loginUser,logoutUser,registerUser} = require('../services/authServices')

authRouter.post('/login',async(req,res)=>{
  try{
    const token = await loginUser(req.body);
    res.json(token);
  }catch(err){
    res.status(400).json({message:err.message})

  }
   
})

authRouter.post('/register',async(req,res)=>{
    try{
    const token =await registerUser(req.body)
    res.status(201).json(token)
    }catch(err){
     res.status(400).json({message:err.message})
    }
   
})

authRouter.post('/logout',(req,res)=>{
   
})

module.exports = authRouter;