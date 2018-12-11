import React from 'react'
import '../../css/page-styles.css'
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
                <div style={{width: "370px", margin: "0.5rem", padding: "0.5rem 0", border: "solid 1px lightgrey", borderRadius: "1rem"}}>
                    <div className="project-card">
                        <Img style={{width: "366px", margin: "0 auto"}} className="project-card-img" sizes={data.file.childImageSharp.sizes} alt="gotorecipes logo"/>
                        <div className="project-buttons">
                            <a 
                                className="project-button"
                                style={{margin: "0.5rem"}} 
                                href="https://github.com/blkfltchr/gotorecipes" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                <button>Code</button>
                            </a>
                            {/* <a 
                                className="project-button"
                                style={{margin: "0.5rem"}} 
                                href="https://www.gotorecipes.firebaseapp.com/" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                <button>Website</button>
                            </a> */}
                        </div>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <h4 style={{fontFamily: "Lato,Helvetica,Arial,Lucida,sans-serif", fontSize: "1.4rem", marginBlockEnd: "1rem"}}>GoToRecipes</h4>
                        <p style={{fontFamily: "Lato,Helvetica,Arial,Lucida,sans-serif", fontSize: "1.1rem"}}><span style={{fontStyle: "italic"}}>Under construction</span> <span role="img" aria-label="construction sign">🚧</span></p>
                        <p style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.1rem", textAlign: "center"}}>A simple recipe tracker for people who don't know what to eat today. Built with React and Redux for the front end and Firebase for authentication, database and hosting.</p>
                        <div>
                            <img style={{height: "25px", margin: "0.5rem"}} src={react} alt="react logo"/>
                            <img style={{height: "25px", margin: "0.5rem"}} src={redux} alt="redux logo"/>
                            <img style={{height: "25px", margin: "0.5rem"}} src={firebase} alt="firebase logo"/>
                            <img style={{height: "25px", margin: "0.5rem"}} src={bootstrap} alt="bootstrap logo"/>
                        </div>
                    </div>
                    <div>
                            <a 
                                className="project-button"
                                style={{margin: "0.5rem"}} 
                                href="https://github.com/blkfltchr/gotorecipes" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                <button>Code</button>
                            </a>
                            {/* <a 
                                className="project-button"
                                style={{margin: "0.5rem"}} 
                                href="https://www.gotorecipes.firebaseapp.com/" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                <button>Website</button>
                            </a> */}
                        </div>
                </div>
            )
        }
    />
)

export default GoToRecipes