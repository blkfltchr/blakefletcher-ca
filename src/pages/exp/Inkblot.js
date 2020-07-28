import React from 'react'
import '../../css/styles.css'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const Inkblot = () => (

    <StaticQuery
        query = {graphql`
            query {
                file(relativePath: {
                    regex: "/inkblot/"
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
                    <a href="https://inkblottherapy.com/" target="_blank" rel="noopener noreferrer"><Img className="experience-img" sizes={data.file.childImageSharp.sizes} alt="inkblot jumbo"/>
                    <h4>Inkblot</h4></a>
                    <p className="left-paragraph">I currently work at Inkblot as a Software Engineer. I've written features across our full suite of products using React, Redux, Rails and PostgreSQL. We are reinventing mental health support and our mission is to help people have more meaningful, connected and joyful lives.</p>
                    <p className="exp-dates">Software Engineer, June 2019-Current</p>
                </div>
            )
        }
    />
)

export default Inkblot
