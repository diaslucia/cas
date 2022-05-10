import React from "react";
import "./aseguradoras.scss";

/* Components */
import SwiperAseguradoras from "./components/swiper/swiper";
import Button from "../../../../shared/button/button";

const Aseguradoras = () => {
    return(
        <div className="aseguradoras">
            <h1 className="aseguradoras_title">Trabajamos en conjunto con</h1>
            <div className="aseguradoras_swiper">
                <SwiperAseguradoras/>
            </div>
            <div className="aseguradoras_button">
                <Button title="Ver más" style={{ width: "456px", height: "80px", fontSize: "20px"}} path="contacto"/>
            </div>
        </div>
    );
}

export default Aseguradoras;
