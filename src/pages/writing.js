import React from 'react'
import {Link, graphql} from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'

 const Writing = ({data}) => {
    const { edges } = data.allMarkdownRemark
    return (
        <div>
            <Header />
            <div style={{margin: "4.5rem auto 0 auto", height: "100%", textAlign: "center"}}>
                <h2 style={{fontFamily: "Lato,Helvetica,Arial,Lucida,sans-serif", fontSize: "2rem"}}>Writing.</h2>
            </div>
            {edges.map(edge => {
                const {frontmatter} = edge.node
                return (
                    <Link style={{color: "black", textDecoration: "none"}} to={frontmatter.path}>
                        <div style={{width: "60vw", margin: "0 auto"}} key={frontmatter.path}>
                            <h2 style={{fontFamily: "Lato,Helvetica,Arial,Lucida,sans-serif", fontSize: "1.4rem", color: "blue", textDecoration: "underline"}}>{frontmatter.title}</h2>
                            <p style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.1rem"}}>{frontmatter.date}</p>
                            <p style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.1rem"}}>{frontmatter.description}</p>
                        </div>
                    </Link>
                )
            })}
            <p style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.5rem", textAlign: "center"}}>Say hello, I’d love to connect: <a href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer" style={{color: "blue"}}>blkfltchr@gmail.com</a></p>
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