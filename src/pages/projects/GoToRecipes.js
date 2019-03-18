import React from 'react'
import '../../css/styles.css'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import react from '../../images/react-logo-rectangle.png'
import redux from '../../images/redux-logo-rectangle.png'
import firebase from '../../images/firebase-logo-rectangle.png'
import bootstrap from '../../images/bootstrap-logo-rectangle.png'

const GoToRecipes = () => (

    <StaticQuery 
        query = {graphql`
            query {
                file(relativePath: {
                    regex: "/gotorecipes/"
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
                        <Img className="project-card-img" sizes={data.file.childImageSharp.sizes} alt="gotorecipes logo"/>
                        {/* <div className="project-buttons">
                            <a 
                                className="purple-button" 
                                href="https://github.com/blkfltchr/gotorecipes" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                Code
                            </a>
                            <a 
                                className="purple-button" 
                                href="https://gotorecipes-b3714.firebaseapp.com/" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                Website
                            </a>
                        </div> */}
                    </div>
                    <div className="project-content">
                        <h4>GoToRecipes</h4>
                        <p>Built with <a href="https://github.com/eddygonzalez9708" 
                        className="project-collaborator" target="_blank" rel="noopener noreferrer">Edward Gonzalez</a></p>
                        <p className="left-paragraph">A simple recipe tracker for people who don't know what to eat today. Built with React and Redux for the front end and Firebase for authentication, database and hosting.</p>
                        <div>
                            <img src={react} alt="react logo"/>
                            <img src={redux} alt="redux logo"/>
                            <img src={firebase} alt="firebase logo"/>
                            <img src={bootstrap} alt="bootstrap logo"/>
                        </div>
                    </div>
                    <div>
                            <a 
                                className="purple-button"
                                href="https://github.com/blkfltchr/gotorecipes" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                Code
                            </a>
                            <a 
                                className="purple-button"
                                href="https://gotorecipes-b3714.firebaseapp.com/" 
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

export default GoToRecipes