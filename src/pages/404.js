import React from "react";
import '../css/styles.css'
import {Link} from 'gatsby'

const Error = () => {
    return ( 
        <div className="success-error">
            <h1>404</h1>
            <p>OOPS, THE PAGE YOU ARE LOOKING FOR CAN'T BE FOUND!</p>
            <br />
            <Link to="/books"><div>Books <span role="img" aria-label="books">📚</span></div></Link>
            <br />
            <Link to="/" className="homepage-link">← Return To Homepage</Link>
        </div>
     );
}
 
export default Error;
