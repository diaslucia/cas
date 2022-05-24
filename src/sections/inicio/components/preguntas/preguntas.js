import React from "react";
import Pregunta from "./pregunta/Pregunta";
import "./preguntas.scss";

const Preguntas = () => {
    return(
        <div className="preguntas">
            <h1 className="preguntas_title">Preguntas Frecuentes</h1>
            <div className="preguntas_div">
                <Pregunta numero="1" pregunta="¿Qué estoy contratando?" contenido="Una alternativa de ahorro eficaz y distinta a los medios tradicionales."/>
                <Pregunta numero="2" pregunta="¿Qué es un seguro de retiro?" contenido="Es una solución práctica de ahorro que puede contratarse en pesos o en dólares y que se adapta a la capacidad de cada uno. De esta forma se genera un fondo que posibilita obtener rendimientos financieros sin tener que ocuparse de cómo generarlos."/>
                <Pregunta numero="3" pregunta="¿Cómo funciona el seguro de retiro? ?" contenido="Se realizan aportes periódicos, los que son acreditados en su cuenta individual generando un rendimiento de acuerdo a las inversiones que realiza la Compañía. Llegada la edad seleccionada se podrá optar por una renta mensual o retirar el total de sus fondos acumulados."/>
                <Pregunta numero="4" pregunta="¿Puedo perder mi dinero ahorrado?" contenido="De ninguna manera, ya que esta póliza cuenta con: alta rentabilidad, fondos inembargables, capital garantizado, rendimiento mínimo garantizada por ley y ventajas fiscales."/>
                <Pregunta numero="5" pregunta="¿Quiénes pueden contratarlo?" contenido="Cualquier persona física mayor a los 18 años."/>
                <Pregunta numero="6" pregunta="¿Por qué pagaría menos impuestos?" contenido="Los fondos acumulados se encuentran exentos del impuesto a los bienes personales. Los montos depositados se deducen de la base imponible para el calculo del impuesto a las ganancias, de acuerdo a los  topes establecidos por ley."/>
                <Pregunta numero="7" pregunta="¿Qué sucede si algún período no puedo aportar?" contenido="Tu fondo acumulado se seguira capitalizando, pero el fondo proyectado a la edad de retiro será menor al previsto."/>
                <Pregunta numero="8" pregunta="¿Cuándo puedo rescatar mi dinero?" contenido="Existe la posibilidad de realizar rescates parciales y/o totales en cualquier momento."/>
                <Pregunta numero="9" pregunta="¿Estos rescates tienen alguna quita?" contenido="Si, de acuerdo a la vigencia de la póliza. Cuanta mayor vigencia , menores serán las quitas por rescate."/>
                <Pregunta numero="10" pregunta="¿Puedo hacer un rescate parcial?" contenido="Si. Puedes rescatar parte del fondo acumulado cuando tu quieras."/>
                <Pregunta numero="11" pregunta="¿Qué sucede si me retiro después de los 10 años?" contenido="Nada. Retiras los fondos acumulados sin quita alguna."/>
                <Pregunta numero="12" pregunta="¿Qué pasaría si muero antes de retirar el dinero acumulado?" contenido="Se le pagarán los fondos acumulados a los beneficiarios designados en poliza. Los beneficiarios pueden ser modificados en cualquier momento e ilimitadas veces."/>
                <Pregunta numero="13" pregunta="¿Cómo recibo la póliza y veo mi saldo acumulado?" contenido="Dentro de los 7 dias de cargada tu solicitud recibirás tu póliza por correo electrónico junto con las instrucciones para consultar tus fondos en momento que desees via web."/>
                <Pregunta numero="14" pregunta="¿Puedo realizar aportes extraordinarios?" contenido="Si, pueden efectuarse aportes extraordinarios en cualquier momento, pensando en incrementar los beneficios futuros."/>
            </div>
        </div>
    );
}

export default Preguntas;