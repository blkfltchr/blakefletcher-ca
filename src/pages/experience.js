import React from 'react'
import '../css/experience.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Lambda from './exp/Lambda'
import Pluto from './exp/Pluto'
import Mighty from './exp/Mighty'
import Sprout from './exp/Sprout'

const Experience = () => {
    return (
        <div>
            <Header />
            <div className="experience-wrapper">
                <h2>Experience.</h2>
                <div>
                    <Lambda />
                    <hr style={{margin: "1.5rem 0 2rem 0"}}/>
                    <Pluto />
                    <hr style={{margin: "1.5rem 0 2rem 0"}}/>
                    <Mighty />
                    <hr style={{margin: "1.5rem 0 2rem 0"}}/>
                    <Sprout />
                </div>
            </div>
            <p style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.5rem", textAlign: "center"}}>Say hello, I’d love to connect: <a href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer" style={{color: "blue"}}>blkfltchr@gmail.com</a></p>
            <Footer />
        </div>
    )
}

export default Experience