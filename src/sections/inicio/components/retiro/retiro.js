import React from "react";
import "./retiro.scss";

/* Img */
import plazoFijo from "../../../../assets/Plazo fijo.svg";
import dolar from "../../../../assets/dolar.svg";
import ladrillo from "../../../../assets/ladrillo.svg"

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
                    <p>El aporte mínimo para un seguro de retiro en dólares es de U$S 60. Se descuentan de tu CBU de cuenta en pesos que informes con la gran diferencia que estos son adquiridos sin pagar el impuesto del 30% al dólar que cobran los bancos.</p>
                </div>
                <div className="retiro_card">
                    <img src={ladrillo} alt=""/>
                    <h2>Ladrillo</h2>
                    <p>Construir para obtener una rentabilidad requiere un ingreso muy importante y no siempre tenemos esa cantidad de dinero para realizar estos emprendimientos. El seguro de retiro se ajusta a tu capacidad individual de ahorro. </p>
                </div>
            </div>
            <div>
                <Button title="Pedí Cotización" style={{ width: "300px", height: "80px", marginTop: "40px"}} path="contacto"/>
            </div>

        </div>
    );
}

export default Retiro;