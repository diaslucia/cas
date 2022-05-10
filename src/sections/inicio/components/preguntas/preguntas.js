import React from "react";
import Pregunta from "./pregunta/Pregunta";
import "./preguntas.scss";

const Preguntas = () => {
    return(
        <div className="preguntas">
            <h1 className="preguntas_title">Preguntas Frecuentes</h1>
            <div className="preguntas_div">
                <Pregunta numero="1" pregunta="¿Qué estoy contratando?" contenido="Un seguro de retiro de San Cristóbal Retiro."/>
                <Pregunta numero="2" pregunta="¿Qué es un seguro de retiro?" contenido="Es un seguro mediante el cual te comprometes a aportar por un período mayor a 10 años y hasta los 90 años de edad, una suma de dinero determinada para recibir luego de ese periodo estipulado a la edad jubilatoria, el dinero aportado más todos los intereses ganados."/>
                <Pregunta numero="3" pregunta="¿Puedo perder mi dinero ahorrado?" contenido="De ninguna manera, la compañía no solo garantiza una rentabilidad sino que además tiene una rentabilidad superior a cualquier periodo inflacionario lo que se traduce en un fondo de dinero considerable."/>
                <Pregunta numero="4" pregunta="¿Cuál es la edad para contratar?" contenido="Puede contratar desde los 18 hasta los 74 años. Cuánto antes comiences, mayor posibilidad de acumular dinero."/>
                <Pregunta numero="5" pregunta="¿Por qué pagaría menos impuestos?" contenido="Porque está exento del Impuesto a los Bienes Personales y es deducible de la base imponible del Impuesto a las Ganancias."/>
                <Pregunta numero="6" pregunta="¿Qué sucede si trascurrido el año en algún período no puedo aportar?" contenido="Tu fondo acumulado se sigue capitalizando."/>
                <Pregunta numero="7" pregunta="¿Qué son las quitas?" contenido="Es el cargo que se deducirá cuando decidas rescindir la póliza antes de los 10 años. Salvo las excepciones que arriba se detallan."/>
                <Pregunta numero="8" pregunta="¿Cuándo puedo rescatar mi dinero acumulado?" contenido="Cuando tu quieras."/>
                <Pregunta numero="9" pregunta="¿Puedo hacer un rescate parcial?" contenido="Puedes rescatar parte del fondo acumulado cuando tu quieras."/>
                <Pregunta numero="10" pregunta="¿Qué sucede si me retiro después de los 10 años?" contenido="Retiras los fondos acumulados sin quita alguna."/>
                <Pregunta numero="11" pregunta="¿Qué pasaría si muero antes de retirar el dinero acumulado?" contenido="Se le pagarán los fondos acumulados a los beneficiarios que designes en la solicitud de aseguramiento. Los beneficiarios pueden ser modificados en cualquier momento e ilimitadas veces."/>
                <Pregunta numero="12" pregunta="¿Cómo recibo la póliza y veo mi saldo acumulado?" contenido="Dentro de los 7 dias de cargada tu solicitud recibirás tu póliza por correo electrónico junto con las instrucciones para consultar tus fondos en momento que desees via web"/>
            </div>
        </div>
    );
}

export default Preguntas;