
import { Link } from 'react-router-dom'

import './RecipeDetailsButtons.css'

export default function RecipeDetailsButtons({ isLiked, isOwned, id }) {
    if (isLiked == null || isOwned == null) {
        return;
    } else {
        if (isOwned) {
            return (
                <>
                    <Link className="btn-edit btn-lg" to={`/editRecipe/${id}`}>
                        Edit
                    </Link>
                    <Link className="btn-delete btn-lg" to={`/deleteRecipe/${id}`} >
                        Delete
                    </Link>
                </>
            )
        } else {
            return (
                <>
                    <button className="btn-like-dislike btn-lg" disabled={isLiked}>Like</button>
                    <button className="btn-like-dislike btn-lg" disabled={isLiked}>Disllike</button>
                </>
            )
        }
    }


}