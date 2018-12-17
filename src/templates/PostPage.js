import React, { Component } from 'react'
import '../css/postpage-styles.css'
import {graphql} from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class PostPage extends Component {
  render() {
    const { frontmatter, html } = this.props.data.markdownRemark;
    return (
      <div>
        <Header />
        <div style={{width: "60vw", margin: "4.5rem auto 0 auto"}}>
          <h2 style={{fontFamily: "Lato,Helvetica,Arial,Lucida,sans-serif", fontSize: "2rem"}}>{frontmatter.title}</h2>
          <p style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.4rem", fontStyle: "italic", color: "grey"}}>{frontmatter.date}</p>
          <div className="markdown" dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
        <Footer />
      </div>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
        description
        path
      }
    }
  }
`
