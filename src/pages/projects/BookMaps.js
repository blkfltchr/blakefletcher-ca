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
                        <a
                            href="https://bookmaps.netlify.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <h4>BookMaps</h4>
                        </a>
                        <p style={{width: "90%", margin: "0 auto 10px auto"}}>Built with <a href="https://github.com/Zooheck" className="project-collaborator" target="_blank" rel="noopener noreferrer">David Flack</a>, <a href="https://github.com/henron1" className="project-collaborator" target="_blank" rel="noopener noreferrer">Henry Neal</a>, <a href="https://github.com/JacobLayton" className="project-collaborator" target="_blank" rel="noopener noreferrer">Jacob Layton</a>, and <a href="https://github.com/sk-vojik" className="project-collaborator" target="_blank" rel="noopener noreferrer">Scott Vojik</a>.</p>
                        <p className="left-paragraph">A peer-to-peer library app that helps neighbours share their books. I contributed across the full stack, connecting the database, authentication / authorization, integrating email and chat, using PostgreSQL, OAuth, Twilio, and more.</p>
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
                        <a
                            className="purple-button"
                            href="https://bookmaps.netlify.com/"
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

export default BookMaps
