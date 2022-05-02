import React from "react";
import "./navBar.scss";
import logo from "../../assets/logo.svg";
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
                <Link to="productos" className="nav_link">Productos</Link>
                <Link to="contacto" className="nav_link">Contacto</Link>
            </div>
            
        </nav>
    );
}

export default NavBar;