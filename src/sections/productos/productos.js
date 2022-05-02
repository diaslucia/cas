import React from "react";
import "./productos.scss";

/* Components */
import CardProductos from "./components/cardProductos";

/* Img */
import cardProducto from "../../assets/cardProducto.jpg";

const Productos = () => {
    return(
        <div className="productos">
            <h1>Productos</h1>
            <CardProductos
            img={cardProducto}
            type="Familia"
            title="Protegé tus bienes y a los tuyos"
            info1="• Combinado Familiar"
            info2="• Embarcaciones de placer"
            info3="• Automóvil"
            info4="• Responsabilidad Civil"
            />
            <CardProductos
            img={cardProducto}
            type="Empresa"
            title="El respaldo que tu negocio necesita"
            info1="• Riesfo del trabajo/vida"
            info2="• Flota de vehículos"
            info3="• Todo riesgo operativo"
            info4="• Y mucho más..."
            styleContainer={{ flexDirection: "row-reverse" }}
            styleTitles={{ alignItems: "flex-start" }}
            styleTitle={{ textAlign: "start" }}
            styleInfo={{ alignItems: "flex-start" }}
            styleImg={{ justifyContent: "flex-end" }}
            />
            <CardProductos
            img={cardProducto}
            type="Ahorro"
            title="Asegurá un futuro disfrutable y tranquilo"
            info1="• Seguro de retiro"
            info2="• Jubilaciones privadas"
            info3="• Vida con capitalización"
            />
            <CardProductos
            img={cardProducto}
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

export default Productos;