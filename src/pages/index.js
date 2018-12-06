import React from "react"
import Footer from '../components/Footer'
import Header from '../components/Header'

const index = () => {

    return ( 
        <div>
            <Header />
            <div style={{margin: "2.5rem auto 0 auto", width: "75vw", height: "100%", display: "flex", flexDirection: "column", textAlign: "center"}}>
                <h2 style={{fontFamily: "Lato,Helvetica,Arial,Lucida,sans-serif", fontSize: "2rem"}}>Hey! I'm Blake Fletcher.</h2>
                <p style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.5rem"}}>At the beginning of 2016, I made a move. I’ve kept moving ever since. Currently, I live in Toronto and work as a Project Manager for <a href="https://lambdaschool.com/" target="_blank" rel="noopener noreferrer">Lambda School</a>, helping graduates get the best jobs they've ever had. Music is my first love. I spend my time building web apps, writing to think clearer, and interacting with people, places and things that I can learn from.</p>
                <p style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.5rem"}}>I want to talk to people about their big plans – their dreams – and how they hope to accomplish them. One day, I’d like to know how to build rocketships from scratch and fly them into outer space. That may or may not be a metaphor.</p>
                <p style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.5rem"}}>Say hello, I’d love to connect: <a href="mailto:blkfltchr@gmail.com" target="_blank" rel="noopener noreferrer">blkfltchr@gmail.com</a></p>
            </div>
            <Footer />
        </div>
    )
}

export default index