import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import emyth from '../images/e-myth-revisited.jpg'
import enders from '../images/enders-game.jpg'
import howtofail from '../images/how-to-fail-at-almost-everything-and-still-win-big.jpg'
import insomniac from '../images/insomniac-city.jpg'
import meditations from '../images/meditations.jpg'
import proust from '../images/how-proust-can-change-your-life.jpg'
import rebel from '../images/rebel-without-a-crew.jpg'
import seagull from '../images/jonathan-livingston-seagull.jpg'
import vagabonding from '../images/vagabonding.jpg'
import virginity from '../images/losing-my-virginity.jpg'
import zen from '../images/zen-and-art-of-motorcycle-maintenance.jpg'

const Books = () => {
    return (
        <div>
            <Header />
            <div style={{margin: "4.5rem auto 0 auto", height: "100%", textAlign: "center"}}>
                <h2 style={{fontFamily: "Lato, Helvetica, Arial, Lucida, sans-serif", fontSize: "2rem"}}>Books.</h2>
                <div>
                    <p style={{fontFamily: "Merriweather, Georgia, Times New Roman, serif", fontSize: "1.5rem", textAlign: "center"}}>These are the books I've read, again and again.</p>
                    <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap", width: "80vw", margin: "0 auto"}}>
                        <img src={emyth} alt="e myth revisited" style={{height: "333px", width: "218px", margin: "1rem"}} />
                        <img src={enders} alt="enders game" style={{height: "333px", width: "218px", margin: "1rem"}} />
                        <img src={howtofail} alt="how to fail" style={{height: "333px", width: "218px", margin: "1rem"}} />
                        <img src={insomniac} alt="insomniac city" style={{height: "333px", width: "218px", margin: "1rem"}} />
                        <img src={meditations} alt="meditations" style={{height: "333px", width: "218px", margin: "1rem"}} />
                        <img src={proust} alt="how proust can change your life" style={{height: "333px", width: "218px", margin: "1rem"}} />
                        <img src={rebel} alt="rebel without a crew" style={{height: "333px", width: "218px", margin: "1rem"}} />
                        <img src={seagull} alt="jonathan livingston seagull" style={{height: "333px", width: "218px", margin: "1rem"}} />
                        <img src={vagabonding} alt="meditations" style={{height: "333px", width: "218px", margin: "1rem"}} />
                        <img src={virginity} alt="losing my virginity" style={{height: "333px", width: "218px", margin: "1rem"}} />
                        <img src={zen} alt="zen and the art of motorcycle maintenance" style={{height: "333px", width: "218px", margin: "1rem"}} />

                    </div>
                </div>
            </div>
            <p className="say-hello">Say hello, I’d love to connect: <a href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer">blkfltchr@gmail.com</a></p>
            <Footer />
        </div>
    )
}

export default Books