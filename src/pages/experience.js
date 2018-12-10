import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
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
                <Pluto />
                <Mighty />
                <Sprout />
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Experience