import React from "react"
import '../css/index-styles.css'
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
            <div className="index-text">
                <h2>Hey! I'm Blake Fletcher.</h2>
                <p>I like to find ways to connect technology to the things I love, like music, reading, learning, and connecting with others. I build things on the web, and tend to focus on front end, design, product, and sometimes growth. I enjoy teaming up with other makers like me.</p>
                <p>Currently, I live in Toronto and work as a Project Manager for <a href="https://lambdaschool.com/" target="_blank" rel="noopener noreferrer">Lambda School</a>, helping graduates get the best jobs they've ever had.</p>
                <p>I want to talk to people about their big plans – their dreams – and how they hope to accomplish them. One day, I’d like to know how to build rocketships from scratch and fly them into outer space. That may or may not be a metaphor.</p>
            </div>
            <p className="say-hello">Say hello, I’d love to connect: <a href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer">blkfltchr@gmail.com</a></p>
            <Footer />
        </div>
    )
}

export default index