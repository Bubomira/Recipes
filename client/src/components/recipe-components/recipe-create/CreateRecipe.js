import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import useRecipeValidator from '../../../hooks/useRecipeValidator'

import { createRecipe } from '../../../services/recipeService';

import './CreateRecipe.css'

export default function CreateRecipe() {
    const [errors,lengthValidator,imageUrlValidator] = useRecipeValidator()
    const navigate = useNavigate()
   
    let [values, setValues] = useState({
        title: '',
        ingridients: '',
        imageUrl: '',
        steps: '',
        type: '',
    })
    const onChangeHandler = (e) => {
        setValues(oldState => ({
            ...oldState,
            [e.target.name]: e.target.value
        }))
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        createRecipe(values).then(() => {
            navigate('/recipeCatalog')
        }).catch(()=>{
            navigate('/404')
        })
    }


    return (
        <div className='wrapper'>
            <div className="create-form">
                <form onSubmit={onSubmitHandler}>
                    <h1 >Create recipe</h1 >
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control item"
                            placeholder="Title"
                            name="title"
                            value={values.title}
                            onChange={onChangeHandler}
                            onBlur={(e) => lengthValidator(e, 3)}
                        />
                        {errors.title &&
                            <p className='create-recipe-error'>Title should be at least 3 characters</p>
                        }
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control item"
                            placeholder="Ingridients"
                            name="ingridients"
                            value={values.ingridients}
                            onChange={onChangeHandler}
                            onBlur={(e) => lengthValidator(e, 10)}
                        />
                        {errors.ingridients &&
                            <p className='create-recipe-error'>ingridients should be at least 10 characters </p>
                        }
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control item"
                            placeholder="ImageUrl"
                            name="imageUrl"
                            value={values.imageUrl}
                            onChange={onChangeHandler}
                            onBlur={(e)=>imageUrlValidator(e)}
                        />
                        {errors.imageUrl &&
                            <p className='create-recipe-error'>Image url should start with https://</p>
                        }
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control item"
                            placeholder="Steps to prepare"
                            name="steps"
                            value={values.steps}
                            onChange={onChangeHandler}
                            onBlur={(e) => lengthValidator(e, 15)}
                        />
                        {errors.steps &&
                            <p className='create-recipe-error'>Steps to prepare should be at least 15 characters </p>
                        }
                    </div>
                    <div >
                        <label htmlFor='dish'> Dish: </label>
                        <input
                            type="radio"
                            name="type"
                            id='dish'
                            className="radioElement"
                            value="dish"
                            checked={values.type == 'dish'}
                            onChange={onChangeHandler}
                        />
                        <label htmlFor='dish'> Dessert:</label>
                        <input
                            type="radio"
                            name="type"
                            id="dessert"
                            className="radioElement"
                            value="dessert"
                            checked={values.type == 'dessert'}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <button
                            type="submit"
                            className="create-recipe"
                            disabled={Object.values(errors).some(x => x == true) || Object.values(values).some(x => x == '')}
                        >
                            Create Recipe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}