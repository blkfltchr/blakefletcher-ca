import React from 'react'
import '../../css/styles.css'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const CloudGallery = () => (

    <StaticQuery
        query = {graphql`
            query {
                file(relativePath: {
                    regex: "/cloudgallery/"
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
                    <a href="https://cloudgallery.ca/" target="_blank" rel="noopener noreferrer"><Img className="experience-img" sizes={data.file.childImageSharp.sizes} alt="inkblot jumbo"/>
                    <h4>Cloud Gallery</h4></a>
                    <p className="left-paragraph">I currently run Cloud Gallery, a hybrid art gallery that comibines combines online and gallery spaces to showcase original art inspired by Ontario's natural beauty. I built the online store using Shopify and lead our online marketing efforts.</p>
                    <p className="exp-dates">Co-Owner, February 2021-Current</p>
                </div>
            )
        }
    />
)

export default CloudGallery
