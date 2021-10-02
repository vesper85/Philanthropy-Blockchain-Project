import React, { useState } from 'react'
import DonateCard from '../components/DonateCard';
import Map from '../components/Map'
import './Home.css'
import './Charityzone.css'
//import react from 'react';

const CharityZone = () => {
    const [state, setstate] = useState('India');
    const cardinfo = {
        title:"Emergency Response: Keep 1000 Vulnerable Children Safe and in Education",
        description:"Help keep 1000 at-risk children safe and in learning during the biggest global education emergency since World War II.",

    }
    const [cardInfo, setcardInfo] = useState(cardinfo)

    const [coords, setcoords] = useState({
        xcoords:170,
        ycoords:153
    })
    

    const handleOnClick = (e)=>{
        if(e.target.getAttribute("title"))
        {
            
            let x = e.pageX - 17.3 -50  ;
            let y = e.pageY - 74 - 53.8 - 50;
            setcoords({xcoords:x,ycoords:y})
            setstate(e.target.getAttribute("title"))
            console.log(x,y);
            
        }
      }
      
      
    
    return (
        <>   
            <div className="mapContainer">
                <Map coords={coords} handleOnClick={handleOnClick}  />    
            </div>
                <div className="filler_map"></div>
            {/* SVG background */}
            <div className="svg_background_2">
            <div className="tilt_svg_2">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                </svg>
            </div>
            </div>

            {/* section 2 */}
            <section className="card-conatiner-warpper">
            <div className="cards-container-title top-0">
                Philanthropy zone
            </div>
                <div className=" row row-cols-1 row-cols-md-3 g-4 mx-0 justify-content-evenly card-container gx-5">
                  <DonateCard cardInfo={cardInfo} />
                  <DonateCard cardInfo={cardInfo} />
                  <DonateCard cardInfo={cardInfo} />
                  <DonateCard cardInfo={cardInfo} />
                  <DonateCard cardInfo={cardInfo} />
                </div>
            </section>
            
        </>
    )
}

export default CharityZone
