import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';

import { login } from '../../../services/authService';

import './Login.css'

export default function Login() {
    const navigate = useNavigate()
    const { loginUser } = useContext(AuthContext)
    let [values, setValues] = useState({
        username: '',
        password: ''
    })
    let [error, setError] = useState('')
    const onChangeHandler = (e) => {
        setValues(oldState => ({
            ...oldState,
            [e.target.name]: e.target.value

        }))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        login(values).then(userData => {
            loginUser(userData)
            navigate('/')
        }).catch((err) => {
            setError(err.message)
        })
    }

    return (
        <div className='wrapper'>
            <div className="login-form">
                <form onSubmit={onSubmitHandler}>
                    <h1 >Login</h1 >
                    {error &&
                        <p className='login-error'>{error}!</p>
                    }
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control item"
                            id="username"
                            placeholder="Username"
                            name="username"
                            value={values.username}
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