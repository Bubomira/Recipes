import { useState, useEffect, useContext } from 'react'

import LoadingContext from '../../../contexts/LoadingContext'

import Loader from '../../loader/Loader'
import RecipeCard from '../recipe-card/RecipeCard'
import RecipeSearch from './recipe-search/RecipeSearch'

import { getAllRecipes } from '../../../services/recipeService'

import './RecipeList.css'

export default function RecipeList() {
    const { loader, setNewLoader } = useContext(LoadingContext)
    let [allRecipes, setAllRecipes] = useState([]);
    useEffect(() => {
        setNewLoader()
        getAllRecipes().then(recipes => {
            setAllRecipes(recipes)
            setTimeout(()=>{
                setNewLoader()
            },25)
        })

    }, [])
    const filterRecipes = (filteredRecipes) => {
        setAllRecipes(filteredRecipes)
    }

    return (
        <div className="details-wrapper">
            <div className="container">
                {loader ?        
                        <Loader/>
                    :
                    <>
                        <RecipeSearch filterRecipes={filterRecipes} />
                        <div className="row">
                            {allRecipes.length == 0 ?
                                <h2 className="no-recipes"> No recipes in database</h2>
                                :
                                allRecipes.map(x => <RecipeCard key={x._id} recipe={x} />)
                            }
                        </div>
                    </>
                }
            </div>
        </div>
    )
}