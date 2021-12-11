import React, {useContext} from 'react'
import { Link, useLocation } from 'react-router-dom'
import userContext from '../context/User/userContext';


const Navbar = () => {
    //hook declarations
    const context = useContext(userContext);
    let location = useLocation();

    // destructuring
    const {loggedIn,setloggedIn,setuserProfile} = context;

    // submit btn handle
    const handleLogout = ()=>{
        localStorage.removeItem('PBPjwtToken');
        setloggedIn(false);
        setuserProfile("")
    }
   
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-md navbar-dark navbar-custom align-items-center">
                <a className="navbar-brand" href="/">GoCharity</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation" id="burger">
                    <span className="navbar-toggler-icon" style={{stroke:'white'}}></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarToggler"> 
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link className={`nav-link mx-3 ${location.pathname==="/" ?"active":""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link mx-3 ${location.pathname==="/zone" ?"active":""}`} to="/zone">Zone</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link mx-3 ${location.pathname==="/aboutus" ?"active":""}`} to="/aboutus">About us</Link>
                        </li>
                        <li className={`${loggedIn ? "d-none": "nav-item "}`}>
                            <Link className={`nav-link mx-3 ${location.pathname==="/login" ?"active":""}`}  to="/login">Login</Link>
                        </li>
                        <li className={`${loggedIn ? "nav-item": "d-none "}`}>
                            <Link className={`nav-link mx-3 ${location.pathname==="/profile" ?"active":""}`}  to="/profile">Profile</Link>
                        </li>
                        <li className={`${loggedIn ? "d-none": "nav-item mx-3 text-center"}`}>
                            <Link className={`btn px-3 `} id="auth-btn" to="/login">Signup</Link>
                        </li>
                        <li className={`${loggedIn ? "nav-item mx-3 text-center": "d-none"}`}>
                            <Link className={`btn px-3`} id="auth-btn" onClick={handleLogout} to="/">Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar