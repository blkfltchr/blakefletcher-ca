import React from 'react'
import '../../css/project-styles.css'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import react from '../../images/react-logo-rectangle.png'
import materialui from '../../images/materialui-logo-square.png'
import mongodb from '../../images/mongodb-logo-rectangle.png'
import node from '../../images/node-logo-rectangle.png'

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
                        <p style={{fontFamily: "Lato,Helvetica,Arial,Lucida,sans-serif"}}><span style={{fontStyle: "italic"}}>Under construction</span> <span role="img" aria-label="construction sign">🚧</span></p>
                        <p className="left-paragraph">A travel app built in a team of 8. Users can book trips (hotels, car rentals, flights, and other activities.). I lead the backend team in implementing a database, authentication / authorization, a payment method, using MongoDB, OAuth, Stripe, and more.</p>
                        <div>
                            <img src={react} alt="react logo"/>
                            <img src={node} alt="node logo"/>
                            <img src={mongodb} alt="mongodb logo"/>
                            <img src={materialui} alt="material ui logo"/>
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