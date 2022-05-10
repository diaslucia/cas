import React from "react";
import "./cardInversiones.scss";

const CardInversiones = ({img, title, description}) => {
    return (
        <div className="inversiones_card">
            <div className="inversiones_img_container">
                <img src={img} alt="icon"/>
            </div>
            <div className="inversiones_text_container">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default CardInversiones;