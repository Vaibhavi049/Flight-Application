import { Link } from "react-router-dom";

export default function NavBar() {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container-fluid">

                <Link className="navbar-brand" to="/">
                    Flight App
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Link className="nav-link" to="/add">
                                Add Flight
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/list">
                                Flight List
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/code">
                                Find By Code
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/carrier">
                                Find By Carrier
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/route">
                                Find By Route
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/price">
                                Price Range
                            </Link>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>
    );
}