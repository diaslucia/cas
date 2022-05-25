import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Logo from '../../assets/Logo footer.svg'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_div'>
          <h2>Mapa de sitio:</h2>
          <Link to="/cas">Inicio</Link>
          <Link to="/coberturas">Coberturas</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
        <div className='footer_div'>
          <h2>Escribinos en:</h2>
          <div>
            <a href="mailto:casobrino@gmail.com"><FontAwesomeIcon className="fa-regular fa-envelope icon" icon={faEnvelope} /></a>
            <p><a href="mailto:casobrino@gmail.com">casobrino@gmail.com</a></p>
          </div>
          <div>
            <a href="https://wa.me/+5491144779911"><FontAwesomeIcon className="fa-regular fa-envelope icon" icon={faWhatsapp}/></a>
            <p><a href="https://wa.me/+5491144779911">(+54 11) 4477-9911</a></p>
          </div>
        </div>
        <div className='footer_divLogo'>
            <img src={Logo} alt="Logo CAS"/>
        </div>
    </div>
  )
}

export default Footer