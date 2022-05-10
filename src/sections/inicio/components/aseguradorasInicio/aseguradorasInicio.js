import React from "react";
import "./aseguradorasInicio.scss";

/* Components */
import SwiperAseguradoras from "./components/swiper/swiper";
import Button from "../../../../shared/button/button";

const AseguradorasInicio = () => {
    return(
        <div className="aseguradorasInicio">
            <h1 className="aseguradorasInicio_title">Trabajamos en conjunto con</h1>
            <div className="aseguradorasInicio_swiper">
                <SwiperAseguradoras/>
            </div>
            <div className="aseguradorasInicio_button">
                <Button title="Ver más" style={{ width: "456px", height: "80px", fontSize: "20px"}} path="contacto"/>
            </div>
        </div>
    );
}

export default AseguradorasInicio;
