import React from 'react'
import {Link} from 'gatsby'
import logo from '../images/bf-logo.png'


const Header = () => {

    return (
        <div>
            <img src={logo} alt="BlakeFletcher.ca logo" style={{height: "4rem", position: "absolute", top: "12px", left: "12px"}}/>
            <div style={{width: "40vw", position: "absolute", top: "12px", right: "12px", height: "3rem", fontFamily: "Lato,Helvetica,Arial,Lucida,sans-serif", fontSize: "1.2rem", display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                <Link to="/"><span role="img" aria-label="house">🏠</span> Home</Link>
                <Link to="/projects"><span role="img" aria-label="laptop">💻</span> Projects</Link>
                <a href="mailto:blkfltchr@gmail.com"><span role="img" aria-label="telephone">☎️</span> Contact</a>
            </div>
        </div>
    )
}

export default Header