import { useState, useContext, useEffect} from 'react';
import { useNavigate, useParams,Navigate } from 'react-router-dom';

import { RecipeContext } from '../../../contexts/RecipeContext'
import { AuthContext } from '../../../contexts/AuthContext';

import { getOneRecipe, editRecipe } from '../../../services/recipeService'

import useRecipeValidator from '../../../hooks/useRecipeValidator'

import './EditRecipe.css'

export default function EditRecipe() {
    const { setDetailedRecipeInfo, recipeInfo } = useContext(RecipeContext);
    const [errors,lengthValidator,imageUrlValidator] = useRecipeValidator()
    const {user } = useContext(AuthContext)
    const navigate = useNavigate();
    const { recipeId } = useParams()

    useEffect(() => {
        getOneRecipe(recipeId).then(recipeDetailed => {
            setDetailedRecipeInfo(recipeDetailed)
        })
    }, [recipeId])

    let [values, setValues] = useState({
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
        editRecipe(recipeInfo.recipe._id, values).then(() => {
            navigate(`/details/${recipeInfo.recipe._id}`)
        }).catch(()=>{
            navigate('/oops')
        })
    }

    if(recipeInfo.recipe.ownerId!=user._id){
        return <Navigate to='/404' replace/>
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
                            onBlur={(e)=>lengthValidator(e,3)}
                        />
                         {errors.title &&
                            <p className='edit-recipe-error'>Title should be at least 3 characters</p>
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
                        onBlur={(e)=>lengthValidator(e,10)}
                        />
                         {errors.ingridients &&
                            <p className='edit-recipe-error'>ingridients should be at least 10 characters </p>
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
                            <p className='edit-recipe-error'>Image url should start with https://</p>
                        }
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control item"
                            placeholder="Steps to prepare"
                            name="steps"
                            value={values.steps}
                            onChange={onChangeHandler}
                            onBlur={(e)=>lengthValidator(e,15)}
                        />
                        {errors.steps &&
                            <p className='edit-recipe-error'>Steps to prepare should be at least 15 characters</p>
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
                            value='dessert'
                            checked={values.type == 'dessert'}
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <button
                         type="submit"
                         className="edit-recipe"
                         disabled={Object.values(values).some(x=>x=='')||Object.values(errors).some(x=>x==true)}
                         >
                            Submit changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}