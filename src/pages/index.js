import React from "react"
import '../css/styles.css'
import {Helmet} from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'

const index = () => {

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Hey! I'm Blake Fletcher.</title>
                <link rel="canonical" href="https://www.blakefletcher.ca/" />
            </Helmet>
            <Header />
            <div className="page-wrapper" style={{ margin: '150px auto' }}>
                <h2>Hey! I'm Blake Fletcher.</h2>
                <p className="homepage-paragraph">I build things on the web, and tend to focus on front end, design, and growth. I like to find ways to connect technology to the things I love, like music, reading, learning, and investing.</p>
                <p className="homepage-paragraph">Currently, I live in Toronto, work as a Freelance Web Designer and run<a className="nav-link" href="https://cloudgallery.ca/" target="_blank" rel="noopener noreferrer">Cloud Gallery</a>. Previously, I was a Software Engineer at<a className="nav-link" href="https://inkblottherapy.com/" target="_blank" rel="noopener noreferrer">Inkblot</a> and<a className="nav-link" href="https://lambdaschool.com/" target="_blank" rel="noopener noreferrer">Lambda School</a> Student and Team Lead.</p>
                {/* <p className="homepage-paragraph">I want to talk to people about their big plans – their dreams – and how they hope to accomplish them. One day, I’d like to know how to build rocketships from scratch and fly them into outer space. That may or may not be a metaphor.</p> */}
            </div>
            <p className="say-hello"><b>Say hello, I’d love to connect: <a href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer">blkfltchr@gmail.com</a></b></p>
            <Footer />
        </div>
    )
}

export default index
