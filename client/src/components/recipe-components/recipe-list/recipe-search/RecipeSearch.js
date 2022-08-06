import { useState } from 'react'

import {searchRecipe} from '../../../../services/recipeService'

import './RecipeSearch.css'

export default function RecipeSearch({filterRecipes}) {
    let [name, setName] = useState('')
    const onChangeHandler = (e) => {
        setName(oldName => (e.target.value))
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        searchRecipe({name:name}).then(filteredRecipes=>{
            filterRecipes(filteredRecipes)
            setName('')
        })
        
    }
    return (
        <form className="search-form" onSubmit={onSubmitHandler}>
            <input type="text"
                className="search-input"
                placeholder="search recipe title here..."
                value={name}
                onChange={onChangeHandler}
            />
            <input type="submit" className="search-submit" value="Search" />
        </form>
    )
}