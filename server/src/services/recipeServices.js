const Recipe = require('../models/Recipe')

module.exports.getFirstThreeRecipies = async()=>{
   let recipes = await this.getAllRecipes();
 const reversedRecipes=  recipes.reverse();
  if(reversedRecipes.length<3){
    return reversedRecipes;
  }else{
    return [reversedRecipes[0],reversedRecipes[1],reversedRecipes[2]]
  }
}

module.exports.getAllRecipes = async(filter)=>{
    let recipes = await Recipe.find({})
    if(filter){
        recipes = recipes.filter(x=>x.title.toLowerCase().startsWith(filter.name.toLowerCase()))
    }
    return recipes;
}

module.exports.createRecipe = async(data,id)=>{
    return await Recipe.create({
        title:data.title,
        ingridients:data.ingridients,
        type:data.type,
        likes:0,
        imageUrl:data.imageUrl,
        steps:data.steps,
        ownerId :id 
    })

}

module.exports.editRecipe = async(id,data)=>{
  let recipe = await this.getRecipe(id);
  recipe.title = data.title;
  recipe.ingridients = data.ingridients;
  recipe.type=data.type ;
  recipe.steps=data.steps;
  recipe.imageUrl =data.imageUrl;
    await recipe.save();
    return recipe;
}

module.exports.deleteRecipe = async(id)=>{
     await Recipe.findByIdAndDelete(id)
}

module.exports.getRecipe = async(id)=>{
    return await Recipe.findById(id).populate('comments')
}

module.exports.likeRecipe = async(id)=>{

    let recipe = await this.getRecipe(id);
    recipe.likes +=1;
    await recipe.save();
    return recipe;

}

module.exports.dislikeRecipe = async(id)=>{
    let recipe = await this.getRecipe(id);
    recipe.likes -=1;
    await recipe.save();
    return recipe;
}

module.exports.attachComment= async(comment,recipeId)=>{
    let recipe = await Recipe.findById(recipeId);
    recipe.comments.push(comment);
    await recipe.save()
    return recipe.populate('comments');
}