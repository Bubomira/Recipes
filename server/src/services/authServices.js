const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User')

const JWT_SECRET = 'jdekjfdedledmw;;s,dxkle'
const blackList = new Set();

module.exports.loginUser = async(userInfo)=>{
    const {username,password} =userInfo;
    const user = await User.findOne({username:username});
    if(!user){
        throw new Error('Incorrect username or password')
    }
    const areMatching = await bcrypt.compare(password,user.password);
    if(!areMatching){
        throw new Error('Incorrect username or password')
    }

    return generateToken(user)
}

module.exports.registerUser = async(userInfo)=>{
    const{username,email,password,rePass} = userInfo;
    if(await User.findOne({username:username})){
        throw new Error(`the username ${username} is already taken!`)
    }
    if(password.length<5){
        throw new Error('Password should be more than 5 characters!')
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

module.exports.logoutUser = (token)=>{
    blackList.add(token)
}

module.exports.verifyToken = async(token)=>{
    if(blackList.has(token)){
        throw new Error('Token is blacklisted')
    }
    return new Promise((resolve,reject)=>{
        jwt.verify(token,JWT_SECRET,(err,decodedToken)=>{
            if(err){
                reject(err)
            }
            resolve(decodedToken)
        })
    })
}

function generateToken(user) {
    let result =  new Promise((resolve,reject)=>{
        jwt.sign({_id:user._id,username:user.username,email:user.email},JWT_SECRET,{expiresIn:'2d'},(err,token)=>{
            if(err){
                reject(err);
            }
            resolve(token)
        })
    })
    return result;
}

module.exports.findUser= async(id)=>{
    return User.findById(id);
}