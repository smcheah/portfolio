import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./style.css";

function Footer () {
    return <footer>
        <Router>
            <Link to="https://github.com/smcheah">Simone Cheah </Link>
            &copy; 2021
        </Router>
    </footer>;
};

export default Footer;