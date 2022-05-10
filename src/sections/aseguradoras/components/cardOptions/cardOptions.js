import React from "react";
import "./cardOptions.scss";

/* Components */
import Button from "../../../../shared/button/button";

const CardOptions = ({title, img, description}) => {
    return(
        <div className="cardOptions">
            <h2 className="aseguradoras_title">CAS te acerca todas las opciones</h2>
            <h1>{title}</h1>
            <img src={img} alt="logo"/>
            <p>{description}</p>
            <Button title="Pedí Cotización" style={{ width: "300px", height: "60px", marginTop: "40px"}} path="contacto"/>
        </div>
    );
}

export default CardOptions;