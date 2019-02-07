import React from 'react'
import '../../css/experience-styles.css'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const Sprout = () => (

    <StaticQuery 
        query = {graphql`
            query {
                file(relativePath: {
                    regex: "/sprout/"
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
                    <Img className="experience-img" sizes={data.file.childImageSharp.sizes} alt="sprout jumbo"/>
                    <h4>Sprout Online</h4>
                    <p>I started Sprout Online a week after I landed three clients without a business. I didn’t have a name or website, but I did have a business model. Unlike most projects I start, Sprout Online was mostly about the money. I enlisted personal assistants from Asia to crawl through Google Maps and send me links to small businesses with old websites. I then quickly created demos and went door-to-door to sell my services. We focused on website design and digital marketing.</p>
                    <p className="exp-dates">Sales and Web Design, February 2016-November 2016</p>
                </div>
            )
        }
    />
)

export default Sprout