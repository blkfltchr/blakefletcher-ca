import React from 'react'
import {Link} from 'gatsby'
import '../css/component-styles.css'
import logo from '../images/bf-logo.jpg'

const Header = () => {
    return (
        <div>
            <Link to="/"><img src={logo} alt="BlakeFletcher.ca logo" className="bf-logo"/></Link>
            <div className="nav-links">
                <div><Link className="nav-link" to="/"><span role="img" aria-label="house">🏠</span> Home</Link></div>
                <div><Link className="nav-link" to="/projects"><span role="img" aria-label="laptop">💻</span> Projects</Link></div>
                <div><Link className="nav-link" to="/experience"><span role="img" aria-label="backpack">🎒</span> Experience</Link></div>
                <div><a className="nav-link" href="mailto:blkfltchr@gmail.com"><span role="img" aria-label="envelope">✉️</span> Contact</a></div>
                <div><a href="javascript:void(0);" className="burger" onclick="myFunction()">
                &#9776;
                </a></div>
            </div>
        </div>
    )
}

export default Header