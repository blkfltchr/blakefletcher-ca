import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const Lambda = () => (

    <StaticQuery 
        query = {graphql`
            query {
                file(relativePath: {
                    regex: "/lambda/"
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
                <div>
                    <Img style={{width: "60vw"}} sizes={data.file.childImageSharp.sizes} alt="lambda jumbo"/>
                    <h4 style={{fontFamily: "Lato,Helvetica,Arial,Lucida,sans-serif", fontSize: "1.4rem"}}>Lambda School (<a href="https://lambdaschool.com/" target="_blank" rel="noopener noreferrer" style={{color: "blue"}}>view site</a>)</h4>
                    <p style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.1rem", textAlign: "center"}}>I started as a student at Lambda and decided to become a PM to give back. The school has an amazing pay-it-forward culture that I help to uphold. Currently, I work as a project manager for Lambda Next, the post grad portion of the school. I help graduates get the best job they've ever had.</p>
                    <p style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.1rem", fontStyle: "italic", textAlign: "center"}}>Project Manager, November 2018-Present</p>
                </div>
            )
        }
    />
)

export default Lambda