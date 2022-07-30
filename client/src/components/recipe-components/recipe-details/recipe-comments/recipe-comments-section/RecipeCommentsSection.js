import Comment from './comment/Comment'
import './RecipeCommentsSection.css'


export default function RecipeCommentsSection(){
    return (
        <section className="clean-block features">
          <div className="row justify-content-center">
            <h3 className="comments-title">Comments:</h3>
            {/*Comments stay here, if none: no-comments-message */}
            </div>
          {/* <h3 className="no-comments-message">This post doesnt have any comments</h3> */}        
      </section>
      
    )
}