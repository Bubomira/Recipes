import { useContext } from 'react'

import {AuthContext} from '../../../../contexts/AuthContext'

import RecipeCommentsForm from './recipe-comments-form/RecipeCommentsForm'
import RecipeCommentsSection from './recipe-comments-section/RecipeCommentsSection'



export default function RecipeComments({ isOwned }) {
    let { user } = useContext(AuthContext)
    return (
        <>
            {(user.token && !isOwned) && <RecipeCommentsForm />}
            <RecipeCommentsSection />
        </>
    )
}