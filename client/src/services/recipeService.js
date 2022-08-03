import {get,post} from '../utils/requester'

const baseURL = 'http://localhost:3030/recipe'

export const getLatestRecipes = async()=> await get(`${baseURL}/getLatest`)

export const getAllRecipes =async()=>await get(`${baseURL}/catalog`)

export const createRecipe=async(data)=>await post(`${baseURL}/create`,data)


 