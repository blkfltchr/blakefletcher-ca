import React from "react"
import {Link} from "gatsby";
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
                <p className="homepage-paragraph">I build things on the web, and tend to focus on front end, design, product, and sometimes growth. I like to find ways to connect technology to the things I love, like music, reading, learning, and connecting with others.</p>
                <p className="homepage-paragraph">Currently, I live in Toronto and work as a Software Engineer at <Link to="/experience">Inkblot</Link>.</p>
                <p className="homepage-paragraph">I want to talk to people about their big plans – their dreams – and how they hope to accomplish them. One day, I’d like to know how to build rocketships from scratch and fly them into outer space. That may or may not be a metaphor.</p>
            </div>
            <p className="say-hello"><b>Say hello, I’d love to connect: <a href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer">blkfltchr@gmail.com</a></b></p>
            <Footer />
        </div>
    )
}

export default index