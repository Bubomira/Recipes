import { Link } from 'react-router-dom'

import './RecipeHomeCard.css'

export default function RecipeHomeCard({ recipe }) {
    return (
        <div className="card-wrapper-home">
            <div className="card-home"
                style={{
                    backgroundImage: `url(${recipe.imageUrl}) `,
                    backgroundSize: "cover"
                }} >
            <Link className="details-button" to={`/details/${recipe._id}`}>
                Details
            </Link>
            </div>
        </div>
    )
}