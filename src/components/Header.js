import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import '../css/component-styles.css'

const Header = () => (

    <StaticQuery
        query = {graphql`
            query {
                file(relativePath: {
                    regex: "/bf/"
                }) {
                    childImageSharp {
                        sizes(quality: 100) {
                            ...GatsbyImageSharpSizes
                        }   
                    }
                }
            }
        `}
        render={data => (
                <div>
                    <Link to="/"><Img sizes={data.file.childImageSharp.sizes} style={{height: "60px", width: "60px"}} alt="BlakeFletcher.ca logo" className="bf-logo" /></Link>
                    <div className="nav-links">
                        <Link className="nav-link" to="/"><span role="img" aria-label="house">🏠</span> Home</Link>
                        <Link className="nav-link" to="/projects"><span role="img" aria-label="laptop">💻</span> Projects</Link>
                        <a className="nav-link"  href="mailto:blkfltchr@gmail.com"><span role="img" aria-label="envelope">✉️</span> Contact</a>
                    </div>
                </div>
        )}
    />
)

export default Header