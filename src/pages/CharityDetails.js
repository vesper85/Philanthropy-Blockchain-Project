import React from 'react'
import './CharityDetails.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CharityCarousel from '../components/CharityCarousel'
import HeroElement from '../components/HeroElement'


export default function CharityDetails(props) {

    const description = props.location.state.description
    const title = props.location.state.title
    const previousWork = props.location.state.previousWork
    const goal = props.location.state.goal
    const fundsRaised = props.location.state.fundsRaised

    return (
        <div>
            <Navbar/>

            <CharityCarousel/>

            <HeroElement 
                title={title}
                description={description}
                previousWork={previousWork}
                goal={goal}
                fundsRaised={fundsRaised}
            />

            <Footer/>
        </div>
    )
}
