import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HowToLearnReact from './projects/HowToLearnReact'

const Projects = () => {
    return (
        <div>
            <Header />
            <div style={{margin: "4.5rem auto 0 auto", height: "100%", textAlign: "center"}}>
                <h2 style={{fontFamily: "Lato,Helvetica,Arial,Lucida,sans-serif", fontSize: "2rem"}}>Projects.</h2>
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <HowToLearnReact />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects