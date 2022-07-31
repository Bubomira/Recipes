const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},  
    likedRecipies:[{type:mongoose.Types.ObjectId,ref:'Recipe'}],
    ownedRecipies:[{type:mongoose.Types.ObjectId,ref:'Recipe'}],
})

const User =new mongoose.model('User',userSchema);

module.exports = User