import React from "react";
import "./inversiones.scss";

/* Img */
 import gana from "../../../../assets/Gana.svg";
 import ahorra from "../../../../assets/Ahorra.svg";
 import inverti from "../../../../assets/Inverti.svg";
 import impuestos from "../../../../assets/Impuestos.svg";

 /* Components */
 import Button from "../../../../shared/button/button";
 import CardInversiones from "./components/CardInversiones/cardInversiones";

const Inversiones = () => {
    return(
        <div className="inversiones">
            <h1 className="inversiones_title">¿Sabías que con el seguro de retiro podés...</h1>
            <div className="inversiones_div">

                <div className="inversiones_cards">
                    <div className="inversiones_cards_dos">
                        <CardInversiones img={gana} title={"Ganá siempre"}
                        description={"Es un instrumento de ahorro garantizado. Nunca perderás dinero. Tus ahorros crecerán por el rendimiento de las inversiones."}/>
                        <CardInversiones img={ahorra} title={"Ahorrá tranquilo"}
                        description={"Tus ahorros siempre estarán vigilados por la Superintendencia de Seguros de la Nación. Transparencia total. Cero Fraude."}/>
                    </div>
                    <div className="inversiones_cards_dos">
                        <CardInversiones img={inverti} title={"Invertí lo que puedas"}
                        description={"Vos decidís de cuánto será tu ahorro mensual de acuerdo a tus posibilidades. Máxima flexibilidad. Inversión mínima por mes $ 2.000 o U$S 50."}/>
                         <CardInversiones img={impuestos} title={"Menos impuestos"}
                        description={"Tus inversiones mensuales se deducen de la base imponible de impuesto a las ganancias y no están alcanzados por bienes personales."}/>
                    </div>
                </div>

                <div>
                    <Button title="Pedí cotización" style={{ width: "427px", height: "103px"}} path="contacto"/>
                </div>
                
            </div>
        </div>
    );
}

export default Inversiones;