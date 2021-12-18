import React from "react";
import ic1 from "./icons/partners_1.png"
import ic2 from "./icons/partners_2.png"
import ic3 from "./icons/partners_3.png"
import ic4 from "./icons/partners_4.png"
import ic5 from "./icons/partners_5.png"
import ic6 from "./icons/partners_6.png"
import ic7 from "./icons/partners_7.png"
import ic8 from "./icons/partners_8.png"

const Partners = () => {
    return(
        <div className="partners" id="partner">
            <div className="container">
                <h3 className="partners-heading pb-2 border-bottom border-info"> Our Partners </h3>
                <div className="partners-content">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 logo-align">
                            <img className="img-fluid" src={ic3} alt="Our partners"></img>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 logo-align">
                            <img className="img-fluid logo-Helpers" src={ic1} alt="Our partners"></img>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 logo-align">
                            <img className="img-fluid" src={ic4} alt="Our partners"></img>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 logo-align">
                            <img className="img-fluid" src={ic5} alt="Our partners"></img>
                        </div>
                                        
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 logo-align">
                            <img className="img-fluid" src={ic6} alt="Our partners"></img>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 logo-align">
                            <img className="img-fluid logo-IDRF" src={ic7} alt="Our partners"></img>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 logo-align logo-margin">
                            <img className="img-fluid logo-MHDRF" src={ic8} alt="Our partners"></img>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 logo-align">
                            <img className="img-fluid" src={ic2} alt="Our partners"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners