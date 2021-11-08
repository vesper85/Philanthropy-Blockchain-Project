import React from 'react'
import './CharityDetails.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CharityCarousel from '../components/CharityCarousel'
import HeroElement from '../components/HeroElement'


export default function CharityDetails() {
    return (
        <div>
            <Navbar/>

            <CharityCarousel/>

            <HeroElement/>

            <Footer/>
        </div>
    )
}
