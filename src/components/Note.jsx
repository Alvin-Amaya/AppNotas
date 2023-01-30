import React from 'react'
import { NavLink } from 'react-router-dom'
import useRepository from '../store/useRepository'
import { motion } from "framer-motion";

export default function Note({data}) {
  const imgDelete = require('../icons/trash.png')
  const imgEdit = require('../icons/pencil.png')
  const repository = useRepository()

  const deleteElement = () => {
    if(window.confirm('¿Desea eliminar esta nota?') === true){
      repository.del(data)
    }
  }
  return (
   <motion.div layout
    initial={{ y: 150, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ opacity: 0, transition:{duration:1} }}
    className='Nota'>
        <h2 className='title'>{data?.title}</h2>
        <p className='content'>{data?.content}</p>
        <div className='extra'>
          <div className='panelbuttons'>
            <button className='btnOptionNote' onClick={deleteElement}>
              <img src={imgDelete} width={'20px'} alt='del'/>
            </button>
            <NavLink to={`edit/${data.id}`} state={data}>
              <button className='btnOptionNote'>
                <img src={imgEdit} width={'20px'} alt='del'/>
              </button>
            </NavLink>
          </div>
          <p className='date'>{data?.date}</p>
        </div>
    </motion.div>
  )
}


