import React from 'react';
import {Link} from 'gatsby';

const Footer = () => {
    return (
        <div style={{fontFamily: "Merriweather,Georgia,Times New Roman,serif", fontSize: "1.2rem", backgroundColor: "#f6f9fc", padding: "0.7rem 0"}}>
            <p>You can find me elsewhere:</p>
            <ul>
                <Link to="https://www.goodreads.com/user/show/46248158-blake-fletcher" style={{textDecoration: "none"}}><li>keeping track of what I’ve read on <span style={{fontWeight: "bold", textDecoration: "underline"}}>goodreads</span>;</li></Link>
                <Link to="https://medium.com/@blakefletcher" style={{textDecoration: "none"}}><li>writing stories on <span style={{fontWeight: "bold", textDecoration: "underline"}}>Medium</span> on rare occasion;</li></Link>
                <Link to="https://twitter.com/blkfltchr" style={{textDecoration: "none"}}><li>trying to start conversations but mostly listening on <span style={{fontWeight: "bold", textDecoration: "underline"}}>Twitter</span>;</li></Link>
                <Link to="https://m.me/blkfltchr" style={{textDecoration: "none"}}><li>avoiding the <span style={{fontWeight: "bold", textDecoration: "underline"}}>Facebook</span> newsfeed;</li></Link>
                <Link to="http://github.com/blkfltchr" style={{textDecoration: "none"}}><li>pushing and pulling on <span style={{fontWeight: "bold", textDecoration: "underline"}}>GitHub</span>;</li></Link>
                <Link to="https://www.instagram.com/blkfltchr/" style={{textDecoration: "none"}}><li>and sharing photos on <span style={{fontWeight: "bold", textDecoration: "underline"}}>Instagram</span>.</li></Link>
            </ul>
            <p style={{textAlign: "center"}}>blakefletcher.ca v.3.0.0</p>
        </div>
    )
}

export default Footer