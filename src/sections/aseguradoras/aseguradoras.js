import React, { useState } from "react";
import "./aseguradoras.scss";

/* Components */
import CardOptions from "./components/cardOptions/cardOptions";

/* Img */
import FedPat from "../../assets/Aseguradoras historia/FedPat.svg"

const Aseguradoras = () => {
    const [options, setOptions] = useState("")

    const handleOnClick = (value) => {
        setOptions(value)
    }

    return(
        <div className="aseguradoras">
            <div className="aseguradoras_buttons">
                <button onClick={() => handleOnClick("FedPat")} className="aseg_button">Federación Patronal</button>
                <button className="aseg_button">La Holando</button>
                <button className="aseg_button">Orígenes</button>
                <button className="aseg_button">San Cristóbal</button>
                <button className="aseg_button">SMG Life</button>
                <button className="aseg_button">Zurich</button>
            </div>

            <div className="aseguradoras_cards">
                <CardOptions
                title="Federación Patronal"
                img={FedPat}
                description="En el año 1923 abría sus puertas FEDERACIÓN PATRONAL C.S.L. iniciando sus actividades con un objetivo concreto: brindar cobertura al personal obrero de las empresas que administraban sus fundadores.
                Así, un grupo de industriales y empresarios de la ciudad de La Plata, en una conjunción de voluntades, conformaron una organización económico-social en procura de un equilibrio armónico en el costo del seguro.
                Con el transcurso de los años, la institución se consolidó en la prestación de esta cobertura, y decide incursionar en los ramos Automotores, Incendio y Accidentes Personales, hasta brindar, con el tiempo, todas las posibilidades de cobertura, como la de Riesgos del Trabajo (Ley 24557) e incluso Vida en todas sus alternativas. A partir del año 2000, el vertiginoso proceso de apertura e invasión de los mercados, obligó al cambio de naturaleza jurídica."/>
                </div>
        </div>
    );
}

export default Aseguradoras;