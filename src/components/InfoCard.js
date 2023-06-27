import React from 'react'
import { motion } from 'framer-motion'

const InfoCard = () => {
  return (
    <motion.div className='Info'
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1}}
    >
        <p>Correo Electrónico: piarayad@gmail.com</p>
        <p>Teléfono: +569 84276390</p>
        <p>Github: <a href='https://github.com/PabloAD01'>https://github.com/PabloAD01</a></p>
        
    </motion.div>
  )
}

export default InfoCard;
