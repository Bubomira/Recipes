import {get} from '../utils/requester'

const baseURL = 'http://localhost:3030/recipe'

export const getLatestRecipes = async()=> await get(`${baseURL}/getLatest`)

export const getAllRecipes =async()=>await get(`${baseURL}/catalog`)
 