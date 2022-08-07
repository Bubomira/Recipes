import {createContext,useState} from 'react';

export const RecipeContext = createContext();


export const RecipeProvider = ({children})=>{
    
let [recipeInfo, setRecipeInfo] = useState({
    recipe:{},
    isOwner:null,
    isLiked:null
})
const setDetailedRecipeInfo = (recipeData) => {
    let isLiked = typeof recipeData.isLiked=='boolean'? recipeData.isLiked :null;
    let isOwned = typeof recipeData.isLiked=='boolean'? recipeData.isOwned :null;
    setRecipeInfo(oldRecipe=>({
        recipe:recipeData.recipe,
        isLiked,
        isOwned 
    }));
}
const addComment = (comment)=>{
    let comments = recipeInfo.recipe.comments;
    comments.push(comment)
    setRecipeInfo(oldRecipeInfo=>({
        ...oldRecipeInfo, 
        [oldRecipeInfo.recipe.comments]:comments
    }
    ))
}

const addLikeToRecipe=()=>{
    let newLikes = recipeInfo.recipe.likes;
    newLikes++;
    setRecipeInfo(oldRecipeInfo=>({
        ...oldRecipeInfo,
        isLiked:true,
        recipe:{
            ...oldRecipeInfo.recipe,
            likes:newLikes,
            
        }            
    }))
}
const addDislikeToRecipe=()=>{
    let newLikes = recipeInfo.recipe.likes;
    newLikes--;
    setRecipeInfo(oldRecipeInfo=>({
        ...oldRecipeInfo,
        isLiked:false,
        recipe:{
            ...oldRecipeInfo.recipe,
           likes :newLikes,
        }      
    }))
}

    return(
        <RecipeContext.Provider value={{ recipeInfo: recipeInfo, setDetailedRecipeInfo,addComment,addLikeToRecipe,addDislikeToRecipe }}>
         {children}
        </RecipeContext.Provider>
    )
}