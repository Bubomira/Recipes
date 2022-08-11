import { Routes, Route } from 'react-router-dom'

import { AuthProvider } from './contexts/AuthContext'
import { RecipeProvider } from './contexts/RecipeContext'

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

import UserGuard from './components/guards/user-guard/UserGuard'
import GuestGuard from './components/guards/guest-guard/GuestGuard'


function App() {
 
    return (
        <>
                <AuthProvider>
                    <RecipeProvider>
                        <Navigation />
                        <Routes>
                            <Route path='*' element={<NotFound />} />
                            <Route path='/details/:recipeId' element={<Details />} />
                            <Route path='/' element={<Home />} />
                            <Route path='/recipeCatalog' element={<RecipeList />} />
                            <Route element={<UserGuard />}>
                                <Route path='/editRecipe/:recipeId' element={<EditRecipe />} />
                                <Route path='/createRecipe' element={<CreateRecipe />} />
                                <Route path='/profile' element={<UserProfile />} />
                                <Route path='/logout' element={<Logout />} />
                                <Route path='/likedRecepies/:userId' element={<LikedRecipies />} />
                                <Route path='/ownedRecipies/:userId' element={<OwnedRecepies />} />
                            </Route>
                            <Route element={<GuestGuard />}>
                                <Route path='/register' element={<Register />} />
                                <Route path='/login' element={<Login />} />
                            </Route>
                        </Routes>
                    </RecipeProvider>
                </AuthProvider>
        </>

    );
}

export default App;
