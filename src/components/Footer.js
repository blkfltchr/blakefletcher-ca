import React from 'react';

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
                    <a href="http://github.com/blkfltchr" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer"><li>pushing and pulling on <span style={{fontWeight: "bold", textDecoration: "underline"}}>GitHub</span>;</li></a>
                    <a href="https://www.instagram.com/blkfltchr/" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer"><li>and sharing photos on <span style={{fontWeight: "bold", textDecoration: "underline"}}>Instagram</span>.</li></a>
                </ul>
            </div>
            <p style={{textAlign: "center"}}>blakefletcher.ca v.3.0.0</p>
        </div>
    )
}

export default Footer