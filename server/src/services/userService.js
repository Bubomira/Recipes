const User = require('../models/User')

module.exports.findUser= async(id)=>{
    return User.findById(id).populate('likedRecipies').populate('ownedRecipies');
}

module.exports.addRecipeToLiked = async(id,recipe)=>{
    const user = await User.findById(id);
    if(user.likedRecipies.includes(recipe._id.toString())){
       throw new Error( 'You have alreadly liked this recepie!')
    }
    user.likedRecipies.push(recipe);
    await user.save();
}

module.exports.removeRecipeFromLiked = async(id,recipe)=>{
    const user = await User.findById(id);
    if(!user.likedRecipies.includes(recipe._id)){
        throw new Error('You cant dislike a recipe u havent liked!')
    }
    user.likedRecipies = user.likedRecipies.filter(x=>x==recipe._id);
    await user.save();
}
module.exports.addRecipeToOwned= async(id,recipe)=>{
    const user = await User.findById(id);
    user.ownedRecipies.push(recipe);
    await user.save();
}
 module.exports.getLikedRecepies =async(id)=>{
    const user = await User.findById(id).populate('likedRecepies')
    return user.likedRecipies;
 }

 module.exports.getOwnedRecipes =async(id)=>{
    const user = await User.findById(id).populate('ownedRecipies')
    return user.ownedRecipies;
 }