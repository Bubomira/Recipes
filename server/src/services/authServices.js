const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User')

const JWT_SECRET = 'jdekjfdedledmw;;s,dxkle'

module.exports.loginUser = async(userInfo)=>{


}

module.exports.registerUser = async(userInfo)=>{
    const{username,email,password,rePass} = userInfo;
    if(password.lenght<5){
        throw new Error('Password should be more than 5 characters')
    }
    if(password!=rePass){
        throw new Error('Passwords must match!')
    }

    const hashedPass = await bcrypt.hash(password,10);
    const user = await User.create({
        email:email,
        username:username,
        password:hashedPass
    })
   return generateToken(user)
}

module.exports.logoutUser = async()=>{

}

function generateToken(user) {
    let result =  new Promise((resolve,reject)=>{
        jwt.sign({_id:user._id,username:user.username,email:user.email},JWT_SECRET,(err,token)=>{
            if(err){
                reject(err);
            }
            resolve(token)
        })
    })
    return result;
}