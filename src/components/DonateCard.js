import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import coverImg from './sample/india_flood.jpeg'
import status from './sample/status.svg'

const DonateCard = (props) => {
    const {title, description, goal, fundsRaised} = props;
    const [progress, setProgress] = useState(0);

    useEffect(async() => {
        let goalProgress = (fundsRaised / goal) * 100
        setProgress(goalProgress)
    }, [])

    return (
        <>
        <div className="col card-content mb-5">
            <div className="card h-100">
                <Link to={{pathname:"/charitydetails", state:props}} >
                    <img src={coverImg} className="card-img-top" alt="this is an image"/>
                    <div className="card-body">
                        <p className="card-title">{title}</p>
                        <p className="card-text">{description.substring(0,115) + "...."}</p>
                    </div>
                </Link>
                
                {/* footer */}
                <div className="card-footer">
                    {/* Progress bar */}
                    <div>
                        <div className="progress my-1">
                            <div className="progress-bar w-50" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{progress}%</div>
                        </div>
                        <p className="card-text "><small className="text-muted">INR {fundsRaised} (฿ 0.0008) raised of INR {goal} goal</small></p>
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
                                        <p className="card-text current-status">Active</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-100">
                        <span className="align-left my-1 mt-3 donate-btn">
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
