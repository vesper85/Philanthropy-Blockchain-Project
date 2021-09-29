import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className=" navbar navbar-expand  test">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                
                
                <div className="navbar-nav col-5 d-flex justify-content-evenly">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    <a className="nav-link" href="/">Features</a>
                    <a className="nav-link" href="/">Pricing</a>
                    <a className="btn  px-3 "  href="/" role="button">Login</a>
                    <a className="btn  px-3 " id="auth-btn" href="/" role="button">Signup</a>
                </div>
                
            </div>
            </nav>
            <div className="svg-tilt">
            <div className="tilt">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
            </div>
            <img src="https://saltlending.com/wp-content/uploads/2020/10/Frame.svg" className="attachment-full size-full" alt="" loading="lazy" width="242" height="826"></img>
        </div>
    )
}

export default Navbar
