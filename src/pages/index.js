import React from "react"
import Footer from '../components/Footer'
import Header from '../components/Header'

const index = () => {

    return ( 
        <div>
            <Header />
            <div style={{margin: "2.5rem auto 0 auto", width: "75vw", height: "100%", display: "flex", flexDirection: "column", textAlign: "center"}}>
                <h2 style={{fontFamily: "Lato,Helvetica,Arial,Lucida,sans-serif", fontSize: "2rem"}}>Hey! I'm Blake Fletcher.</h2>
                <p style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.5rem"}}>I like to find ways to connect technology to the things I love, like music, reading, learning, and connecting with others. I build things on the web, and tend to focus on front end, design, product, and sometimes growth. I enjoy teaming up with other makers like me.</p>
                <p style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.5rem"}}>Currently, I live in Toronto and work as a Project Manager for <a href="https://lambdaschool.com/" target="_blank" rel="noopener noreferrer" style={{color: "blue"}}>Lambda School</a>, helping graduates get the best jobs they've ever had.</p>
                <p style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.5rem"}}>I want to talk to people about their big plans – their dreams – and how they hope to accomplish them. One day, I’d like to know how to build rocketships from scratch and fly them into outer space. That may or may not be a metaphor.</p>
            </div>
            <p style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.5rem", textAlign: "center"}}>Say hello, I’d love to connect: <a href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer" style={{color: "blue"}}>blkfltchr@gmail.com</a></p>
            <Footer />
        </div>
    )
}

export default index