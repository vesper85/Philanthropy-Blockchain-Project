import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className=" navbar navbar-expand  test">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                
                
                <div className="navbar-nav col-5 d-flex justify-content-evenly" id="navlinkgrp"> 
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    <Link className="nav-link" to="/">About us</Link>
                    <Link className="nav-link" to="/zone">Zone</Link>
                    <Link className="btn  px-3 "  to="/" role="button">Login</Link>
                    <Link className="btn  px-3 " id="auth-btn" to="/" role="button">Signup</Link>
                </div>
                
            </div>
            </nav>
            {/*<div className="svg-tilt">
            <div className="tilt">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
            </div>
            <img src="https://saltlending.com/wp-content/uploads/2020/10/Frame.svg" className="attachment-full size-full" alt="" loading="lazy" width="242" height="826"></img>*/}
        </div>
    )
}

export default Navbar
