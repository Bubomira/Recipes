import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import RecipeContext from '../../../contexts/RecipeContext'

import { getOneRecipe } from '../../../services/recipeService'

import RecipeComments from './recipe-comments/RecipeComments'

import './Details.css'
export default function Details() {
	const { recipeInfo, setDetailedRecipeInfo } = useContext(RecipeContext);
	const { recipeId } = useParams();
	useEffect(() => {
		getOneRecipe(recipeId).then(recipeInfo => {
			setDetailedRecipeInfo(recipeInfo)
		})

	}, [recipeId])
	return (
		<>
			<section className="clean-block clean-info">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-6">
							<img className="img-thumbnail" src={recipeInfo.recipe?.imageUrl} />
							<p className="likes">Likes: {recipeInfo.recipe?.likes}</p>
						</div>
						<div className="col-md-6">
							<div className="getting-started-info">
								<h3>{recipeInfo.recipe?.title}</h3>
								<p>
									Ingridients: {recipeInfo.recipe?.ingridients}
								</p>
								<p className="recipe-description">
									How to prepare: {recipeInfo.recipe?.steps}
								</p>
							</div>
							{/*Buttons
							 
								<>
									<button className="btn-like-dislike btn-lg" disabled={recipeInfo.isLiked}>Like</button>
									<button className="btn-like-dislike btn-lg" disabled={recipeInfo.isLiked == false}>Disllike</button>
								</>
								:
							<>
								<button className="btn-edit btn-lg" >
									Edit
								</button>
								<button className="btn-delete btn-lg" >
									Delete
								</button>
							</>							
							
	*/}
						
						</div>
					</div>
				</div>
			</section>
			<RecipeComments />

		</>

	)
}