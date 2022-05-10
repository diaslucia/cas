import React, { useState } from "react";
import "./aseguradoras.scss";

/* Components */
import CardOptions from "./components/cardOptions/cardOptions";
import { CLIENTS } from "./components/constants/clientes";

const Aseguradoras = () => {
    const clientInit = CLIENTS.filter((item) => item.id === 1);
    const [clientes, setClientes] = useState(clientInit);

    const handleOnClick = (id) => {
        let newClient = CLIENTS.filter((item) => item.id === id);
        setClientes(newClient);
    }

    return(
        <div className="aseguradoras">
            <div className="aseguradoras_buttons">
                <button onClick={() => handleOnClick(1)} className="aseg_button">Federación Patronal</button>
                <button onClick={() => handleOnClick(2)} className="aseg_button">La Holando</button>
                <button onClick={() => handleOnClick(3)} className="aseg_button">Orígenes</button>
                <button onClick={() => handleOnClick(4)} className="aseg_button">San Cristóbal</button>
                <button onClick={() => handleOnClick(5)} className="aseg_button">SMG Life</button>
                <button onClick={() => handleOnClick(6)} className="aseg_button">Zurich</button>
            </div>

            {<div className="aseguradoras_cards">
                {clientes.map((item) => {
                    return(
                        <CardOptions
                        key={item.id.toString()}
                        title={item.title}
                        img={item.img}
                        description={item.description}
                        />
                    )
                })}
            </div>}
        </div>
    );
}

export default Aseguradoras;