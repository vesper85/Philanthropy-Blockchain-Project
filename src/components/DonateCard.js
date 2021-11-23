import React from 'react'
import { Link } from 'react-router-dom';
import coverImg from './sample/cover-image.png'
import status from './sample/status.svg'

const DonateCard = (props) => {
    const {title, description} = props;
    return (
        <>
            <div className="col card-content mb-5">
                
                <div className="card h-100">
                <Link to="/charitydetails" >
                <img src={coverImg} className="card-img-top" alt="this is an im"/>
                </Link>
                <div className="card-body">
                    <p className="card-title">{title}</p>
                    <p className="card-text">{description}</p>
                </div>
                {/* footer */}
                <div className="card-footer">

                    {/* Progress bar */}
                    <div>
                        <div className="progress my-1">
                            <div className="progress-bar w-25" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                        </div>
                        <p className="card-text "><small className="text-muted">US$ 34.72 (฿ 0.0008) raised of US$ 20,000 goal</small></p>
                    </div>


                    {/* Status card */}
                    <div className="status-card">
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-3 text-center align-self-center status-card-img">
                                    <img src={status} className="img-fluid rounded-start" alt="..."/>
                                </div>
                                    <div className="col-md-9">
                                    <div className=" status-card-body">
                                        <p className=" status-card-status">Status</p>
                                        <p className="card-text current-status"> longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="w-100">
                        <span className="align-left my-1 mt-4 donate-btn">
                            <a href="/" className="btn dnt">Donate</a>
                        </span>
                    </div>
                </div>
                </div>
            
            </div>
        </>
    )
}

export default DonateCard
