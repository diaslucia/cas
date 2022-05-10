import React from 'react'
import { Link } from 'react-router-dom'
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
            <Link to="/aseguradoras">Aseguradoras</Link>
        </div>
        <div className='footer_div'>
            <h2>Escribinos en:</h2>
            <p>casobrino@gmail.com</p>
            <p>(+54 11) 4477-9911</p>
        </div>
        <div className='footer_div'>
            <img src={Logo} />
        </div>
    </div>
  )
}

export default Footer