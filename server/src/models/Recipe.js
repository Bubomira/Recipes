const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title:{type:String,required:[true,'Title is required!'],minLength:[3,'Title should be at least 3 characters']},
    ingridients:{type:String,required:[true,'Ingridients are required!'],minLength:[10,'Ingridients should be at least 3 characters']},
    steps:{type:String,required:[true,'Steps are required!'],minLength:[15,'Steps should be at least 3 characters']},
    imageUrl:{type:String,
        required:[true,'Image url is required'],
        validate:{
            validator:(v)=>{
                return v.startsWith('https://')
            },
            message:'Image url should start with https://'
        }
},
    type:{type:String,required:true,enum:['dessert','dish']},
    ownerId:{type:mongoose.Types.ObjectId,ref:'User'},
    likes:{type:Number},
    comments:[{type:mongoose.Types.ObjectId,ref:'Comment'}]
})

const Recipe = new mongoose.model('Recipe',recipeSchema);

module.exports = Recipe;