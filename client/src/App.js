import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import AuthContext from './contexts/AuthContext'
import RecipeContext from './contexts/RecipeContext'
import LoadingContext from './contexts/LoadingContext'

import useLokalStorageAuth from './hooks/useLokalStorageAuth'

import Register from './components/auth-components/register/Register'
import Login from './components/auth-components/login/Login'
import Logout from './components/auth-components/logout/Logout'
import Navigation from './components/Navigation'
import Details from './components/recipe-components/recipe-details/Details'
import RecipeList from './components/recipe-components/recipe-list/RecipeList'
import CreateRecipe from './components/recipe-components/recipe-create/CreateRecipe'
import EditRecipe from './components/recipe-components/recipe-edit/EditRecipe'
import UserProfile from './components/user-profile/UserProfile'
import LikedRecipies from './components/recipe-components/liked-recipes/LikedRecipes'
import OwnedRecepies from './components/recipe-components/owned-recipes/OwnedRecipies'
import Home from './components/home/Home'
import NotFound from './components/404/NotFound'


function App() {
    let [recipeInfo, setRecipeInfo] = useState({
        recipe:{},
        isOwner:null,
        isLiked:null
    })
    let [user, setUser] = useLokalStorageAuth({});
    const loginUser = (newUser) => {
        setUser(newUser);
    }
    let [loader,setLoader]=useState(false)
    const setNewLoader=()=>{
        setLoader(oldState=>!oldState)
    }
    const logoutUser = () => {
        setUser({})
    }
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

    return (
        <>
        <LoadingContext.Provider value={{loader:loader, setNewLoader}}>
            <AuthContext.Provider value={{ user: user, loginUser, logoutUser }}>
                <RecipeContext.Provider value={{ recipeInfo: recipeInfo, setDetailedRecipeInfo,addComment,addLikeToRecipe,addDislikeToRecipe }}>
                    <Navigation />
                    <Routes>
                    <Route path='*' element={<NotFound />} />
                        <Route path='/details/:recipeId' element={<Details />} />
                        <Route path='/editRecipe/:recipeId' element={<EditRecipe />} />
                        <Route path='/' element={<Home />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/recipeCatalog' element={<RecipeList />} />
                        <Route path='/createRecipe' element={<CreateRecipe />} />
                        <Route path='/profile' element={<UserProfile />} />
                        <Route path='/likedRecepies/:userId' element={<LikedRecipies />} />
                        <Route path='/ownedRecipies/:userId' element={<OwnedRecepies />} />
                        <Route path='/logout' element={<Logout />} />
                    </Routes>
                </RecipeContext.Provider>
            </AuthContext.Provider>
         </LoadingContext.Provider>
        </>

    );
}

export default App;
