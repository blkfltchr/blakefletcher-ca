import React from 'react'
import '../../css/experience-styles.css'
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
                <div className="exp">
                    <Img className="experience-img" sizes={data.file.childImageSharp.sizes} alt="mighty jumbo"/>
                    <h4>Mighty Records (<a href="http://mightyrecords.ca/" target="_blank" rel="noopener noreferrer" style={{color: "darkorchid"}}>view site</a>)</h4>
                    <p className="left-paragraph">We created Mighty Records to release our own music independently. In early 2016, the Mighty Records blog went live. We grew a following and connected with others in the industry. I interviewed artists, reviewed shows, and created playlists. At Mighty Records, I helped with releasing music, managing artists, growing the team, and curating content.</p>
                    <p className="exp-dates">Artist Manager and Blogger, January 2016-February 2017</p>
                </div>
            )
        }
    />
)

export default Mighty