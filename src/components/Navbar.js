import React, {useContext,useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import userContext from '../context/User/userContext';


const Navbar = () => {
    const context = useContext(userContext);
    const {loggedIn,setloggedIn,setuserProfile} = context;
    const handleLogout = ()=>{
        localStorage.removeItem('PBPjwtToken');
        setloggedIn(false);
        setuserProfile("")
    }
    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname)
    }, [location])
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-md navbar-dark navbar-custom align-items-center">
                <a className="navbar-brand" href="/">Navbar</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation" id="burger">
                    <span className="navbar-toggler-icon" style={{stroke:'white'}}></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarToggler"> 
                    {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    <Link className="nav-link" to="/">About us</Link>
                    <Link className="nav-link" to="/zone">Zone</Link>
                    <Link className="btn  px-3"  to="/login" role="button">Login</Link>
                    <Link className="btn  px-3" id="auth-btn" to="/login" role="button">Signup</Link> */}
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
                            <Link className={`nav-link mx-3 ${location.pathname==="/editprofile" ?"active":""}`}  to="/editprofile">Profile</Link>
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