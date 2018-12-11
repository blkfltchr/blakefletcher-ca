import React from 'react'
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
            <div style={{margin: "4.5rem auto 0 auto", height: "100%", textAlign: "center"}}>
                <h2 style={{fontFamily: "Lato,Helvetica,Arial,Lucida,sans-serif", fontSize: "2rem"}}>Experience.</h2>
                <div style={{margin: "0 auto", width: "60vw"}}>
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