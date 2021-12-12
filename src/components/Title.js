import React from 'react'

const Title = () => {
    return (
        <>
            <div className="container-fluid position-relative overflow-hidden text-center text-light title-ele"  >
                <div className="col-md-5 p-lg-5 mx-auto my-5" id="title_container">
                    <h1 className="display-4  fw-bold pt-5 pb-4 text-nowrap" >GoCharity</h1>
                    <p className="lead fw-normal pb-4">A Trusted Platform for Philanthropy </p>
                    <a className="btn btn-lg title-button text-dark fs-6 px-5 py-3 " href="/">GET STARTED</a>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
        </>
        
    )
}

export default Title
