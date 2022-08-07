import { useState, useEffect,useContext } from 'react'

import {AuthContext} from '../../../contexts/AuthContext'
import LoadingContext from '../../../contexts/LoadingContext'

import { getLikedRecipes } from '../../../services/userService';
import Loader from '../../loader/Loader';

import RecipeCard from '../recipe-card/RecipeCard';

import './LikedRecipies.css'

export default function LikedRecipes() {
    const { loader, setNewLoader } = useContext(LoadingContext)
    const { user } = useContext(AuthContext)
    let [userLikedRecipes, setUserLikedRecipes] = useState([]);
    useEffect(() => {
        setNewLoader();
        getLikedRecipes(user._id).then((likedRecipes) => {
            setUserLikedRecipes(likedRecipes)
            setTimeout(()=>{
                setNewLoader()
            },25)
        })
    }, [])

    return (
        <>
        {loader ?
        <Loader/>
        :
        <div className='liked-container'>
            {userLikedRecipes.length == 0 ?
                <h3 className="liked-msg">You havent liked any recepies yet</h3>
                : <>
                    <h3 className="liked-msg">These are the recepies you have liked: </h3>
                    <div className='row'>
                        {userLikedRecipes?.map(x=><RecipeCard key={x._id} recipe={x}/>)}
                    </div>
                </>
            }


        </div>
     }
     </>
    )
}