const baseURL = 'http://localhost:3030/recipe'

export const getLatestRecipes = async()=>{
    const response = await fetch(`${baseURL}/getLatest`)
    return await response.json();
}