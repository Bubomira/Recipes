import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react'

import { getLikedRecipes } from '../../../services/userService';

import RecipeCard from '../recipe-card/RecipeCard';

import './LikedRecipies.css'

export default function LikedRecipes() {
    const { userId } = useParams()
    let [userLikedRecipes, setUserLikedRecipes] = useState([]);
    useEffect(() => {
        getLikedRecipes(userId).then((likedRecipes) => {
            setUserLikedRecipes(likedRecipes)
        })
    }, [])

    return (
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
    )
}