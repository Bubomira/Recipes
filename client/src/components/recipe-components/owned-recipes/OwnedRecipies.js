import { useState, useEffect,useContext } from 'react'

import AuthContext from '../../../contexts/AuthContext'

import { getOwnedRecipes } from '../../../services/userService'

import RecipeCard from '../recipe-card/RecipeCard';

import './OwnedRecipies.css'

export default function OwnedRecipies() {
    const { user } = useContext(AuthContext)
    let [userOwnedRecipes, setUserOwnedRecipes] = useState([]);
    useEffect(() => {
        getOwnedRecipes(user._id).then(ownedRecipes => {
            setUserOwnedRecipes(ownedRecipes)
        })

    }, [])
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