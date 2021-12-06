import React from 'react'
import './CharityDetails.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CharityCarousel from '../components/CharityCarousel'
import HeroElement from '../components/HeroElement'


export default function CharityDetails(props) {

    const id = props.location.state.id
    const description = props.location.state.description
    const title = props.location.state.title
    const previousWork = props.location.state.previousWork
    const goal = props.location.state.goal
    const fundsRaised = props.location.state.fundsRaised
    const city = props.location.state.city
    const state = props.location.state.state
    const cause = props.location.state.cause
    const walletAddress = props.location.state.walletAddress
    const isVerified = props.location.state.isVerified

    return (
        <div>
            <Navbar/>

            <CharityCarousel
                title={title}
            />

            <HeroElement 
                id={id}
                title={title}
                walletAddress={walletAddress}
                isVerified={isVerified}
                description={description}
                previousWork={previousWork}
                goal={goal}
                fundsRaised={fundsRaised}
                cause={cause}
                city={city}
                state={state}
            />

            <Footer/>
        </div>
    )
}
