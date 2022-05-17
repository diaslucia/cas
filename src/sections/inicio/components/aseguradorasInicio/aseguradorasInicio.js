import React from "react";
import "./aseguradorasInicio.scss";

/* Components */
import SwiperAseguradoras from "./components/swiper/swiper";

const AseguradorasInicio = () => {
    return(
        <div className="aseguradorasInicio">
            <h1 className="aseguradorasInicio_title">Trabajamos en conjunto con</h1>
            <div className="aseguradorasInicio_swiper">
                <SwiperAseguradoras/>
            </div>
        </div>
    );
}

export default AseguradorasInicio;
