import React, { useEffect, useState } from 'react'
import defaultImg from './sample/flood.jpg'
import { initializeApp } from "firebase/app";
import firebaseConfig from '../config/firebaseConfig';
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

export default function CharityCarousel(props) {

    const firebaseApp = initializeApp(firebaseConfig);
    const firebaseStorage = getStorage(firebaseApp);

    const [imagesArray, setImage] = useState([defaultImg])
    const { title } = props

    const getImages = async() => {
        // Create a reference under which you want to list
        const listRef = ref(firebaseStorage, `charityimages/${title}`);
        const imArray = []
        // Find all the prefixes and items.
        listAll(listRef)
        .then((res) => {
            res.items.forEach((itemRef) => {
                imArray.push(getDownloadURL(itemRef))
            });
            setImage(imArray)
            console.log(imagesArray)
        }).catch((error) => {
            console.error(error)
        });
    }
    
    useEffect(() => {
        // getImages()
    }, [])

    return (
        <div className="carousel-container" >
            <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/1326x550/?nature" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/1326x550/?charity" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/1326x550/?help" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
