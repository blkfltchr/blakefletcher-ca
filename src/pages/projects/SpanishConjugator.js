import React from 'react'
import '../../css/styles.css'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import react from '../../images/react-logo-rectangle.png'
import graphqllogo from '../../images/graphql-logo-rectangle.png'
import styled from '../../images/styled-logo-square.png'
import postgreSQLlogo from '../../images/postgreSQL-logo-rectangle.png'


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
                    </div>
                    <div className="project-content">
                        <a
                            href="https://www.conjugator.io/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <h4>Spanish Conjugator</h4>
                        </a>
                        <p>Built with <a href="https://github.com/nickoferrall" className="project-collaborator" target="_blank" rel="noopener noreferrer">Nick O'Ferrall</a></p>
                        <p className="left-paragraph">A Spanish language learning tool for verb practice. Built during my time in Medellín, Colombia while working for Lambda School. It allowed me to develop my Spanish and programming skills in unison.</p>
                        <div>
                            <img src={react} alt="react logo"/>
                            <img src={styled} alt="styled components logo"/>
                            <img src={postgreSQLlogo} alt="graphql logo"/>
                            <img src={graphqllogo} alt="graphql logo"/>
                        </div>
                    </div>
                    <div>
                            <a
                                className="purple-button"
                                href="https://github.com/blkfltchr/spanish-conjugator"
                                target="_blank"
                                rel="noopener noreferrer">
                                Code
                            </a>
                            <a
                                className="purple-button"
                                href="https://www.conjugator.io/"
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
