import { useState, useEffect } from 'react'

import RecipeCard from '../recipe-card/RecipeCard'
import RecipeSearch from './recipe-search/RecipeSearch'

import { getAllRecipes } from '../../../services/recipeService'

import './RecipeList.css'

export default function RecipeList() {
    let [allRecipes, setAllRecipes] = useState([]);
    useEffect(() => {
        getAllRecipes().then(recipes => {
            setAllRecipes(recipes)
        })

    }, [])
     const filterRecipes = (filteredRecipes)=>{
        setAllRecipes(filteredRecipes)
     }

    return (
        <div className="details-wrapper">
            <div className="container">
                <RecipeSearch  filterRecipes={filterRecipes}/>
                <div className="row">
                    {allRecipes.length==0 ?
                        <h2 className="no-recipes"> No recipes in database</h2>
                        :
                        allRecipes.map(x => <RecipeCard key={x._id} recipe={x} />)
                    }
                </div>
            </div>
        </div>
    )
}