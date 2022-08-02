import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

import  RecipeHomeCard from '../recipe-components/recipe-home-card/RecipeHomeCard'

import {getLatestRecipes} from '../../services/recipeService'

import './Home.css'

export default function Home(){
    const [recipes,setRecipes] = useState([])
    useEffect(()=>{
        getLatestRecipes().then(recipes=>{
         setRecipes(recipes)
        })
    },[])
    return(
        <div className="home-wrapper">
        <div className="greeter">
           If you want to see many tasty recipes, u are at the right place!
        </div>
        <section className="first-three-recipes">
            {recipes.length==0 ? 
            <h3 className="home-no-recipes">Recipes are yet to be added</h3>
            :
            recipes.map(x=><RecipeHomeCard key={x._id} recipe={x}/>)
            }
        </section>
          <p className="get-started">
            Lets get started: 
            <Link to='/login'>  Sign in </Link>
             or  
             <Link to='/register'>  Sign up </Link>
            </p> 
        </div>
    )
}