import React from "react";

const Footer = () => {
    return(
        <footer className="footer-bg text-white footer-ele">
            <div className="container">
                <div className="row text-center">
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                        <h5 className="font-weight-bold">Company Name</h5>
                        <div className="line mb-3" ></div>
                        <p>Here add some information for footer content. Lorem ipsum dolor sit amet, ital consectetur lorem ipsum dolor sit amet adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                        <h5 className="font-weight-bold">Useful links</h5>
                        <div className="line mb-3"></div>
                        <div className="footer-list"><a href="/" className="text-white footer-link">Your Account</a></div>
                        <div className="footer-list"><a href="/" className="text-white footer-link">Become an Affiliate</a></div>
                        <div className="footer-list"><a href="/" className="text-white footer-link">Shipping Rates</a></div>
                        <div className="footer-list"><a href="/" className="text-white footer-link">Help</a></div>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
                        <h5 className="font-weight-bold">Contact</h5>
                        <div className="line mb-3"></div>
                        <p>2125, Some Street, Any City, Maharashtra, India</p>
                        <p>companyname@email.com</p>
                        <p>+91 830 889 3558</p>
                        <p>+01 335 633 77</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer