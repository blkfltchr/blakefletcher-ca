import React from 'react'
import '../css/styles.css'
import {Link, graphql} from 'gatsby'
import {Helmet} from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'

 const Writing = ({data}) => {
    const { edges } = data.allMarkdownRemark
    return (
        <div>
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Writing - Blake Fletcher</title>
                    <link rel="canonical" href="https://www.blakefletcher.ca/writing" />
                </Helmet>
                <Header />
                <div className="page-wrapper">
                    <h2>Writing.</h2>
                    {edges.map(edge => {
                        const {frontmatter} = edge.node
                        return (
                            <Link className="blogpost-link" to={frontmatter.path}>
                                <div key={frontmatter.path}>
                                    <h4>{frontmatter.title}</h4>
                                    <p>{frontmatter.date}</p>
                                    <p>{frontmatter.description}</p>
                                </div>
                            </Link>
                        )
                    })}
                    <p className="say-hello">Say hello, I’d love to connect: <a href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer">blkfltchr@gmail.com</a></p>
                </div>
            </div>
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