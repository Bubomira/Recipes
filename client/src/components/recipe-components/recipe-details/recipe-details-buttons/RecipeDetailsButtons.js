
import { Link ,useNavigate} from 'react-router-dom'

import {deleteRecipe} from '../../../../services/recipeService'

import './RecipeDetailsButtons.css'

export default function RecipeDetailsButtons({ isLiked, isOwned, id }) {
    const navigate = useNavigate()
    const deleteRecipeHandler=()=>{
        deleteRecipe(id).then(()=>{
            navigate('/recipeCatalog')
        })
    }
    if (isLiked == null || isOwned == null) {
        return;
    } else {
        if (isOwned) {
            return (
                <>
                <button className="btn-edit btn-lg">
                    <Link  to={`/editRecipe/${id}`}>
                        Edit
                    </Link>
                </button>
                 <button className="btn-delete btn-lg" onClick={deleteRecipeHandler}>
                        Delete
                 </button>
                </>
            )
        } else {
            return (
                <>
                    <button className="btn-like-dislike btn-lg" disabled={isLiked}>Like</button>
                    <button className="btn-like-dislike btn-lg" disabled={!isLiked}>Disllike</button>
                </>
            )
        }
    }


}