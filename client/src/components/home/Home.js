import { useState, useEffect,useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'

import {AuthContext} from '../../contexts/AuthContext'
import useLoader from '../../hooks/useLoader'

import RecipeHomeCard from '../recipe-components/recipe-home-card/RecipeHomeCard'

import { getLatestRecipes } from '../../services/recipeService'

import './Home.css'
import Loader from '../loader/Loader'

export default function Home() {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
   const [loader,setNewLoader] = useLoader()
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        getLatestRecipes().then(recipes => {
            setRecipes(recipes)
                setNewLoader()
        }).catch((err)=>{
            navigate('/404',{replace:true})  
        })
    }, [])
    return (
        <div className="home-wrapper">
            {loader  ?
                <Loader />
                :
                <>
                    <div className="greeter">
                        If you want to see many tasty recipes, u are at the right place!
                    </div>
                    <section className="first-three-recipes">

                        {recipes.length == 0 ?
                            <h3 className="home-no-recipes">Recipes are yet to be added</h3>
                            :
                            recipes.map(x => <RecipeHomeCard key={x._id} recipe={x} />)
                        }
                    </section>
                    {user.username ?
                        <p className="get-started"> Hello, {user.username}</p>
                        :
                        <p className="get-started">
                            Lets get started:
                            <Link to='/login'>  Sign in </Link>
                            or
                            <Link to='/register'>  Sign up </Link>
                        </p>
                    }
                </>           
                }
             </div>
    )
}