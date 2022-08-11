import { useState, useEffect, useContext } from 'react'
import { useParams,useNavigate } from 'react-router-dom';

import useLoader from '../../../hooks/useLoader'

import { getOwnedRecipes } from '../../../services/userService'

import RecipeCard from '../recipe-card/RecipeCard';

import './OwnedRecipies.css'
import Loader from '../../loader/Loader';

export default function OwnedRecipies() {
    const navigate = useNavigate()
    const [ loader, setNewLoader ] = useLoader()
    const { userId } = useParams()
    let [userOwnedRecipes, setUserOwnedRecipes] = useState([]);
    useEffect(() => {
        getOwnedRecipes(userId).then(ownedRecipes => {
            setUserOwnedRecipes(ownedRecipes)
                setNewLoader()   
        }).catch(()=>{
            setNewLoader()
            navigate('/404',{replace:true})
        })

    }, [])
    return (
        <>
            {loader ?
                <Loader /> :
                <div className='owned-container'>
                    {userOwnedRecipes.length == 0 ?
                        <h3 className="owned-msg">You havent posted any recepies yet</h3>
                        :
                        <>
                            <h3 className="owned-msg">These are the recepies you have posted: </h3>
                            <div className='row'>
                                {userOwnedRecipes?.map(x => <RecipeCard key={x._id} recipe={x} />)}
                            </div>
                        </>
                    }
                </div>
            }
        </>
    )
}