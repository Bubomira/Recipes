import {get,post,put,del} from '../utils/requester'

const baseURL = 'http://localhost:3030/recipe'

export const getLatestRecipes = async()=> await get(`${baseURL}/getLatest`)

export const getAllRecipes =async()=>await get(`${baseURL}/catalog`)

export const getOneRecipe = async(recipeId)=> await get(`${baseURL}/details/${recipeId}`)

export const createRecipe=async(data)=>await post(`${baseURL}/create`,data)

export const editRecipe = async(id,data)=>await put(`${baseURL}/edit/${id}`,data)

export const deleteRecipe =async(id)=>await del(`${baseURL}/delete/${id}`)

export const likeRecipe =async(id)=>await get(`${baseURL}/likeRecipe/${id}`)

export const dislikeRecipe =async(id)=>await get(`${baseURL}/dislikeRecipe/${id}`)


 