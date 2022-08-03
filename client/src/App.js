
import { Routes, Route } from 'react-router-dom'

import AuthContext from './contexts/AuthContext'

import useLokalStorageAuth  from './hooks/useLokalStorageAuth'

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


function App() {
   let [user, setUser] = useLokalStorageAuth({});
    const loginUser = (newUser) => {
        setUser(newUser);
    }
    const logoutUser =()=>{
        setUser({})
    }
    return (
        <>
            <AuthContext.Provider  value={{user:user,loginUser,logoutUser}}>
                <Navigation />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/details/:recipeId' element={<Details />} />
                    <Route path='/recipeCatalog' element={<RecipeList />} />
                    <Route path='/createRecipe' element={<CreateRecipe />} />
                    <Route path='/editRecipe/:recipeId' element={<EditRecipe />} />
                    <Route path='/profile' element={<UserProfile />} />
                    <Route path='/likedRecepies/:userId' element={<LikedRecipies />} />
                    <Route path='/ownedRecipies/:userId' element={<OwnedRecepies />} />
                    <Route path='/logout' element={<Logout />} />
                </Routes>
            </AuthContext.Provider>
        </>

    );
}

export default App;
