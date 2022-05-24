import React from "react";
import "./retiro.scss";

/* Img */
import plazoFijo from "../../../../assets/Plazo fijo.svg";
import dolar from "../../../../assets/Dolar.svg";
import ladrillo from "../../../../assets/Ladrillo.svg"

/* Components */
import Button from "../../../../shared/button/button";

const Retiro = () => {
    return(
        <div className="retiro">
            <h1 className="retiro_title">Retiro vs</h1>
            <div className="retiro_div">
                <div className="retiro_card">
                    <img src={plazoFijo} alt=""/>
                    <h2>Plazo Fijo</h2>
                    <p>El seguro de retiro siempre te da un mayor rendimiento y ademas puedes ahorrar un importe a tu medida todos los meses. Como si tuvieras una alcancía donde vas colocando tus ahorros con la diferencia que estos además se multiplican.</p>
                </div>
                <div className="retiro_card">
                    <img src={dolar} alt=""/>
                    <h2>Dólar Oficial</h2>
                    <p>Es una póliza de retiro en dólares pero que se suscribe y rescata en pesos. Esta alternativa te permite darle cobertura a tu capital respecto a la devaluación del tipo de cambio y además accedes a un rendimiento en U$S superior a otros instrumentos de ahorro.</p>
                </div>
                <div className="retiro_card">
                    <img src={ladrillo} alt=""/>
                    <h2>Ladrillo</h2>
                    <p>Construir para obtener una rentabilidad requiere un ingreso muy importante y no siempre tenemos esa cantidad de dinero para realizar estos emprendimientos. El seguro de retiro se ajusta a tu capacidad individual de ahorro. </p>
                </div>
            </div>
            <div>
                <Button title="Pedí Cotización" style={{ marginTop: "40px" }} path="contacto"/>
            </div>

        </div>
    );
}

export default Retiro;