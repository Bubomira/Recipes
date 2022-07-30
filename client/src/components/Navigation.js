import { Link } from "react-router-dom"

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link className="nav-link active"  to="/">
                        Home
                    </Link>
                    <Link className="nav-link active"  to="/register">
                        Register
                    </Link>
                    <Link className="nav-link active"  to="/login">
                        Login
                    </Link>
                    <Link className="nav-link active"  to="/recipeCatalog">
                        Catalog
                    </Link>
                    <Link className="nav-link active"  to="/createRecipe">
                        Create Recipe
                    </Link>
                    <Link
                    className="nav-link active"  to="/profile">
                        Profile
                    </Link>
                </div>
            </div>
        </nav>
    )
}