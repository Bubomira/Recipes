import './RecipeList.css'

import RecipeCard from './recipe-card/RecipeCard'
import RecipeSearch from './recipe-search/RecipeSearch'

export default function RecipeList() {
    return (
        
        <div className="container">
            <RecipeSearch />

            <div className="row">
                <RecipeCard recipe={{ title: 'cupcake', imageUrl: 'https://th.bing.com/th/id/OIP.7Vevs1uLCTIeuQtCicWz7gHaEo?pid=ImgDet&rs=1', _id: 1 }} />
                <RecipeCard recipe={{ title: 'cupcake', imageUrl: 'https://www.primrose-bakery.co.uk/shop/content/images/thumbs/0001934_eton-mess-cupcake.jpeg', _id: 1 }} />
                <RecipeCard recipe={{ title: 'cupcake', imageUrl: 'https://www.spar.co.uk/media/35023/rainbow-cupcake-imagev2.jpeg', _id: 1 }} />
                <RecipeCard recipe={{ title: 'cupcake', imageUrl: 'https://www.spar.co.uk/media/35023/rainbow-cupcake-imagev2.jpeg', _id: 1 }} />
                <RecipeCard recipe={{ title: 'cupcake', imageUrl: 'https://www.primrose-bakery.co.uk/shop/content/images/thumbs/0001934_eton-mess-cupcake.jpeg', _id: 1 }} />
                <RecipeCard recipe={{ title: 'cupcake', imageUrl: 'https://th.bing.com/th/id/OIP.7Vevs1uLCTIeuQtCicWz7gHaEo?pid=ImgDet&rs=1', _id: 1 }} />
                <RecipeCard recipe={{ title: 'cupcake', imageUrl: 'https://preview.redd.it/jy2rlaje3f731.jpg?auto=webp&s=47fc6f88f88b14b64c9c5b5e14b2311d9fe48c18', _id: 1 }} />
                <RecipeCard recipe={{ title: 'cupcake', imageUrl: 'https://th.bing.com/th/id/OIP.3TpqrbMGanQz_7kl7UTwLgHaFj?pid=ImgDet&w=4032&h=3024&rs=1', _id: 1 }} />
            </div>
        </div>
    )
}