import React from "react";
import '../css/styles.css'
import {Link} from 'gatsby'

const Error = () => {
    return ( 
        <div className="success-error">
            <h1>SUCCESS</h1>
            <h2>Thanks for reaching out, I'll get back to you ASAP!</h2>
            <br />
            <Link to="/books"><div>Books <span role="img" aria-label="books">📚</span></div></Link>
            <br />
            <Link to="/" className="homepage-link">← Return To Homepage</Link>
        </div>
     );
}
 
export default Error;
