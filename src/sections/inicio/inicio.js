import React from "react";
import "./inicio.scss";

/* Components */
import Banner from "./components/banner/banner";
import Inversiones from "./components/inversiones/inversiones";
import Retiro from "./components/retiro/retiro";
import Preguntas from "./components/preguntas/preguntas";
import AseguradorasInicio from "./components/aseguradorasInicio/aseguradorasInicio";

/* Img */
import background from "../../assets/wallpaper.png";

const Inicio = () => {
    return(
        <div className="inicio" style={{ backgroundImage: `url(${background})` }}>
            <Banner/>
            <Inversiones/>
            <Retiro/>
            <Preguntas/>
            <AseguradorasInicio/>
        </div>
    );
}

export default Inicio;