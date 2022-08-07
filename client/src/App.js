import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import {AuthProvider} from './contexts/AuthContext'
import {RecipeProvider} from './contexts/RecipeContext'
import LoadingContext from './contexts/LoadingContext'


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
    let [loader,setLoader]=useState(false)
    const setNewLoader=()=>{
        setLoader(oldState=>!oldState)
    }
    return (
        <>
        <LoadingContext.Provider value={{loader:loader, setNewLoader}}>
            <AuthProvider>
                <RecipeProvider>
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
                </RecipeProvider>
            </AuthProvider>
         </LoadingContext.Provider>
        </>

    );
}

export default App;
