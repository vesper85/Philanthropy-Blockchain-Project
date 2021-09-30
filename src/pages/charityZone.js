import React, { useState } from 'react'
import Map from '../components/Map'
import './Home.css'


const CharityZone = () => {
    const [state, setstate] = useState('India');

    const handleOnClick = (e)=>{
        console.log(e.target.getAttribute("title"));
        setstate(e.target.getAttribute("title"))
      }
    
    return (
        <div>
            this is charity zone
            <h2> {state} </h2>   
            <div className="mapContainer">
                <Map handleOnClick={handleOnClick}  />    
            </div>
        </div>
    )
}

export default CharityZone
