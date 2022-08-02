import { useState } from 'react'
import {Link} from 'react-router-dom'

import './Register.css'

export default function Register() {
  let [values,setValues] = useState({
    username:'',
    email:'',
    password:'',
    rePass:''
  })
  const onChangeHandler=(e)=>{
    setValues(oldValues=>({
      ...oldValues,
      [e.target.name]:e.target.value
    }))
  }
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    console.log(values)
  }

    return (
      <div className='wrapper'>
        <div className="registration-form">
        <form onSubmit={onSubmitHandler}>         
          <h1 >Register</h1 >               
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="username"
              placeholder="Username"
              name='username'
              value={values.username}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control item"
              id="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={onChangeHandler}
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
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control item"
              id="rePass"
              placeholder="Repeat password"
              name="rePass"
              value={values.rePass}
              onChange={onChangeHandler}
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