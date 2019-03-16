import React from "react";
import '../css/styles.css'
import {Link} from 'gatsby'

const Error = () => {
    return ( 
        <div className="error-styles">
            <h1>404</h1>
            <h2>OOPS, THE PAGE YOU ARE LOOKING FOR CAN'T BE FOUND!</h2>
            <br />
            <Link to="/books" className="first-error-link"><div>Books <span role="img" aria-label="books">📚</span></div></Link>
            <br />
            <Link to="/" className="second-error-link">← Return To Homepage</Link>
        </div>
     );
}
 
export default Error;
