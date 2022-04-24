import React from "react";
import "./styles.scss";
import logo from "../assets/logo.jpg";
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
                <Link to="seguros" className="nav_link">Seguros</Link>
                <Link to="aseguradoras" className="nav_link">Aseguradoras</Link>
                <Link to="nosotros" className="nav_link">Nosotros</Link>
                <Link to="contacto" className="nav_link">Contacto</Link>
            </div>
            
        </nav>
    );
}

export default NavBar;