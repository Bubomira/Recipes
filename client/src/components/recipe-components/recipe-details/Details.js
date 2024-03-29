import { useContext, useEffect } from 'react'
import { useParams,Navigate, useNavigate } from 'react-router-dom'

import { RecipeContext } from '../../../contexts/RecipeContext'
import { AuthContext } from '../../../contexts/AuthContext'

import useLoader from '../../../hooks/useLoader'

import { getOneRecipe } from '../../../services/recipeService'

import Loader from '../../loader/Loader'
import RecipeComments from './recipe-comments/RecipeComments'
import RecipeDetailsButtons from './recipe-details-buttons/RecipeDetailsButtons'

import './Details.css'

export default function Details() {
	const navigate = useNavigate()
	const [ loader, setNewLoader ] = useLoader();
	const { recipeInfo, setDetailedRecipeInfo } = useContext(RecipeContext);
	const { user } = useContext(AuthContext)
	const { recipeId } = useParams();
	useEffect(() => {
		getOneRecipe(recipeId).then(recipeDetailed => {
			setDetailedRecipeInfo(recipeDetailed)
			setNewLoader()
		}).catch(()=>{
			setNewLoader()	
			navigate('/404',{replace:true})
		})
	},[recipeId, user])


	return (
		<>
			{loader ?
				<Loader />
				:
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
									<RecipeDetailsButtons isLiked={recipeInfo.isLiked} isOwned={recipeInfo.isOwned} id={recipeInfo.recipe?._id} />
								</div>
							</div>
						</div>
					</section>
					<RecipeComments isOwned={recipeInfo.isOwned} />
				</>
			}
		</>

	)
}