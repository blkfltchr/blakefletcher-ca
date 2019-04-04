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
                    <p className="left-paragraph">I started as a student at Lambda and decided to become a Project Manager to give back. The school has an amazing pay-it-forward culture that I help to uphold. Currently, I work as a PM for Lambda Next, the post grad portion of the school. I help graduates get the best job they've ever had.</p>
                    <p className="exp-dates">Project Manager, November 2018-March 2019</p>
                    <p className="exp-dates">Student, May 2018-November 2018</p>
                </div>
            )
        }
    />
)

export default Lambda