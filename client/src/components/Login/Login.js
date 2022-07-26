import {Link} from 'react-router-dom'

import './Login.css'

export default function Login() {
    return (
      <div className='wrapper'>
        <div className="login-form">
        <form>         
          <h1 >Login</h1 >             
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
              type="password"
              className="form-control item"
              id="password"
              placeholder="Password"
            />
          </div>
           
          <div className="form-group">
            <button type="submit" className="btn btn-block create-account">
             Sign in
            </button>
            <p> Dont have an account? <Link to='/register'> Click here</Link></p>  
          </div>
        </form>
      </div>    
      </div>    
    )
}