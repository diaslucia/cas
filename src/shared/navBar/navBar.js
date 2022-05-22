import React, { useState } from "react";
import "./navBar.scss";

/* Img */
import logo from "../../assets/Logo nav.svg";

/* React Router */
import { Link } from "react-router-dom";

/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNav = () => {
        setIsOpen(!isOpen);
    }

    return(
        <nav>
            <div className="nav_divLogo">
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
            </div>
            <div className={isOpen ? "nav_divLinks_active" : "nav_divLinks"}>
                <Link to="/cas" className="nav_link" onClick={() => setIsOpen(false)}>Inicio</Link>
                <Link to="/coberturas" className="nav_link" onClick={() => setIsOpen(false)}>Coberturas</Link>
                <Link to="/contacto" className="nav_link" onClick={() => setIsOpen(false)}>Contacto</Link>
                
            </div>
            <div className="nav_iconHamb">
                <FontAwesomeIcon className="iconHamb" icon={faBars} onClick={handleNav}/>
            </div>
            
        </nav>
    );
}

export default NavBar;