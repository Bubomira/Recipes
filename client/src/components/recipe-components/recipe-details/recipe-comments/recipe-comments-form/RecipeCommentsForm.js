import {useState} from 'react'

import './RecipeCommentsForm.css'

export default function RecipeCommentsForm(){
  let [content,setContent ] =useState('')

  const onChangeHandler = (e)=>{
    setContent(oldState=>(e.target.value))
  }
  const onSubmitHandler=(e)=>{
    e.preventDefault();
    console.log(content)
  }
    return(
    <div className='comment-container'>
    <div className="add-comment-form">
    <form onSubmit={onSubmitHandler}>         
      <h1 className="comment-form-heading"> What do u think about this recipe?</h1 >               
      <div className="form-group">
        <textarea
          type="text"
          className="form-control item"
          placeholder="Comment"
          name="content"
          value={content}
          onChange={onChangeHandler}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="add-comment">
         Add comment
        </button>
      </div>
    </form>
  </div>    
  </div> 
    )
}