import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react'

import { getOwnedRecipes } from '../../../services/userService'

import RecipeCard from '../recipe-card/RecipeCard';

import './OwnedRecipies.css'

export default function OwnedRecipies() {
    const { userId } = useParams()
    let [userOwnedRecipes, setUserOwnedRecipes] = useState([]);
    useEffect(() => {
        getOwnedRecipes(userId).then(ownedRecipes => {
            setUserOwnedRecipes(ownedRecipes)
        })

    }, [userId])
    return (
        <div className='owned-container'>
            {userOwnedRecipes.length == 0 ?
                <h3 className="owned-msg">You havent posted any recepies yet</h3>
                :
                <>
                    <h3 className="owned-msg">These are the recepies you have posted: </h3>
                    <div className='row'>
                        {userOwnedRecipes?.map(x=><RecipeCard key={x._id}  recipe={x}/>)}
                    </div>
                </>

            }


        </div>
    )
}