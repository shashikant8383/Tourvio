import React, { useState } from "react";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";


function Navbar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };
    return (
        <nav className="NavbarItems">
            <Link to="/"><h1 className="navbar-logo">Tourvio</h1></Link>
            <div className="menu-icons" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.url} className={item.cName}>
                            <i className={item.icon}></i>
                            {item.title}
                        </Link>
                    </li>
                ))}
                <Link to="/signup">
                <button>Sign Up</button>
                </Link>
            </ul>
        </nav>
    );
}
export default Navbar;
