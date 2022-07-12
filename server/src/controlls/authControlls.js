const authRouter = require('express').Router();

const{loginUser,logoutUser,registerUser} = require('../services/authServices')

authRouter.post('/login',(req,res)=>{
  try{
    const token = loginUser(req.body);
    console.log(token)

  }catch(err){

  }
   
})

authRouter.post('/register',(req,res)=>{
    try{
    const token = registerUser(req.body)
    }catch(err){

    }
   
})

authRouter.post('/logout',(req,res)=>{
   
})

module.exports = authRouter;