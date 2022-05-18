import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faWhat } from "@fortawesome/free-solid-svg-icons";
import Logo from '../../assets/Logo footer.svg'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_div'>
          <h2>Mapa de sitio:</h2>
          <Link to="/">Inicio</Link>
          <Link to="/coberturas">Coberturas</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
        <div className='footer_div'>
          <h2>Escribinos en:</h2>
          <div>
            <FontAwesomeIcon className="fa-regular fa-envelope" icon={faEnvelope} />
            <p>casobrino@gmail.com</p>
          </div>
          <div>
            <FontAwesomeIcon className="fa-regular fa-envelope" icon={faEnvelope} />
            <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
            <p>(+54 11) 4477-9911</p>
          </div>
        </div>
        <div className='footer_div'>
            <img src={Logo} />
        </div>
    </div>
  )
}

export default Footer