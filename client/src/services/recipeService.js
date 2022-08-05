import {get,post,put} from '../utils/requester'

const baseURL = 'http://localhost:3030/recipe'

export const getLatestRecipes = async()=> await get(`${baseURL}/getLatest`)

export const getAllRecipes =async()=>await get(`${baseURL}/catalog`)

export const getOneRecipe = async(recipeId)=> await get(`${baseURL}/details/${recipeId}`)

export const createRecipe=async(data)=>await post(`${baseURL}/create`,data)

export const editRecipe = async(id,data)=>await put(`${baseURL}/edit/${id}`,data)


 