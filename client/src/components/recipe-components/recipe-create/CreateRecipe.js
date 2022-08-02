import { useState } from 'react';
import './CreateRecipe.css'

export default function CreateRecipe() {
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
    console.log(values)
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
              value="dessert"
              checked={values.type=='dessert'}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="create-recipe">
              Create Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}