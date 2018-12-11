import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HowToLearnReact from './projects/HowToLearnReact'
import GoToRecipes from './projects/GoToRecipes'

const Projects = () => {
    return (
        <div>
            <Header />
            <div style={{margin: "4.5rem auto 0 auto", height: "100%", textAlign: "center"}}>
                <h2 style={{fontFamily: "Lato,Helvetica,Arial,Lucida,sans-serif", fontSize: "2rem"}}>Projects.</h2>
                <div style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>
                    <HowToLearnReact />
                    <GoToRecipes />
                </div>
            </div>
            <p style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.5rem", textAlign: "center"}}>Say hello, I’d love to connect: <a href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer" style={{color: "blue"}}>blkfltchr@gmail.com</a></p>
            <Footer />
        </div>
    )
}

export default Projects