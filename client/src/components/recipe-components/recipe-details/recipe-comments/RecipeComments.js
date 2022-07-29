import RecipeCommentsForm from './recipe-comments-form/RecipeCommentsForm'
import RecipeCommentsSection from './recipe-comments-section/RecipeCommentsSection'

export default function RecipeComments(){
    {/*Logged in user but now owner can post comments */}
    return(
    <>
    <RecipeCommentsForm/>
    <RecipeCommentsSection/>
    </>
    )
}