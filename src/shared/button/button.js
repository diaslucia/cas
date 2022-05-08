import React from "react";
import "./button.scss";

const Button = ({ title, style}) => {
    return(
        <button style={style}>{title}</button>
    );
}

export default Button;