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
                <div className="exp">
                    <a href="https://citylovesupply.com/" target="_blank" rel="noopener noreferrer"><Img className="experience-img" sizes={data.file.childImageSharp.sizes} alt="inkblot jumbo"/>
                    <h4>City Love Supply Co.</h4></a>
                    <p className="left-paragraph">City Love Supply Co. is a Toronto based apparel company, celebrating the work of the creative class. We design and sell premium goods inspired by the energy and experience of life in the city.</p>
                    <p className="exp-dates">Owner, September 2019-Current</p>
                </div>
            )
        }
    />
)

export default CityLove
