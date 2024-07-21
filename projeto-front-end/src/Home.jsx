import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <link to="/about">About</link>
                <link to="/contact">Contact</link>
            </nav>
        </div>
    );
};

export default Home;