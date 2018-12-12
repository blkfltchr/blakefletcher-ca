import React from 'react'
import {Link} from 'gatsby'
import '../css/header-styles.css'
import logo from '../images/bf-logo.jpg'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuClassName: "nav-links nav-links-none",
        }
    }

    handleToggleMenu = () => {
        if (this.state.menuClassName = "nav-links nav-links-none") {
            this.setState({
                menuClassName: "nav-links"
            })
        } if (this.state.menuClassName != "nav-links nav-links-none") {
            this.setState({
                menuClassName: "nav-links nav-links-none"
            })
        }
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Link to="/"><img src={logo} alt="BlakeFletcher.ca logo" className="bf-logo"/></Link>
                <div className={this.state.menuClassName}>
                    <div><Link className="nav-link" to="/"><span role="img" aria-label="house">🏠</span> Home</Link></div>
                    <div><Link className="nav-link" to="/projects"><span role="img" aria-label="laptop">💻</span> Projects</Link></div>
                    <div><Link className="nav-link" to="/experience"><span role="img" aria-label="backpack">🎒</span> Experience</Link></div>
                    <div><a className="nav-link" href="mailto:blkfltchr@gmail.com"><span role="img" aria-label="envelope">✉️</span> Contact</a></div>
                </div>
                <div><a href="javascript:;" style={{backgroundColor: "white", border: "none", textDecoration: "none"}} className="burger" onClick={this.handleToggleMenu}>
                    &#9776;
                </a></div>
            </div>
        )
    }
}

export default Header