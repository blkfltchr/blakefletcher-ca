import React from "react";
import {Link} from 'gatsby'

const Error = () => {
    return ( 
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1 style={{fontFamily: "Monaco,Consolas,'Andale  Mono','DejaVu Sans Mono',monospace", fontSize: "168px", margin: "0px", color: "#a9a9a9", textTransform: "uppercase"}}>404</h1>
            <h2 style={{fontFamily: "Raleway, sans-serif", fontSize: "22px", fontWeight: "400", textTransform: "uppercase", color: "#222", margin: "0"}}>OOPS, THE PAGE YOU ARE LOOKING FOR CAN'T BE FOUND!</h2>
            <br />
            <Link to="/books" style={{fontFamily: "Raleway, sans-serif", fontSize: "22px", fontWeight: "700", color: "blue", margin: "0", textDecoration: "none"}}><div>Books <span role="img" aria-label="books">📚</span></div></Link>
            <br />
            <Link to="/" style={{color: "#a9a9a9", fontFamily: "Raleway, sans-serif", display: "inline-block", fontWeight: "700", borderRadius: "15px", textDecoration: "none"}}>← Return To Homepage</Link>
        </div>
     );
}
 
export default Error;
