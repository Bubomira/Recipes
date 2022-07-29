import './Details.css'
export default function Details() {
  return (
    <section className="clean-block clean-info">
      <div className="container">
      
        <div className="row align-items-center">
          <div className="col-md-6">
            <img className="img-thumbnail" src="https://th.bing.com/th/id/OIP.IQ7ExAJHUzlPr9oszyl8FQHaEo?pid=ImgDet&rs=1" />
            <p className="likes">Likes:2</p>
          </div>
          <div className="col-md-6">
            <div className="getting-started-info">
            <h3>Cupcakes</h3>
              <p>
                Ingridients:Insert ingridients here
              </p>
              <p className="recipe-description">
                How to prepare:Prep your cupcake pan now so it will be ready to go when the batter's done. (You'll find out why when we get to that step.) Use paper liners to help the cupcakes come out of the pan easily. For extra non-stick insurance, apply a light coating of cooking spray or wipe cooking oil on the pan. This will keeps the tops of your cupcakes from sticking to the pan if they rise above their liners.
              </p>
            </div>
            {/* Owner functionality
               <button className="btn-edit btn-lg" type="button">
                Edit
              </button>
              <button className="btn-delete btn-lg" type="button">
                Delete
              </button>
              */ }
            {/*Logged-in user but not owner
               <button className="btn-like-dislike btn-lg">Like</button> 
               <button className="btn-like-dislike btn-lg">Disllike</button> 
               */}
          </div>
        </div>
      </div>
    </section>
  )
}