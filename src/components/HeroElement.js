import React from 'react'

export default function HeroElement() {

    return (
        
        // section-1 charity info
        <div className="container my-5">
            <div style={{marginBottom:"80px", marginTop:"80px"}}>
                <div className="row featurette my-5 p-2">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">First featurette heading. </h2>
                        <p className="lead"> Some great placeholder content for the first featurette here. Imagine some exciting prose here. Some great placeholder content for the first featurette here. Imagine some exciting prose here. </p>
                    </div>
                    <div className="col-md-5">
                        <img className="mx-auto" src="https://source.unsplash.com/440x420/?charity"/>
                    </div>
                </div>
            </div>
            
            {/* section-2 Stats */}
            <div className="container my-5" >
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h2 className="lh-1"> Heading</h2>
                        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap.</p>
                        <div className="row">
                            <div className="details-container col-lg-4 ">
                                <div className="details-title" ><img  className="rounded mx-auto d-block pb-1" src="https://give-marketplace-dev.s3.ap-south-1.amazonaws.com/static/images/home/homev2/Mission+10+Million+Meals/Homepage%2Bicons_A.png" alt="" height="100px" width="100px" /></div>
                                <h4 className="details-title">1 in 3</h4>
                                <p className="details-text">More than a third of the world’s malnourished children live in India</p>
                            </div>
                            <div className="details-container col-lg-4">
                                <div className="details-title"><img  className="rounded mx-auto d-block pb-1" src="https://give-marketplace-dev.s3.ap-south-1.amazonaws.com/static/images/home/homev2/Mission+10+Million+Meals/Homepage%2Bicons_B.png" alt="" height="100px" width="100px"/></div>
                                <h4 className="details-title">2 in 3</h4>
                                <p className="details-text">More than 2/3rds deaths of under-fives attributed to malnutrition</p>
                            </div>
                            <div className="details-container col-lg-4">
                                <div className="details-container"><img  className="rounded mx-auto d-block pb-1" src="https://give-marketplace-dev.s3.ap-south-1.amazonaws.com/static/images/home/homev2/Mission+10+Million+Meals/impactmidday+mea.png" alt="" height="100px" width="100px"/></div>
                                <h4 className="details-title">95.1M</h4>
                                <p className="details-text">95.1M children deprived of midday meals at school during COVID-19</p>
                            </div>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Donate</button>
                        </div>
                    </div>
                    <div className="col-lg-4  p-0 overflow-hidden shadow-lg">
                        <img className="rounded-lg-3" src="https://source.unsplash.com/1600x900/?charity,donate" alt="" width="720"/>
                    </div>
                </div>
            </div>

            {/* section-3 more charity info */}
            <div  style={{marginTop:"100px"}}>
                <div className="row featurette my-5">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Some more information </h2>
                        <p className="lead"> Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src="https://source.unsplash.com/440x420/?charity,help"/>
                    </div>
                </div>
            </div>

            

        </div>
    )
}
