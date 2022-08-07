import { useContext } from 'react'

import {RecipeContext} from '../../../../contexts/RecipeContext'

import { Link ,useNavigate} from 'react-router-dom'

import {deleteRecipe,likeRecipe,dislikeRecipe} from '../../../../services/recipeService'

import './RecipeDetailsButtons.css'

export default function RecipeDetailsButtons({ isLiked, isOwned, id,likes }) {
    const {addLikeToRecipe,addDislikeToRecipe} = useContext(RecipeContext);
    const navigate = useNavigate()

    const deleteRecipeHandler=()=>{
        deleteRecipe(id).then(()=>{
            navigate('/recipeCatalog')
        })
    }

    const likeRecipeHandler=()=>{
        likeRecipe(id).then(()=>{
            addLikeToRecipe()
        }).catch(err=>{
            console.log(err)
        })
    }
    const dislikeRecipeHandler=()=>{
            dislikeRecipe(id).then(()=>{
                addDislikeToRecipe()
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
                    <button className="btn-like-dislike btn-lg" disabled={isLiked} onClick={likeRecipeHandler}>Like</button>
                    <button className="btn-like-dislike btn-lg" disabled={!isLiked} onClick={dislikeRecipeHandler}>Disllike</button>
                </>
            )
        }
    }
  }

