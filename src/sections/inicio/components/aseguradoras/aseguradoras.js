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
                <Button title="Ver más" style={{ padding: "20px 80px"}} />
            </div>
        </div>
    );
}

export default Aseguradoras;
