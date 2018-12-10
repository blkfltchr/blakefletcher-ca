import React from 'react';
import '../css/component-styles.css'
import goodreads from '../images/goodreads-logo.png'
import medium from '../images/medium-logo.png'
import twitter from '../images/twitter-logo.png'
import messenger from '../images/messenger-logo.png'
import linkedin from '../images/linkedin-logo.png'
import github from '../images/github-logo.png'
import instagram from '../images/instagram-logo.png'

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <p>You can find me elsewhere:</p>
            <div>
                <ul>
                    <a href="https://www.goodreads.com/user/show/46248158-blake-fletcher" target="_blank" rel="noopener noreferrer"><li>keeping track of what I’ve read on <span>goodreads</span>;</li></a>
                    <a href="http://github.com/blkfltchr" target="_blank" rel="noopener noreferrer"><li>pushing and pulling on <span>GitHub</span>;</li></a>
                    <a href="https://medium.com/@blakefletcher" target="_blank" rel="noopener noreferrer"><li>writing stories on <span>Medium</span> on rare occasion;</li></a>
                </ul>
                <ul>
                    <a href="https://www.linkedin.com/in/blakemfletcher/" target="_blank" rel="noopener noreferrer"><li>adding to the collective rolodex that is <span>LinkedIn</span>;</li></a>
                    <a href="https://m.me/blkfltchr" target="_blank" rel="noopener noreferrer"><li>avoiding the <span>Facebook</span> newsfeed;</li></a>
                    <a href="https://twitter.com/blkfltchr" target="_blank" rel="noopener noreferrer"><li>trying to start conversations but mostly listening on <span>Twitter</span>;</li></a>
                    <a href="https://www.instagram.com/blkfltchr/" target="_blank" rel="noopener noreferrer"><li>and sharing photos on <span>Instagram</span>.</li></a>
                </ul>
            </div>
            <p>blakefletcher.ca v.3.0.0</p>
            <div>
                <a href="https://www.goodreads.com/user/show/46248158-blake-fletcher" target="_blank" rel="noopener noreferrer"><img src={goodreads} alt="goodreads logo"/></a>
                <a href="http://github.com/blkfltchr" target="_blank" rel="noopener noreferrer"><img src={github} alt="github logo"/></a>
                <a href="https://medium.com/@blakefletcher" target="_blank" rel="noopener noreferrer"><img src={medium} alt="medium logo"/></a>
                <a href="https://www.linkedin.com/in/blakemfletcher/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="messenger logo"/></a>
                <a href="https://m.me/blkfltchr" target="_blank" rel="noopener noreferrer"><img src={messenger} alt="messenger logo"/></a>
                <a href="https://twitter.com/blkfltchr" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter logo"/></a>
                <a href="https://www.instagram.com/blkfltchr/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram logo"/></a>
            </div>
        </div>
    )
}

export default Footer