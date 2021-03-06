import React from 'react'
import '../css/styles.css'
import {Helmet} from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HowToLearnReact from './projects/HowToLearnReact'
import GoToRecipes from './projects/GoToRecipes'
import LambdaTimeline from './projects/LambdaTimeline';
import SpanishConjugator from './projects/SpanishConjugator';
import CityLove from './projects/CityLove';
import BookMaps from './projects/BookMaps';

const Projects = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Projects - Blake Fletcher</title>
                <link rel="canonical" href="https://www.blakefletcher.ca/" />
            </Helmet>
            <Header />
            <div className="projects-text">
                <h2>Projects.</h2>
                <div>
                    <CityLove />
                    <BookMaps />
                    <SpanishConjugator />
                    <HowToLearnReact />
                    <LambdaTimeline />
                    <GoToRecipes />
                </div>
                <p className="say-hello"><b>Say hello, I’d love to connect: <a href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer">blkfltchr@gmail.com</a></b></p>            </div>
            <Footer />
        </div>
    )
}

export default Projects
