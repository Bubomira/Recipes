import './RecipeCommentsForm.css'

export default function RecipeCommentsForm(){
    return(
    <div className='comment-container'>
    <div className="add-comment-form">
    <form>         
      <h1 className="comment-form-heading"> What do u think about this recipe?</h1 >               
      <div className="form-group">
        <textarea
          type="text"
          className="form-control item"
          placeholder="Comment"
          name="content"
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