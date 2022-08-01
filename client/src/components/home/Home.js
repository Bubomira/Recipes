import { Link } from 'react-router-dom'
import  RecipeHomeCard from '../recipe-components/recipe-home-card/RecipeHomeCard'

import './Home.css'


export default function Home(){
    return(
        <div className="home-wrapper">
        <div className="greeter">
           If you want to see many tasty recipes, u are at the right place!
        </div>
        <section className="first-three-recipes">
            {/* if there are no recipes in database
             <h3 className="home-no-recipes">Recipes are yet to be added</h3>
              */}
         <RecipeHomeCard recipe={{ title: 'cupcake', imageUrl: 'https://th.bing.com/th/id/OIP.7Vevs1uLCTIeuQtCicWz7gHaEo?pid=ImgDet&rs=1', _id: 1 }} />
                <RecipeHomeCard recipe={{ title: 'cupcake', imageUrl: 'https://www.primrose-bakery.co.uk/shop/content/images/thumbs/0001934_eton-mess-cupcake.jpeg', _id: 1 }} />
                <RecipeHomeCard recipe={{ title: 'cupcake', imageUrl: 'https://www.spar.co.uk/media/35023/rainbow-cupcake-imagev2.jpeg', _id: 1 }} /> 
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