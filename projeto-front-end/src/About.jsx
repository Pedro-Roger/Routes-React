import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return ( 
        <div>
            <h1>About Page</h1>
            <nav>
                <link to="/">Home</link> | <link to="/contact">Contact</link>
            </nav>
        </div>
     );
     
}
 
export default About;