import {Link} from 'react-router-dom'
import './Register.css'

export default function Register() {
    return (
      <div className='wrapper'>
        <div className="registration-form">
        <form>         
          <h1 >Register</h1 >               
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="username"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="email"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="form-group">
            <input 
              type="password"
              className="form-control item"
              id="password"
              placeholder="Password"
              name="password"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control item"
              id="rePass"
              placeholder="Repeat password"
              name="rePass"
            />
          </div>        
          <div className="form-group">
            <button type="submit" className="btn btn-block create-account">
              Sign up
            </button>
            <p> Already have an account? <Link to='/login'> Click here</Link></p>  
          </div>
        </form>
      </div>    
      </div>    
    )
}