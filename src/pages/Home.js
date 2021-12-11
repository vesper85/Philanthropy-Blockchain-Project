import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import InfoWidget from '../components/InfoWidget'
import Process from '../components/Process'
import Security from '../components/Security'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'

const Home = (props) => {
    props.useScrollToTop();
    
    return (
        <div>
            <Navbar />
            
            <div className="svg-tilt">
                <div className="tilt">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
            <img src="https://saltlending.com/wp-content/uploads/2020/10/Frame.svg" className="attachment-full size-full" alt="" loading="lazy" width="242" height="826"></img>
            
            <Title />
            
            <InfoWidget />

            <Process />

            <Security/>

            <Partners />

            <Testimonial/>

            <Footer />
            
        </div>
    )
}

export default Home
