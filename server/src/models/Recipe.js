const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title:{type:String,required:true},
    ingridients:{type:String,required:true},
    type:{type:String,required:true,enum:['dessert','dish']},
    ownerId:{type:mongoose.Types.ObjectId,ref:'User'},
    likes:{type:Number},
    comments:[{type:mongoose.Types.ObjectId,ref:'Comment'}]
})

const Recipe = new mongoose.model('Recipe',recipeSchema);

module.exports = Recipe;