import React from 'react';
import goodreads from '../images/goodreads-logo.png'
import medium from '../images/medium-logo.png'
import twitter from '../images/twitter-logo.png'
import messenger from '../images/messenger-logo.png'
import linkedin from '../images/linkedin-logo.png'
import github from '../images/github-logo.png'
import instagram from '../images/instagram-logo.png'

const Footer = () => {
    return (
        <div style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.2rem", backgroundColor: "#f6f9fc", padding: "0.5rem 0"}}>
            <p style={{textAlign: "center"}}>You can find me elsewhere:</p>
            <div style={{display: "flex", justifyContent: "center"}}>
                <ul>
                    <a href="https://www.goodreads.com/user/show/46248158-blake-fletcher" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer"><li>keeping track of what I’ve read on <span style={{fontWeight: "bold", textDecoration: "underline"}}>goodreads</span>;</li></a>
                    <a href="https://medium.com/@blakefletcher" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer"><li>writing stories on <span style={{fontWeight: "bold", textDecoration: "underline"}}>Medium</span> on rare occasion;</li></a>
                    <a href="https://twitter.com/blkfltchr" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer"><li>trying to start conversations but mostly listening on <span style={{fontWeight: "bold", textDecoration: "underline"}}>Twitter</span>;</li></a>
                </ul>
                <ul>
                    <a href="https://m.me/blkfltchr" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer"><li>avoiding the <span style={{fontWeight: "bold", textDecoration: "underline"}}>Facebook</span> newsfeed;</li></a>
                    <a href="https://www.linkedin.com/in/blakemfletcher/" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer"><li>adding to the collective rolodex that is <span style={{fontWeight: "bold", textDecoration: "underline"}}>LinkedIn</span>;</li></a>
                    <a href="http://github.com/blkfltchr" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer"><li>pushing and pulling on <span style={{fontWeight: "bold", textDecoration: "underline"}}>GitHub</span>;</li></a>
                    <a href="https://www.instagram.com/blkfltchr/" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer"><li>and sharing photos on <span style={{fontWeight: "bold", textDecoration: "underline"}}>Instagram</span>.</li></a>
                </ul>
            </div>
            <p style={{textAlign: "center"}}>blakefletcher.ca v.3.0.0</p>
            <div style={{display: "flex", justifyContent: "center"}}>
                <a href="https://www.goodreads.com/user/show/46248158-blake-fletcher" target="_blank" rel="noopener noreferrer"><img style={{margin: "0.3rem", height: "25px"}} src={goodreads} alt="goodreads logo"/></a>
                <a href="https://medium.com/@blakefletcher" target="_blank" rel="noopener noreferrer"><img style={{margin: "0.3rem", height: "25px"}} src={medium} alt="medium logo"/></a>
                <a href="https://twitter.com/blkfltchr" target="_blank" rel="noopener noreferrer"><img style={{margin: "0.3rem", height: "25px"}} src={twitter} alt="twitter logo"/></a>
                <a href="https://m.me/blkfltchr" target="_blank" rel="noopener noreferrer"><img style={{margin: "0.3rem", height: "25px"}} src={messenger} alt="messenger logo"/></a>
                <a href="https://www.linkedin.com/in/blakemfletcher/" target="_blank" rel="noopener noreferrer"><img style={{margin: "0.3rem", height: "25px"}} src={linkedin} alt="messenger logo"/></a>
                <a href="https://medium.com/@blakefletcher" target="_blank" rel="noopener noreferrer"><img style={{margin: "0.3rem", height: "25px"}} src={github} alt="github logo"/></a>
                <a href="https://www.instagram.com/blkfltchr/" target="_blank" rel="noopener noreferrer"><img style={{margin: "0.3rem", height: "25px"}} src={instagram} alt="instagram logo"/></a>
            </div>
        </div>
    )
}

export default Footer