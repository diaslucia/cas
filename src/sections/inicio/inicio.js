import React from "react";

/* Components */
import Banner from "./components/banner/banner";
import Inversiones from "./components/inversiones/inversiones";
import Retiro from "./components/retiro/retiro";
import Preguntas from "./components/preguntas/preguntas";
import Aseguradoras from "./components/aseguradoras/aseguradoras";

const Inicio = () => {
    return(
        <div>
            <Banner/>
            <Inversiones/>
            <Retiro/>
            <Preguntas/>
            <Aseguradoras/>
        </div>
    );
}

export default Inicio;