import React from 'react'
import '../../css/styles.css'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import react from '../../images/react-logo-rectangle.png'
import materialui from '../../images/materialui-logo-square.png'
import redux from '../../images/redux-logo-rectangle.png'
import node from '../../images/node-logo-rectangle.png'
import postgreSQL from '../../images/postgreSQL-logo-rectangle.png'

const BookMaps = () => (

    <StaticQuery 
        query = {graphql`
            query {
                file(relativePath: {
                    regex: "/bookmaps/"
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
                        <Img className="project-card-img" sizes={data.file.childImageSharp.sizes} alt="book maps screen"/>
                    </div>
                    <div className="project-content">
                        <h4>Book Maps</h4>
                        <p style={{fontFamily: "Lato,Helvetica,Arial,Lucida,sans-serif"}}><span style={{fontStyle: "italic"}}>Coming soon</span> <span role="img" aria-label="man with computer">👨‍💻</span></p>
                        <p className="left-paragraph">A marketplace app that helps neighbours share their book collections. I'm working as a full stack developer, connecting the database, authentication / authorization, and chat, using PostgreSQL, OAuth, Twilio, and more.</p>
                        <div>
                            <img src={react} alt="react logo"/>
                            <img src={redux} alt="redux logo"/>
                            <img src={node} alt="node logo"/>
                            <img src={postgreSQL} alt="postgreSQL logo"/>
                            <img src={materialui} alt="material ui logo"/>
                        </div>
                    </div>
                    <div>
                            <a 
                                className="purple-button"
                                href="https://github.com/labs11-library" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                Code
                            </a>
                            {/* <a 
                                className="purple-button"
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

export default BookMaps