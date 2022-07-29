import './EditRecipe.css'

export default function EditRecipe(){
    return (
        <div className='wrapper'>
          <div className="edit-form">
          <form>         
            <h1 >Edit recipe</h1 >               
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
              <button type="submit" className="edit-recipe">
               Submit changes
              </button>
            </div>
          </form>
        </div>    
        </div> 
    ) 
}