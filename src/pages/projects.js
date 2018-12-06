import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Projects = () => {
    return (
        <div>
            <Header />
            <div style={{margin: "0 auto", width: "75vw", height: "100%", display: "flex", flexDirection: "column", textAlign: "center"}}>
                <h2 style={{fontFamily: "Lato,Helvetica,Arial,Lucida,sans-serif", fontSize: "2rem"}}>Projects.</h2>
            </div>
            <Footer />
        </div>
    )
}

export default Projects