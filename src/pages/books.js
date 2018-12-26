
import React from 'react'
import '../css/books-styles.css'
import {Helmet} from 'react-helmet'
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
            <Helmet>
                <meta charSet="utf-8" />
                <title>Books - Blake Fletcher</title>
                <link rel="canonical" href="https://www.blakefletcher.ca/books" />
            </Helmet>
            <Header />
            <div className="books-wrapper">
                <h2>Books.</h2>
                <div className="books-container">
                    <p>These are the books I've read, again and again.</p>
                    <div>
                        <img src={emyth} alt="e myth revisited"/>
                        <img src={enders} alt="enders game"/>
                        <img src={howtofail} alt="how to fail"/>
                        <img src={insomniac} alt="insomniac city"/>
                        <img src={meditations} alt="meditations"/>
                        <img src={proust} alt="how proust can change your life"/>
                        <img src={rebel} alt="rebel without a crew"/>
                        <img src={seagull} alt="jonathan livingston seagull"/>
                        <img src={vagabonding} alt="meditations"/>
                        <img src={virginity} alt="losing my virginity"/>
                        <img src={zen} alt="zen and the art of motorcycle maintenance"/>

                    </div>
                </div>
            </div>
            <p className="say-hello">Say hello, I’d love to connect: <a href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer">blkfltchr@gmail.com</a></p>
            <Footer />
        </div>
    )
}

export default Books