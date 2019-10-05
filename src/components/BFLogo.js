import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import '../css/header-styles.css'
import Img from 'gatsby-image'

const BFLogo = () => (

    <StaticQuery 
        query = {graphql`
            query {
                file(relativePath: {
                    regex: "/logo/"
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
                <div>
                    <Img style={{height: "4rem", position: "absolute", top: "12px", left: "6px"}} sizes={data.file.childImageSharp.sizes} alt="bf logo"/>
                </div>
            )
        }
    />
)

export default BFLogo