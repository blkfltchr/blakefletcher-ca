import React from 'react'
import {Link} from 'gatsby'
import '../css/component-styles.css'
import logo from '../images/bf-logo.jpg'

const Header = () => {
    return (
        <div>
            <Link to="/"><img src={logo} alt="BlakeFletcher.ca logo" className="bf-logo"/></Link>
            <div className="nav-links">
                <Link className="nav-link" to="/"><span role="img" aria-label="house">🏠</span> Home</Link>
                <Link className="nav-link" to="/projects"><span role="img" aria-label="laptop">💻</span> Projects</Link>
                <a className="nav-link"  href="mailto:blkfltchr@gmail.com"><span role="img" aria-label="envelope">✉️</span> Contact</a>
            </div>
        </div>
    )
}

export default Header