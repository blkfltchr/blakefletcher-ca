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
        if (this.state.menuClassName === "nav-links nav-links-none") {
            this.setState({
                menuClassName: "nav-links"
            })
        } else {
            this.setState({
                menuClassName: "nav-links nav-links-none"
            })
        }
    }

    render() {
        return (
            <div>
                <Link to="/"><img src={logo} alt="BlakeFletcher.ca logo" className="bf-logo"/></Link>
                <div className={this.state.menuClassName}>
                    <div><Link className="nav-link" to="/"><span role="img" aria-label="house">🏠</span> Home</Link></div>
                    <div><Link className="nav-link" to="/projects"><span role="img" aria-label="laptop">💻</span> Projects</Link></div>
                    <div><Link className="nav-link" to="/experience"><span role="img" aria-label="backpack">🎒</span> Experience</Link></div>
                    <div><Link className="nav-link" to="/writing"><span role="img" aria-label="notebook">📓</span> Writing</Link></div>
                    <div><Link className="nav-link" to="/books"><span role="img" aria-label="books">📚</span> Books</Link></div>
                    <div><a className="nav-link" href="/contact"><span role="img" aria-label="envelope">✉️</span> Contact</a></div>
                </div>
                <div><button className="burger" onClick={this.handleToggleMenu}>
                    <div className="burger-div"></div>
                    <div className="burger-div"></div>
                    <div className="burger-div"></div>
                </button></div>
            </div>
        )
    }
}

export default Header