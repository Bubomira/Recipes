import './OwnedRecipies.css'
import RecipeCard from '../recipe-card/RecipeCard';

export default function OwnedRecipies(){
    return(
        <div className='owned-container'>
            {/*When user hasnt posted any recipes
             <h3 className="owned-msg">You havent liked any recepies yet</h3> 
             */}
         <h3 className="owned-msg">These are the recepies you have posted: </h3>
        <div className='row'>
              <RecipeCard recipe={{ title: 'cupcake', imageUrl: 'https://th.bing.com/th/id/OIP.7Vevs1uLCTIeuQtCicWz7gHaEo?pid=ImgDet&rs=1', _id: 1 }} />
              <RecipeCard recipe={{ title: 'cupcake', imageUrl: 'https://www.primrose-bakery.co.uk/shop/content/images/thumbs/0001934_eton-mess-cupcake.jpeg', _id: 1 }} /> 
        </div>

        </div>
    )
}