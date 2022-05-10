import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      <motion.div
        animate={showText ? "open" : "closed"}
        variants={variants}>
        <div className={`pregunta_secondary ${showText===true && 'show'}`}>
          <p>{contenido}</p>
        </div>
      </motion.div>
     </div>
  )
}

export default Pregunta