import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion";

export default function Header() {
  // const logo = require('../icons/IconoNotas.png')
  return (
    <motion.header
    initial={{scale:0.8, opacity: 0, x: 100}}
    animate={{scale: 1, opacity: 1, x: 0}}
    transition={{duration: .5}}>
        <h1>Notas</h1>
        {/* <img src={logo} alt='logo'/> */}
        <NavLink to={'/new'}>
          <button>Agregar</button>
        </NavLink>
        {/* <div className='searsh'>
          <input type={'search'} placeholder='Buscar nota' />
          <button className='btnSearsh'>Buscar</button>
        </div> */}
    </motion.header>
  )
}
