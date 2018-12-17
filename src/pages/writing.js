import React from 'react'
import '../css/writing-styles.css'
import {Link, graphql} from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'

 const Writing = ({data}) => {
    const { edges } = data.allMarkdownRemark
    return (
        <div>
            <Header />
            <div className="writing-title">
                <h2>Writing.</h2>
            </div>
            {edges.map(edge => {
                const {frontmatter} = edge.node
                return (
                    <Link className="blogpost-link" to={frontmatter.path}>
                        <div key={frontmatter.path}>
                            <h2>{frontmatter.title}</h2>
                            <p>{frontmatter.date}</p>
                            <p>{frontmatter.description}</p>
                        </div>
                    </Link>
                )
            })}
            <p className="say-hello">Say hello, I’d love to connect: <a href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer">blkfltchr@gmail.com</a></p>
            <Footer />
        </div>
    )
}
 export default Writing 

export const query = graphql`
 query WritingQuery {
    allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date]}
      ) {
     edges {
       node {
         frontmatter {
           date
           description
           title
           path
         }
       }
     }
   }
 }
`