import React from "react";
import Pregunta from "./pregunta/Pregunta";
import "./preguntas.scss";

const Preguntas = () => {
    return(
        <div className="preguntas">
            <h1 className="preguntas_title">Preguntas Frecuentes</h1>
            <Pregunta numero={1} pregunta="Esto es una pregunta?" contenido="Lorem lorem lorem lorem"/>
        </div>
    );
}

export default Preguntas;