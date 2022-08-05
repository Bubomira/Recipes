import {useState,useContext} from 'react'

import RecipeContext from '../../../../../contexts/RecipeContext'
import AuthContext from '../../../../../contexts/AuthContext'

import {postComment} from '../../../../../services/commentService'

import './RecipeCommentsForm.css'

export default function RecipeCommentsForm(){
  const{recipeInfo,addComment} = useContext(RecipeContext)
  const {user} = useContext(AuthContext)
  let [content,setContent ] =useState('')

  const onChangeHandler = (e)=>{
    setContent(oldState=>(e.target.value))
  }
  const onSubmitHandler=(e)=>{
    e.preventDefault();
    postComment(recipeInfo.recipe._id,{content:content, username:user.username})
    .then(comment=>{
      setContent(oldContent=>'')
      addComment(comment)
      
    })
    
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