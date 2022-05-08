import React from "react";
import "./inversiones.scss";

/* Img */
 import gana from "../../../../assets/Gana.svg";
 import ahorra from "../../../../assets/Ahorra.svg";
 import inverti from "../../../../assets/Inverti.svg";
 import impuestos from "../../../../assets/Impuestos.svg";

 /* Components */
 import Button from "../../../../shared/button/button";

const Inversiones = () => {
    return(
        <div className="inversiones">
            <h1 className="inversiones_title">¿Sabías que con el seguro de retiro podés...</h1>
            <div className="inversiones_div">
                <div className="inversiones_cards">

                    <div className="inversiones_cards_dos">
                        <div className="inversiones_card">
                            <div className="inversiones_img_container">
                                <img src={gana} alt="icon"/>
                            </div>
                            <div className="inversiones_text_container">
                                <h2>Ganá siempre</h2>
                                <p>Es un instrumento de ahorro garantizado. Nunca perderás dinero. Tus ahorros crecerán por el rendimiento de las inversiones.</p>
                            </div>
                        </div>
                        <div className="inversiones_card">
                            <div className="inversiones_img_container">
                                <img src={ahorra} alt="icon"/>
                            </div>
                            <div className="inversiones_text_container">
                                <h2>Ahorrá tranquilo</h2>
                                <p>Tus ahorros siempre estarán vigilados por la Superintendencia de Seguros de la Nación. Transparencia total. Cero Fraude.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="inversiones_cards_dos">
                        <div className="inversiones_card">
                            <div className="inversiones_img_container">
                                <img src={inverti} alt="icon"/>
                            </div>
                            <div className="inversiones_text_container">
                                <h2>Invertí lo que puedas</h2>
                                <p>Vos decidís de cuánto será tu ahorro mensual de acuerdo a tus posibilidades. Máxima flexibilidad. Inversión mínima por mes $ 2.000 o U$S 50.</p>
                            </div>
                        </div>
                        <div className="inversiones_card">
                            <div className="inversiones_img_container">
                                <img src={impuestos} alt="icon"/>
                            </div>
                            <div className="inversiones_text_container">
                                <h2>Menos impuestos</h2>
                                <p>Tus inversiones mensuales se deducen de la base imponible de impuesto a las ganancias y no están alcanzados por bienes personales.</p>
                            </div>
                        </div>
                    </div>
                    

                </div>

                <div className="inversiones_button">
                    <Button title="Pedí cotización" style={{ padding: "20px 50px"}}/>
                </div>
            </div>
        </div>
    );
}

export default Inversiones;