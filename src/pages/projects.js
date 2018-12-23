import React from 'react'
import '../css/project-styles.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HowToLearnReact from './projects/HowToLearnReact'
import GoToRecipes from './projects/GoToRecipes'
import {Helmet} from 'react-helmet'

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
                    <HowToLearnReact />
                    <GoToRecipes />
                </div>
            </div>
            <p className="say-hello">Say hello, I’d love to connect: <a href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer">blkfltchr@gmail.com</a></p>
            <Footer />
        </div>
    )
}

export default Projects