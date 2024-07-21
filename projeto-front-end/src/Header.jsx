import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return ( 

        <header>
            <nav>
                <link to="/">Home</link> | <link to="/about">About</link> | <link to="/contact">Contact</link>
            </nav>
        </header>
     );
}
 
export default Header;