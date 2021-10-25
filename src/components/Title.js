import React from 'react'

const Title = () => {
    return (
        <>
            <div className="container-fluid  m-auto position-relative overflow-hidden text-center text-light"  >
                <div className="col-md-5 p-lg-5 mx-auto my-5" id="title_container">
                    <h1 className="display-4  fw-bold pt-5 pb-4 text-nowrap" >What's the title ? </h1>
                    <p className="lead fw-normal pb-4">what should be the text. </p>
                    <a className="btn btn-lg btn-info text-dark fs-6 px-5 py-3 " href="/">GET STARTED</a>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
        </>
        
    )
}

export default Title
