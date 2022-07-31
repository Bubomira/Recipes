import { Link } from 'react-router-dom'

import './RecipeCard.css'


export default function RecipeCard({recipe}){
    return(
        <div className="card-wrapper">
      <div className="card">
        <img
          className="card-img-top w-100 d-block"
          src={recipe.imageUrl}
        />
        <div className="card-body">
          <h4 className="card-title">{recipe.title}</h4>
        </div>        
          <Link className="details-button" to={`/details/${recipe._id}`}>
           Details
          </Link>
      </div>
    </div>

    )
}