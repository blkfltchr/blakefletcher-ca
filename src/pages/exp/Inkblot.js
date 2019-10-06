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
                    <a href="https://ink.inkblottherapy.com/" target="_blank" rel="noopener noreferrer"><Img className="experience-img" sizes={data.file.childImageSharp.sizes} alt="inkblot jumbo"/>
                    <h4>Inkblot</h4></a>
                    <p className="left-paragraph">At Inkblot, we aim to help you feel motivated and at your best. We ground our approach in the belief that mental health services should be convenient, affordable and confidential. Our mission is to help all Canadians have more meaningful, connected and joyful lives. We are reinventing how we support Canadians.</p>
                    <p className="exp-dates">Software Engineer, June 2019-Current</p>
                </div>
            )
        }
    />
)

export default Inkblot
