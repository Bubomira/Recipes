const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{type:String,required:[true,'Username is required!'],minLength:[3,'Username should be at least 3 characters!']},
    email:{type:String,
        required:[true,'Email is required!'],
        minLength:[5,'Email should be at least 5 characters!'],
        validate:{
            validator:(v)=>{
                return v.includes('@')
            },
            message:'The email is not valid!'
        }
    },
    password:{type:String,required:[true,'Password is required!']},  
    likedRecipies:[{type:mongoose.Types.ObjectId,ref:'Recipe'}],
    ownedRecipies:[{type:mongoose.Types.ObjectId,ref:'Recipe'}],
})

const User =new mongoose.model('User',userSchema);

module.exports = User