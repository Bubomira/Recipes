import { useContext } from 'react'

import AuthContext from '../contexts/AuthContext'

import { Link } from "react-router-dom"

export default function Navigation() {
    const { user } = useContext(AuthContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="nav-link active" to="/">
                    Home
                </Link>

                <Link className="nav-link active" to="/recipeCatalog">
                    Catalog
                </Link>
                {user.username ?
                    <>
                        <Link className="nav-link active" to="/createRecipe">
                            Create Recipe
                        </Link>
                        <Link
                            className="nav-link active" to="/profile">
                            Profile
                        </Link>
                        <Link
                            className="nav-link active" to="/logout">
                            Logout
                        </Link>
                    </>
                    : <>
                        <Link className="nav-link active" to="/login">
                            Login
                        </Link>
                        <Link className="nav-link active" to="/register">
                            Register
                        </Link>
                    </>
                }
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                </div>
            </div>
        </nav>
    )
}