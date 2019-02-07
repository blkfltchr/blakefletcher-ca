import React from 'react'
import '../../css/project-styles.css'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import react from '../../images/react-logo-rectangle.png'
import styled from '../../images/styled-logo-square.png'

const SpanishConjugator = () => (

    <StaticQuery 
        query = {graphql`
            query {
                file(relativePath: {
                    regex: "/spanishconjugator/"
                }) {
                    childImageSharp {
                        sizes(quality: 100) {
                            ...GatsbyImageSharpSizes
                        }   
                    }
                }
            }
        `}
        render={
            data => (
                <div className="project-card-wrapper">
                    <div className="project-card">
                        <Img className="project-card-img" sizes={data.file.childImageSharp.sizes} alt="howtolearnreact logo"/>
                        <div className="project-buttons">
                            <a 
                                className="project-button"
                                href="https://github.com/blkfltchr/spanish-conjugator" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                Code
                            </a>
                            <a 
                                className="project-button" 
                                href="https://spanish-conjugator.netlify.com/" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                Website
                            </a>
                        </div>
                    </div>
                    <div className="project-content">
                        <h4>Spanish Conjugator</h4>
                        <p>Built with <a href="https://github.com/nickoferrall" style={{color: 'blue', fontWeight: 'bold'}} target="_blank" rel="noopener noreferrer">Nick O'Ferrall</a></p>
                        <p className="left-paragraph">This app is intended to help me learn Spanish and programming in unison. It will morph into a suite of language learning tools. I built it during my time in Medellín, Colombia while working for Lambda School.</p>
                        <div>
                            <img src={react} alt="react logo"/>
                            <img src={styled} title="Styled Components" alt="styled logo"/>
                        </div>
                    </div>
                    <div>
                            <a 
                                className="project-button"
                                href="https://github.com/blkfltchr/spanish-conjugator" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                Code
                            </a>
                            <a 
                                className="project-button"
                                href="https://spanish-conjugator.netlify.com/" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                Website
                            </a>
                        </div>
                </div>
            )
        }
    />
)

export default SpanishConjugator