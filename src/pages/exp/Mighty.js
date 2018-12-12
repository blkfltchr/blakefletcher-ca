import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const Mighty = () => (

    <StaticQuery 
        query = {graphql`
            query {
                file(relativePath: {
                    regex: "/mighty/"
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
                    <Img className="experience-img" sizes={data.file.childImageSharp.sizes} alt="mighty jumbo"/>
                    <h4 style={{fontFamily: "Lato,Helvetica,Arial,Lucida,sans-serif", fontSize: "1.4rem"}}>Mighty Records (<a href="http://mightyrecords.ca/" target="_blank" rel="noopener noreferrer" style={{color: "blue"}}>view site</a>)</h4>
                    <p style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.1rem", textAlign: "center"}}>We created Mighty Records to release our own music independently. In early 2016, the Mighty Records blog went live. We grew a following and connected with others in the industry. I interviewed artists, reviewed shows, and created playlists. At Mighty Records, I helped with releasing music, managing artists, growing the team, and curating content.</p>
                    <p style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.1rem", fontStyle: "italic", textAlign: "center"}}>Artist Manager and Blogger, January 2016-February 2017</p>
                </div>
            )
        }
    />
)

export default Mighty