import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../../contexts/AuthContext'

import { register } from '../../../services/authService'

import './Register.css'

export default function Register() {
    const navigate = useNavigate();
    const { loginUser } = useContext(AuthContext)
    let [errors, setErrors] = useState({
        usernameErr: false,
        emailErr: false,
        passwordErr: false,
        rePassErr: false,
        alreadyTakenUsername: false,
    })

    let [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        rePass: ''
    })
    const onChangeHandler = (e) => {
        setValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value
        }))
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
            register(values).then(userData => {
                loginUser(userData);
                navigate('/')
            }).catch((err) => {
                setErrors(oldErrors => ({
                    ...oldErrors,
                    alreadyTakenUsername: err.message
                }))
            })
        }

    const usernameValidator = () => {
        setErrors(oldErrors => ({
            ...oldErrors,
            usernameErr: values.username.length < 3,
            alreadyTakenUsername: false
        }))
    }

    const emailValidator = () => {
        setErrors(oldErrors => ({
            ...oldErrors,
            emailErr: !/[\w,.]+@[\w,.]+/.test(values.email) || values.email.length < 5
        }))
    }

    const passwordValidator = () => {
        setErrors(oldErrors => ({
            ...oldErrors,
            passwordErr: values.password.length < 5
        }))
    }
    const rePassValidator = () => {
        setErrors(oldErrors => ({
            ...oldErrors,
            rePassErr: values.password != values.rePass
        }))
    }


    return (
        <div className='wrapper'>
            <div className="registration-form">
                <form onSubmit={onSubmitHandler}>
                    <h1 >Register</h1 >
                    {errors.specialErr &&
                            <p className='register-error-special'>Please fill in the form correctly! </p>
                        }
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control item"
                            id="username"
                            placeholder="Username"
                            name='username'
                            value={values.username}
                            onChange={onChangeHandler}
                            onBlur={usernameValidator}
                        />
                        {errors.usernameErr &&
                            <p className='register-error'>Username should be at least 3 characters long! </p>
                        }
                        {errors.alreadyTakenUsername &&
                            <p className='register-error'>This username is taken, please pick another one</p>
                        }
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
                            onBlur={emailValidator}
                        />
                        {errors.emailErr &&
                            <p className='register-error'>Email should contain word characters, @ and be at least 5 symbols long </p>
                        }
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
                            onBlur={passwordValidator}
                        />
                        {errors.passwordErr &&
                            <p className='register-error'>Password should be at least 5 characters long!</p>
                        }
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
                            onBlur={rePassValidator}
                        />
                        {errors.rePassErr &&
                            <p className='register-error'>Passwords must match!</p>
                        }
                    </div>
                    <div className="form-group">
                        <button
                            type="submit"
                            className="btn btn-block create-account"
                            disabled={Object.values(errors).some(x => x == true) || Object.values(values).some(x=>x=='')}
                        >
                            Sign up
                        </button>
                        <p> Already have an account? <Link to='/login'> Click here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}