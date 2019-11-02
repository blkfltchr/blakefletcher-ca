import React from 'react'
import '../css/styles.css'
import {Helmet} from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Lambda from './exp/Lambda'
import Pluto from './exp/Pluto'
import Mighty from './exp/Mighty'
import Sprout from './exp/Sprout'
import Inkblot from './exp/Inkblot';
import CityLove from './exp/CityLove';

const Experience = () => {
    return (
        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Experience - Blake Fletcher</title>
                <link rel="canonical" href="https://www.blakefletcher.ca/experience" />
            </Helmet>
            <Header />
            <div className="page-wrapper">
                <h2>Experience.</h2>
                <div>
                    <CityLove />
                    <hr className="page-break"/>
                    <Inkblot />
                    <hr className="page-break"/>
                    <Lambda />
                    <hr className="page-break"/>
                    <Pluto />
                    <hr className="page-break"/>
                    <Mighty />
                    <hr className="page-break"/>
                    <Sprout />
                </div>
            </div>
            <p className="say-hello"><b>Say hello, I’d love to connect: <a href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer">blkfltchr@gmail.com</a></b></p>
            <Footer />
        </div>
    )
}

export default Experience
