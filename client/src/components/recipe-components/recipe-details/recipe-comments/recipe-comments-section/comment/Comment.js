import './Comment.css'

export default function Comment({comment}){
    return(
        <div className="col-md-5 feature-box">     
        <p>
            <b>{comment.username} </b>
          {comment.content}
        </p>
      </div> 
    )
}