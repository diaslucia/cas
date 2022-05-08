import React from "react";
import "./navBar.scss";

/* Img */
import logo from "../../assets/Logo nav.svg";

/* React Router */
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav>
            <div className="nav_divLogo">
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
            </div>
            <div className="nav_divLinks">
                <Link to="/" className="nav_link">Inicio</Link>
                <Link to="coberturas" className="nav_link">Coberturas</Link>
                <Link to="contacto" className="nav_link">Contacto</Link>
            </div>
            
        </nav>
    );
}

export default NavBar;