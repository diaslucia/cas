import React from "react";
import "./button.scss";

/* React Router */
import { Link } from 'react-router-dom'

const Button = ({ title, style, path}) => {
    return(
        <Link className="linkButton" to={`/${path}`} style={style}>{title}</Link>
    );
}

export default Button;