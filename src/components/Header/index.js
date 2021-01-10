import React, { useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./style.css";

function Header () {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);

    const transformMenu = {
        transform: open ? 'translateY(0)' : 'translateY(-100%)'
    };

    return <header>
        <button className="material-icons hamburger" onClick={ toggleOpen }>menu</button>

        <nav style={ transformMenu }>
            <Router>
                <Link to="/">HOME</Link>
                <Link to="/showcase">Showcase</Link>
            </Router>
        </nav>

        <div className="simone">
            <h1>SIMONE CHEAH</h1>
        </div>
    </header>;
};

export default Header;