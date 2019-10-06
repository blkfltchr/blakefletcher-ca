import React from 'react'
import '../../css/styles.css'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import gatsby from '../../images/gatsby-logo-rectangle.png'
import contentful from '../../images/contentful-logo-rectangle.png'
import styled from '../../images/styled-logo-square.png'
import algolia from '../../images/algolia-logo-rectangle.png'

const HowToLearnReact = () => (

    <StaticQuery
        query = {graphql`
            query {
                file(relativePath: {
                    regex: "/howtolearnreact/"
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
                        <Img className="project-card-img" sizes={data.file.childImageSharp.sizes} alt="howtolearnreact logo"/>
                    </div>
                    <div className="project-content">
                        <a
                            href="https://howtolearnreact.netlify.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <h4>How To Learn React</h4>
                        </a>
                        <p className="left-paragraph">A project intended to share the things I learn while working with React. As I build things, complete tutorials, read articles, and watch videos, I add to the blog.</p>
                        <div>
                            <img src={gatsby} alt="gatsby logo"/>
                            <img src={contentful} alt="contentful logo"/>
                            <img src={styled} title="Styled Components" alt="styled logo"/>
                            <img src={algolia} alt="algolia logo"/>
                        </div>
                    </div>
                    <div>
                            <a
                                className="purple-button"
                                href="https://github.com/blkfltchr/howtolearnreact"
                                target="_blank"
                                rel="noopener noreferrer">
                                Code
                            </a>
                            <a
                                className="purple-button"
                                href="https://howtolearnreact.netlify.com/"
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

export default HowToLearnReact
