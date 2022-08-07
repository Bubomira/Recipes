import { useContext } from 'react';

import {RecipeContext} from '../../../../../contexts/RecipeContext';

import Comment from './comment/Comment';

import './RecipeCommentsSection.css'


export default function RecipeCommentsSection(){
  const {recipeInfo} = useContext(RecipeContext)
    return (
        <section className="clean-block features">
          <div className="row justify-content-center">
            <h3 className="comments-title">Comments:</h3>
            {recipeInfo.recipe.comments?.length==0?
            <h3 className="no-comments-message">This post doesnt have any comments</h3>
            :
            recipeInfo.recipe.comments?.map(x=><Comment key={x._id} comment={x}/>)
            }     
          </div>  
      </section>
      
    )
}