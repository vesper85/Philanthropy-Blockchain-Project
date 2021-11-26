import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import coverImg from './sample/india_flood.jpeg'
import status from './sample/status.svg'
import { initializeApp } from "firebase/app";
import firebaseConfig from '../config/firebaseConfig';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const DonateCard = (props) => {
    const firebaseApp = initializeApp(firebaseConfig);
    const firebaseStorage = getStorage(firebaseApp);
    const {title, description, goal, fundsRaised} = props;
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState(coverImg)

    useEffect(() => {
        getCardInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getCardInfo = async() => {
        let goalProgress = (fundsRaised / goal) * 100
        setProgress(goalProgress)
        let imgLoaded = await getDownloadURL( ref(firebaseStorage, `charitycover/${title}`))
        setImage(imgLoaded);
    }
    
    return (
        <>
        <div className={`col card-content mb-5`}>
            <div className="card h-100">
                <Link to={{pathname:"/charitydetails", state:props}} >
                    <img src={image} className="card-img-top" alt="profileIMG"/>
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
                            <div className="progress-bar" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" style={{width:`${progress+'%'}`}}>{progress}%</div>
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
