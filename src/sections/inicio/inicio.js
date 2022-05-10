import React from "react";
import "./inicio.scss";

/* Components */
import Banner from "./components/banner/banner";
import Inversiones from "./components/inversiones/inversiones";
import Retiro from "./components/retiro/retiro";
import Preguntas from "./components/preguntas/preguntas";
import Aseguradoras from "./components/aseguradoras/aseguradoras";

/* Img */
import background from "../../assets/wallpaper.png";

const Inicio = () => {
    return(
        <div className="inicio" style={{ backgroundImage: `url(${background})` }}>
            <Banner/>
            <Inversiones/>
            <Retiro/>
            <Preguntas/>
            <Aseguradoras/>
        </div>
    );
}

export default Inicio;