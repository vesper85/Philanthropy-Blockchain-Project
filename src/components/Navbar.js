import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import userContext from '../context/User/userContext';


const Navbar = () => {
    const context = useContext(userContext);
    const {globalCredentials, setglobalCredentials,loggedIn,setloggedIn} = context;
    const handleLogout = ()=>{
        localStorage.removeItem('PBPjwtToken');
        setloggedIn(false);
    }
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-md navbar-dark navbar-custom">
                <a className="navbar-brand" href="/">Navbar</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarToggler"> 
                    {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    <Link className="nav-link" to="/">About us</Link>
                    <Link className="nav-link" to="/zone">Zone</Link>
                    <Link className="btn  px-3"  to="/login" role="button">Login</Link>
                    <Link className="btn  px-3" id="auth-btn" to="/login" role="button">Signup</Link> */}
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/zone">Zone</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`${localStorage.getItem('PBPjwtToken') ? "d-none": "nav-link "}`}  to="/login">Login</Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link className={`${localStorage.getItem('PBPjwtToken') ? "d-none": "btn px-3 "}`} id="auth-btn" to="/login">Signup</Link>
                        </li>
                        <li className="nav-item text-center">
                            <Link className={`${localStorage.getItem('PBPjwtToken') ? "btn px-3 ": "d-none"}`} id="auth-btn" onClick={handleLogout} to="/">Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar