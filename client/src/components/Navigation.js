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
                </div>
            </div>
        </nav>
    )
}