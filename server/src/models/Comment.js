const mongoose = require('mongoose');

const commentSchema =  new mongoose.Schema({
    ownerId:{type:mongoose.Types.ObjectId,ref:'User'},
    content:{type:String,required:true}
})

const Comment = new mongoose.model('Comment',commentSchema);

module.exports = Comment;