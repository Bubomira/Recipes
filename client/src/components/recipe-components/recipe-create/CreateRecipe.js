import './CreateRecipe.css'

export default function CreateRecipe(){
    return (
        <div className='wrapper'>
          <div className="create-form">
          <form>         
            <h1 >Create recipe</h1 >               
            <div className="form-group">
              <input
                type="text"
                className="form-control item"
                placeholder="Title"
                name="title"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control item"
                placeholder="Ingridients"
                name="ingridients"
              />
            </div>
            <div className="form-group">
              <input 
                type="password"
                className="form-control item"
                placeholder="ImageUrl"
                name="ImageUrl"
              />
            </div>
            <div className="form-group">
              <textarea                
                className="form-control item"
                placeholder="Steps to prepare"
                name="steps"
              />
            </div>  
            <div >
                <label htmlFor='dish'> Dish: </label>
                <input type="radio" name="type" id='dish' className="radioElement"/>
                <label htmlFor='dish'> Dessert:</label>
                <input type="radio" name="type" id="dessert" className="radioElement"/>
            </div>
            <div className="form-group">
              <button type="submit" className="create-recipe">
               Create Recipe
              </button>
            </div>
          </form>
        </div>    
        </div> 
    ) 
}