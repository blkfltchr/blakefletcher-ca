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
                    <Img className="experience-img" sizes={data.file.childImageSharp.sizes} alt="lambda jumbo"/>
                    <h4>Lambda School (<a href="https://lambdaschool.com/" target="_blank" rel="noopener noreferrer">view site</a>)</h4>
                    <p className="left-paragraph">I started as a student at Lambda and decided to become a Project Manager to give back. The school has an amazing pay-it-forward culture that I help to uphold. Currently, I work as a PM for Lambda Labs, the capstone project portion of the school. I help graduates build the best applications they can.</p>
                    <p className="exp-dates">Teaching Assistant, November 2018-Current</p>
                    <p className="exp-dates">Student, May 2018-November 2018</p>
                </div>
            )
        }
    />
)

export default Lambda