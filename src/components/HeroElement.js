import React from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import firebaseConfig from "../config/firebaseConfig";
import { getStorage, ref, deleteObject, listAll } from "firebase/storage";

export default function HeroElement(props) {
    // eslint-disable-next-line
    const {id, title, description, previousWork, goal, fundsRaised} = props
    const history = useHistory()
    const firebaseApp = initializeApp(firebaseConfig)
    const firebaseStorage = getStorage(firebaseApp)

    const deleteCharity = async() => {
        try {
            const url = "http://localhost:5000/api/charity/deletecharity/" + id;
            //eslint-disable-next-line
            const response = await fetch(url,
                {
                    method: 'DELETE', 
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            //Delete cover image from firebase storage
            const delRef = ref(firebaseStorage, `charitycover/${title}`);
            deleteObject(delRef).then(() => {
                console.log("cover image deleted from firebase")
            }).catch((error) => {
                console.error(error)
            })

            //Delete carousel images from firebase storage
            const listRef = ref(firebaseStorage, `charityimages/${title}`);
            listAll(listRef).then((res) => {
                res.items.map((imageRef) => deleteObject(imageRef))
            }).catch((error) => {
                console.error(error)
            });

            history.go(-1)
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        // section-1 charity info
        <div className="container hero-container">
            <div className="row my-5 p-2">
                <div className="col-lg-7 col-md-7">
                    <h2 className="featurette-heading">{title}</h2>
                    <p className="lead hero-ele-charity-description">{description}</p>
                </div>
                <div className="col-lg-5 col-md-5">
                    <img className="mx-auto hero-img" src="https://source.unsplash.com/440x420/?charity"/>
                </div>
            </div>
            
            {/* section-2 Stats */}
            <div className="container hero-container" >
                <div className="row p-4 align-items-center border shadow-lg">
                    <div className="col-lg-7 col-md-7 p-3 p-lg-5">
                        <h2 className="lh-1">Some Statistics</h2>
                        <p className="lead hero-text">Quickly design and customize responsive mobile-first sites with Bootstrap.</p>
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="details-container">
                                    <div className="details-title"><img  className="rounded mx-auto d-block pb-1" src="https://give-marketplace-dev.s3.ap-south-1.amazonaws.com/static/images/home/homev2/Mission+10+Million+Meals/Homepage%2Bicons_A.png" alt="" height="100px" width="100px" /></div>
                                    <p className="details-text">More than a third of the world’s malnourished children live in India</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="details-container">
                                    <div className="details-title"><img  className="rounded mx-auto d-block pb-1" src="https://give-marketplace-dev.s3.ap-south-1.amazonaws.com/static/images/home/homev2/Mission+10+Million+Meals/Homepage%2Bicons_B.png" alt="" height="100px" width="100px"/></div>
                                    <p className="details-text">More than 2/3rds deaths of under-fives attributed to malnutrition</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="details-container">
                                    <div className="details-title"><img  className="rounded mx-auto d-block pb-1" src="https://give-marketplace-dev.s3.ap-south-1.amazonaws.com/static/images/home/homev2/Mission+10+Million+Meals/impactmidday+mea.png" alt="" height="100px" width="100px"/></div>
                                    <p className="details-text">95.1M children deprived of midday meals at school during COVID-19</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Donate</button>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 shadow-lg p-2">
                        <img className="image-fluid hero-img" src="https://source.unsplash.com/420x400/?technology" alt="" />
                    </div>
                </div>
            </div>

            {/* section-3 more charity info */}
            <div className="container hero-container">
                <div className="row my-5">
                    <div className="col-lg-7 col-md-7 order-2">
                        <h2 className="featurette-heading">Some Notable Work </h2>
                        <p className="lead">{previousWork}</p>
                    </div>
                    <div className="col-lg-5 col-md-5 order-1">
                        <img  className="hero-img" src="https://source.unsplash.com/440x420/?charity,help" />
                    </div>
                </div>
            </div>

            {/* Admin Buttons */}
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 charity-details-admin-buttons">
                <Link to={{pathname:"/charityform", state:{button_name:"update", info:props}}} type="button" className="btn btn-success btn-lg px-4 me-md-2 fw-bold">Update</Link>
                <button onClick={deleteCharity} type="button" className="btn btn-danger btn-lg px-4 me-md-2 fw-bold">Delete</button>
            </div>
        </div>
    )
}
