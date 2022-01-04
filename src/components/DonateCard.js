import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';
import coverImg from './sample/No_Image.jpg'
import statusImg from './sample/status.svg'
import { initializeApp } from "firebase/app";
import firebaseConfig from '../config/firebaseConfig';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import userContext from '../context/User/userContext';


const DonateCard = (props) => {
    const firebaseApp = initializeApp(firebaseConfig);
    const firebaseStorage = getStorage(firebaseApp);
    const {title, description, goal, fundsRaised} = props;
    const [progress, setProgress] = useState(0);
    const [Image, setImage] = useState()
    const [status, setStatus] = useState()
    const context = useContext(userContext);
    const {loggedIn} = context

    useEffect(() => {
        getCardInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getCardInfo = async() => {
        try {
            let goalProgress = ((fundsRaised / goal) * 100).toFixed(2)
            setProgress(goalProgress)
            let imgLoaded = await getDownloadURL( ref(firebaseStorage, `charitycover/${title}`))
            setImage(imgLoaded)
            if(goalProgress < 100) {
                setStatus('Active')
            } else {
                setStatus('Inactive')
            }
        } catch(FirebaseError) {
            setImage(coverImg)
        }
    }

    return (
        <>
        <div className={`col card-content mb-5`}>
            <div className="card h-100">
                <LazyLoadImage className="card-img-top"
                        alt={coverImg}
                        effect="blur"
                        src={Image}
                        width={"100%"}
                />
                <div className="card-body">
                    <p className="card-title">{title}</p>
                    <p className="card-text">{description.substring(0,115) + "...."}</p>
                </div>
                
                {/* footer */}
                <div className="card-footer">
                    {/* Progress bar */}
                    <div>
                        <div className="progress my-1">
                            <div className="progress-bar" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" style={{width:`${progress+'%'}`}}>{progress}%</div>
                        </div>
                        <p className="card-text "><small className="text-muted">ETH {fundsRaised.toFixed(4)} raised of ETH {goal} goal</small></p>
                    </div>

                    {/* Status card */}
                    <div className="status-card">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-3 col-sm-3 col-xs-3 text-center align-self-center status-card-img">
                                    <img src={statusImg} className="img-fluid rounded-start" alt="..."/>
                                </div>
                                    <div className="col-md-9 col-sm-9 col-xs-9">
                                    <div className=" status-card-body">
                                        <p className=" status-card-status">Status</p>
                                        <p className="card-text current-status">{status}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-100">
                        <span className="align-left my-1 mt-3 donate-btn">
                            {
                                loggedIn && <Link to={{pathname:"/charitydetails", state:props}} >
                                    <button className="btn dnt">More Details</button>
                                </Link>
                            }
                            {
                                !loggedIn && <Link to={{pathname:"/login"}} >
                                    <button className="btn dnt">More Details</button>
                                </Link>
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DonateCard
