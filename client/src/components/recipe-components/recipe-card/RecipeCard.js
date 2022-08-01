import { Link } from 'react-router-dom'

import './RecipeCard.css'


export default function RecipeCard({recipe}){
    return(
        <div className="card-wrapper">
      <div className="card">
      <div className="details-image" 
      style={{ backgroundImage: `url(${recipe.imageUrl}) `,
        backgroundSize: "cover"}}
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