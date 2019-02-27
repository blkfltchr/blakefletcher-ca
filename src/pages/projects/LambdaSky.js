import React from 'react'
import '../../css/project-styles.css'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import react from '../../images/react-logo-rectangle.png'

const LambdaSky = () => (

    <StaticQuery 
        query = {graphql`
            query {
                file(relativePath: {
                    regex: "/sky/"
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
                        <Img className="project-card-img" sizes={data.file.childImageSharp.sizes} alt="lambda sky screen"/>
                        <div className="project-buttons">
                            <a 
                                className="project-button"
                                href="https://github.com/CarloC24/Lambda-sky" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                Code
                            </a>
                            {/* <a 
                                className="project-button" 
                                href="https://spanish-conjugator.netlify.com/" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                Website
                            </a> */}
                        </div>
                    </div>
                    <div className="project-content">
                        <h4>Lambda Sky</h4>
                        {/* <p>Built with <a href="https://github.com/nickoferrall" style={{color: 'blue', fontWeight: 'bold'}} target="_blank" rel="noopener noreferrer">others</a></p> */}
                        <p className="left-paragraph">A travel app built in a team of 8. It allows users to book trips (hotels, car rentals, flights, and other activities.). I lead the backend team in implementing a database, authentication/authorization, a payment method, using MongoDB, OAuth, Stripe, and more.</p>
                        <div>
                            <img src={react} alt="react logo"/>
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
                            {/* <a 
                                className="project-button"
                                href="https://spanish-conjugator.netlify.com/" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                Website
                            </a> */}
                        </div>
                </div>
            )
        }
    />
)

export default LambdaSky