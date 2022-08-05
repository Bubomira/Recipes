const Comment = require('../models/Comment');

module.exports.createComment =async(data,ownerId)=>{
    return await Comment.create({
        content:data.content,
        ownerId:ownerId,
        username:data.username
    })
}