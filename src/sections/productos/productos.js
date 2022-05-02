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
            <CardProductos img={cardProducto} type="Familia" title="Protegé tus bienes y a los tuyos" info="asdasdasd"/>
        </div>
    );
}

export default Productos;