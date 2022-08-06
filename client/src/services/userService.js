import {get} from '../utils/requester'

const baseURL ='http://localhost:3030/user'

export const getProfile =async()=> await get(`${baseURL}/profile`)

export const getLikedRecipes = async(id)=> await get(`${baseURL}/likedRecepies/${id}`)

export const getOwnedRecipes = async(id)=>await get(`${baseURL}/ownedRecipies/${id}`) 