import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import howtolearnreact from '../images/howtolearnreact-logo-rectangle.png'
import gatsby from '../images/gatsby-logo-rectangle.png'
import graphql from '../images/graphql-logo-rectangle.png'
import contentful from '../images/contentful-logo-rectangle.png'
import styled from '../images/styled-logo-square.png'
import algolia from '../images/algolia-logo-rectangle.png'

const Projects = () => {
    return (
        <div>
            <Header />
            <div style={{margin: "4.5rem auto 0 auto", height: "100%", textAlign: "center"}}>
                <h2 style={{fontFamily: "Lato,Helvetica,Arial,Lucida,sans-serif", fontSize: "2rem"}}>Projects.</h2>
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    <div style={{width: "370px", margin: "0.5rem", padding: "0.5rem 0", border: "solid 1px lightgrey", borderRadius: "1rem"}}>
                        <img style={{width: "370px"}} src={howtolearnreact} alt="howtolearnreact logo"/>
                        <div style={{textAlign: "center"}}>
                            <h4 style={{fontFamily: "Lato,Helvetica,Arial,Lucida,sans-serif", fontSize: "1.4rem"}}>How To Learn React</h4>
                            <p style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.1rem", textAlign: "center"}}>A project intended to share the things I learn while working with React. As I build things, complete tutorials, read articles, and watch videos, I add to the blog.</p>
                            <div>
                                <img style={{height: "25px", margin: "0.5rem"}} src={gatsby} alt="gatsby logo"/>
                                <img style={{height: "25px", margin: "0.5rem"}} src={graphql} alt="graphql logo"/>
                                <img style={{height: "25px", margin: "0.5rem"}} src={contentful} alt="contentful logo"/>
                                <img style={{height: "25px", margin: "0.5rem"}} src={styled} title="Styled Components" alt="styled logo"/>
                                <img style={{height: "25px", margin: "0.5rem"}} src={algolia} alt="algolia logo"/>
                            </div>
                            <div style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.2rem"}}>
                                <a style={{margin: "0.5rem"}} href="https://github.com/blkfltchr/howtolearnreact" target="_blank" rel="noopener noreferrer">Code</a>
                                <a style={{margin: "0.5rem"}} href="https://www.howtolearnreact.com/" target="_blank" rel="noopener noreferrer">Website</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects