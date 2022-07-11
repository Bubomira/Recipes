const mongoose = require('mongoose');

const commentSchema =  new mongoose.Schema({
    owner:{type:mongoose.Types.ObjectId,ref:'User'},
    content:{type:String,required:true}
})

const Comment = new mongoose.model('Comment',commentSchema);

mongoose.model.exports = Comment;