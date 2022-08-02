import {useState} from 'react';
import {Link} from 'react-router-dom';

import './Login.css'

export default function Login() {
    let [values,setValues] = useState({
        username:'',
        password:''
    })
    const onChangeHandler=(e)=>{
        setValues(oldState=>({
            ...oldState,
            [e.target.name]:e.target.value

        }))
    }

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        console.log(values)
    }

    return (
      <div className='wrapper'>
        <div className="login-form">
        <form onSubmit={onSubmitHandler}>         
          <h1 >Login</h1 >             
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="username"
              placeholder="Username"
              name="username"
              value={values.username}
              onChange ={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <input 
              type="password"
              className="form-control item"
              id="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange ={onChangeHandler}
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