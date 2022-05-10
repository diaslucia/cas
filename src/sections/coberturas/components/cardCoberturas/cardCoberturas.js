import React from "react";
import "./cardCoberturas.scss";

/* React Router */
import { Link } from 'react-router-dom'

const CardCoberturas = ({ img, type, title, info1, info2, info3, info4, styleContainer, styleTitles, styleInfo, styleTitle, styleImg }) => {
    return(
        <div className="cardProductos" style={styleContainer}>
            <div className="card_imgContainer" style={styleImg}>
                <img src={img} alt=""/>
            </div>
            <div className="card_infoContainer">
                <div className="card_titles" style={styleTitles}>
                    <h1>{type}</h1>
                    <h2 style={styleTitle}>{title}</h2>
                </div>
                <div className="card_info" style={styleInfo}>
                    <p>{info1}</p>
                    <p>{info2}</p>
                    <p>{info3}</p>
                    <p>{info4}</p>
                    <Link to="/contacto" className="coberturas_button">Pedí más info</Link>
                </div>
            </div>
        </div>
    );
}

export default CardCoberturas;