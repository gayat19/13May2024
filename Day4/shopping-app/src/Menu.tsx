import { Link } from "react-router-dom";

export function Menu(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/local">Local Data</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/productFilter">ProductSelection</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/parent">Parent</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Our Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/addprod">AddProduct</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/display">Display</Link>
                    </li>
                    
                </ul>
                </div>
            </div>
    </nav>
    )
}