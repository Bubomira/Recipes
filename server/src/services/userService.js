const User = require('../models/User')

module.exports.findUser= async(id)=>{
    return User.findById(id);
}

module.exports.addRecipeToLiked = async(id,recipe)=>{
    const user = await this.findUser(id);
    if(user.likedRecipies.includes(recipe._id)){
       throw new Error( 'You have alreadly liked this recepie!')
    }
    user.likedRecipies.push(recipe);
    await user.save();
}

module.exports.removeRecipeFromLiked = async(id,recipe)=>{
    const user = await this.findUser(id);
    if(!user.likedRecipies.includes(recipe._id)){
        throw new Error(  'You cant dislike a recipe u havent liked!')
    }
    user.likedRecipies = user.likedRecipies.filter(x=>x==recipe._id);
    await user.save();
}