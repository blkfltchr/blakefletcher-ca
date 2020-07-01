import React from 'react'
import '../../css/styles.css'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const CityLove = () => (

    <StaticQuery
        query = {graphql`
            query {
                file(relativePath: {
                    regex: "/citylove/"
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
                        <Img className="project-card-img" sizes={data.file.childImageSharp.sizes} alt="citylove jumbo"/>
                    </div>
                    <div className="project-content">
                        <a href="https://citylovesupply.com/" target="_blank" rel="noopener noreferrer">
                            <h4>City Love Supply Co.</h4>
                        </a>
                        <p style={{width: "90%", margin: "0 auto 10px auto"}}>Built with Matt Wright</p>
                        <p className="left-paragraph">City Love Supply Co. is a Toronto based apparel company, celebrating the work of the creative class. We design and sell premium goods inspired by the energy and experience of life in the city. We went from concept to launch in 60 days, sourcing manufacturing and fulfilment from local factories. I used various skills inclduing graphic design with Figma, Shopify web desgn, and managing Facebook Ads.</p>
                    </div>
                    <div>
                        <a
                            className="purple-button"
                            href="https://citylovesupply.com/"
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

export default CityLove
