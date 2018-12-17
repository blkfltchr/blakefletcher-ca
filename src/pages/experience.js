import React from 'react'
import '../css/experience-styles.css'
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
                    <hr/>
                    <Pluto />
                    <hr/>
                    <Mighty />
                    <hr/>
                    <Sprout />
                </div>
            </div>
            <p className="say-hello">Say hello, I’d love to connect: <a href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer">blkfltchr@gmail.com</a></p>
            <Footer />
        </div>
    )
}

export default Experience