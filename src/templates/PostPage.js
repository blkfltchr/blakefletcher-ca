import React, { Component } from 'react'
import '../css/styles.css'
import {graphql} from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class PostPage extends Component {
  render() {
    const { frontmatter, html } = this.props.data.markdownRemark;
    return (
      <div>
        <Header />
        <div className="page-wrapper">
          <h1 className="blogpost-title">{frontmatter.title}</h1>
          <p className="blogpost-date">{frontmatter.date}</p>
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
