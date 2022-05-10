import React, { useState } from 'react';
import './Pregunta.scss'

const Pregunta = ({numero, pregunta, contenido}) => {
  const [showText, setShowText] = useState(false);

  const handleShowtext = () => setShowText(!showText);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-5%" },
}

  return (
    <div className='pregunta'>
      <div className='pregunta_principal' onClick={handleShowtext}>
        <p>{numero}.</p>
        <h4>{pregunta}</h4>
      </div>
        <div className="pregunta_secondary">
          <p>{contenido}</p>
        </div>
     </div>
  )
}

export default Pregunta