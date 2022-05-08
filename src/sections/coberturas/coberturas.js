import React from "react";
import "./coberturas.scss";

/* Components */
import CardCoberturas from "./components/cardCoberturas/cardCoberturas";

/* Img */
import familia from "../../assets/Familia.png";
import empresa from "../../assets/Empresa.png";
import ahorro from "../../assets/Ahorro.png";
import campo from "../../assets/Campo.png";

const Coberturas = () => {
    return(
        <div className="productos">
            <h1>Coberturas</h1>
            <CardCoberturas
            img={familia}
            type="Familia"
            title="Protegé a tus seres queridos sin olvidarte de tus bienes"
            info1="• Combinado Familiar"
            info2="• Embarcaciones de placer"
            info3="• Automóvil"
            info4="• Responsabilidad Civil"
            />
            <CardCoberturas
            img={empresa}
            type="Empresa"
            title="El respaldo que tu negocio necesita"
            info1="• Riesgo del trabajo/vida"
            info2="• Flota de vehículos"
            info3="• Todo riesgo operativo"
            info4="• Y mucho más..."
            styleContainer={{ flexDirection: "row-reverse" }}
            styleTitles={{ alignItems: "flex-start" }}
            styleTitle={{ textAlign: "start" }}
            styleInfo={{ alignItems: "flex-start" }}
            styleImg={{ justifyContent: "flex-end" }}
            />
            <CardCoberturas
            img={ahorro}
            type="Ahorro"
            title="Asegurá un futuro para disfrutar y estar tranquilo"
            info1="• Seguro de retiro"
            info2="• Jubilaciones privadas"
            info3="• Vida con capitalización"
            />
            <CardCoberturas
            img={campo}
            type="Campo"
            title="Presencia y covertura para tu cultivo"
            info1="• Cultivo"
            info2="• Maquinaria"
            info3="• Silo bolsa"
            styleContainer={{ flexDirection: "row-reverse" }}
            styleTitles={{ alignItems: "flex-start" }}
            styleTitle={{ textAlign: "start" }}
            styleInfo={{ alignItems: "flex-start" }}
            styleImg={{ justifyContent: "flex-end" }}
            />
        </div>
    );
}

export default Coberturas;