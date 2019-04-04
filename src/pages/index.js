import React from "react"
import { Link } from "gatsby"
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
            <div className="page-wrapper">
                <h2>Hey! I'm Blake Fletcher.</h2>
                <p className="homepage-paragraph">I like to find ways to connect technology to the things I love, like music, reading, learning, and connecting with others. I build things on the web, and tend to focus on front end, design, product, and sometimes growth. I enjoy teaming up with other makers like me.</p>
                <p className="homepage-paragraph">Currently, I live in Toronto, where I'm studying computer science and full stack web development at <Link to="/experience">Lambda School</Link>. I'm completing the final stages of my capstone project, <a href="https://github.com/labs11-library" target="_blank" rel="noopener noreferrer">Book Maps</a>, a web app that helps neighbours share their book collections.</p>
                <p className="homepage-paragraph">I want to talk to people about their big plans – their dreams – and how they hope to accomplish them. One day, I’d like to know how to build rocketships from scratch and fly them into outer space. That may or may not be a metaphor.</p>
            </div>
            <p className="say-hello">Say hello, I’d love to connect: <a href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer">blkfltchr@gmail.com</a></p>
            <Footer />
        </div>
    )
}

export default index