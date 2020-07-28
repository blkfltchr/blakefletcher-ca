import React from 'react'
import '../../css/styles.css'
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
                <div className="exp">
                    <a href="https://lambdaschool.com/" target="_blank" rel="noopener noreferrer"><Img className="experience-img" sizes={data.file.childImageSharp.sizes} alt="lambda jumbo"/>
                    <h4>Lambda School</h4></a>
                    <p className="left-paragraph">I started as a student at Lambda and decided to become a Project Manager to give back. The school has an amazing pay-it-forward culture that I help to uphold. I worked as a PM for Lambda Labs, the capstone project portion of the school. I helped graduates build the best applications they can.</p>
                    <p className="exp-dates">Team Lead, November 2018-June 2019</p>
                    <p className="exp-dates">Student, May 2018-November 2018</p>
                </div>
            )
        }
    />
)

export default Lambda
