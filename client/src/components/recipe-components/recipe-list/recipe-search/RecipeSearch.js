import './RecipeSearch.css'

export default function RecipeSearch(){
    return (
            <form className="search-form">
              <input type="text" className="search-input" placeholder="search recipe title here..." />
              <input type="submit" className="search-submit" value="Search"/>
            </form>   
    )
}