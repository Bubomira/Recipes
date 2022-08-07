import {useState,useContext,useEffect} from 'react';
import { useNavigate,useParams } from 'react-router-dom';

import {RecipeContext} from '../../../contexts/RecipeContext'

import {getOneRecipe,editRecipe} from '../../../services/recipeService'

import './EditRecipe.css'

export default function EditRecipe(){
 const {setDetailedRecipeInfo,recipeInfo} = useContext(RecipeContext);
 const navigate = useNavigate();
 const {recipeId} = useParams()

 useEffect(() => {
  getOneRecipe(recipeId).then(recipeDetailed => {
    setDetailedRecipeInfo(recipeDetailed)
  })
}, [recipeId])

  let [values,setValues] =useState({
    title: recipeInfo.recipe.title,
    ingridients: recipeInfo.recipe.ingridients,
    imageUrl: recipeInfo.recipe.imageUrl,
    steps: recipeInfo.recipe.steps,
    type: recipeInfo.recipe.type,
  })
  const onChangeHandler = (e) => {
    setValues(oldState => ({
      ...oldState,
      [e.target.name]: e.target.value
    }))
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    editRecipe(recipeInfo.recipe._id,values).then(()=>{
      navigate(`/details/${recipeInfo.recipe._id}`)
    })
  }
    return (
        <div className='wrapper'>
          <div className="edit-form">
          <form onSubmit={onSubmitHandler}>         
            <h1 >Edit recipe</h1 >               
            <div className="form-group">
              <input
                type="text"
                className="form-control item"
                placeholder="Title"
                name="title"
                value={values.title}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control item"
                placeholder="Ingridients"
                name="ingridients"
                value={values.ingridients}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-group">
              <input 
                type="text"
                className="form-control item"
                placeholder="ImageUrl"
                name="imageUrl"
                value={values.imageUrl}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-group">
              <textarea                
                className="form-control item"
                placeholder="Steps to prepare"
                name="steps"
                value={values.steps}
                onChange={onChangeHandler}
              />
            </div>  
            <div >
                <label htmlFor='dish'> Dish: </label>
                <input 
                type="radio" 
                name="type"
                 id='dish'
                  className="radioElement"
                  value="dish"
                  checked={values.type=='dish'}
                  onChange={onChangeHandler}
                  />
                <label htmlFor='dish'> Dessert:</label>
                <input
                type="radio"
                name="type"
                id="dessert"
                className="radioElement"
                value='dessert'
                checked={values.type=='dessert'}
                onChange = {onChangeHandler}
                />
            </div>
            <div className="form-group">
              <button type="submit" className="edit-recipe">
               Submit changes
              </button>
            </div>
          </form>
        </div>    
        </div> 
    ) 
}