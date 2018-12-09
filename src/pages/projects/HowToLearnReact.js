import React from 'react'
import '../../css/page-styles.css'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import gatsby from '../../images/gatsby-logo-rectangle.png'
import graphqllogo from '../../images/graphql-logo-rectangle.png'
import contentful from '../../images/contentful-logo-rectangle.png'
import styled from '../../images/styled-logo-square.png'
import algolia from '../../images/algolia-logo-rectangle.png'

const HowToLearnReact = () => (

    <StaticQuery 
        query = {graphql`
            query {
                file(relativePath: {
                    regex: "/howtolearnreact/"
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
                        <Img style={{width: "370px"}} className="project-card-img" sizes={data.file.childImageSharp.sizes} alt="howtolearnreact logo"/>
                        <div className="project-buttons">
                            <a 
                                className="project-button"
                                style={{margin: "0.5rem"}} 
                                href="https://github.com/blkfltchr/howtolearnreact" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                <button>Code</button>
                            </a>
                            <a 
                                className="project-button"
                                style={{margin: "0.5rem"}} 
                                href="https://www.howtolearnreact.com/" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                <button>Website</button>
                            </a>
                        </div>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <h4 style={{fontFamily: "Lato,Helvetica,Arial,Lucida,sans-serif", fontSize: "1.4rem"}}>How To Learn React</h4>
                        <p style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.1rem", textAlign: "center"}}>A project intended to share the things I learn while working with React. As I build things, complete tutorials, read articles, and watch videos, I add to the blog.</p>
                        <div>
                            <img style={{height: "25px", margin: "0.5rem"}} src={gatsby} alt="gatsby logo"/>
                            <img style={{height: "25px", margin: "0.5rem"}} src={graphqllogo} alt="graphql logo"/>
                            <img style={{height: "25px", margin: "0.5rem"}} src={contentful} alt="contentful logo"/>
                            <img style={{height: "25px", margin: "0.5rem"}} src={styled} title="Styled Components" alt="styled logo"/>
                            <img style={{height: "25px", margin: "0.5rem"}} src={algolia} alt="algolia logo"/>
                        </div>
                    </div>
                    <div>
                            <a 
                                className="project-button"
                                style={{margin: "0.5rem"}} 
                                href="https://github.com/blkfltchr/howtolearnreact" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                <button>Code</button>
                            </a>
                            <a 
                                className="project-button"
                                style={{margin: "0.5rem"}} 
                                href="https://www.howtolearnreact.com/" 
                                target="_blank" 
                                rel="noopener noreferrer">
                                <button>Website</button>
                            </a>
                        </div>
                </div>
            )
        }
    />
)

export default HowToLearnReact