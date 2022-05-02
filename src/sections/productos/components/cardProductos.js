import React from "react";
import "./cardProductos.scss";

const CardProductos = ({ img, type, title, info }) => {
    return(
        <div className="cardProductos">
            <div className="card_imgContainer">
                <img src={img} alt=""/>
            </div>
            <div className="card_infoContainer">
                <div className="card_titles">
                    <h1>{type}</h1>
                    <h2>{title}</h2>
                </div>
                <div className="card_info">
                    <p>{info}</p>
                    <button>Conocé más</button>
                </div>
            </div>
        </div>
    );
}

export default CardProductos;