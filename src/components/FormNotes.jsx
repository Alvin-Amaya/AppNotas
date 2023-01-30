import React, { useEffect, useRef } from 'react'
import { createNote } from '../utils/createNote'
import {useSelector} from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion";
import useRepository from '../store/useRepository'

export default function FormNotes() {
    const titleNote = useRef();
    const textNote = useRef();
    const location = useLocation()
    const params = useParams()
    const storedNotas = useSelector(state => state)
    const navigate = useNavigate();
    const repository = useRepository()
    
    const currNote = storedNotas.find(e => e.id === params.id);
    useEffect(()=>{
        if(currNote && location.pathname !== '/new'){
            titleNote.current.value = currNote.title;
            textNote.current.value = currNote.content;
        }
    })

    const saveNote = () => {
        if(location.pathname === '/new'){
            if(textNote.current.value === ''){
                window.alert('Entrada de nota no válida');
                return
            }
            if(titleNote.current.value === '') titleNote.current.value = 'Sin Titulo'
            repository.save(createNote(titleNote.current.value, textNote.current.value))
        } else {
            repository.update({...createNote(titleNote.current.value, textNote.current.value), id: currNote.id})
        }
        navigate('/')
    }

  return (
    <>
        <motion.div 
        className='HeaderNewNote'
        initial={{scale: 0.8, opacity: 0, x: -150}}
        animate={{ scale: 1, opacity: 1, x: 0}}
        transition={{duration: .5}}>
            <NavLink to={'/'}>
                <button>Atras</button>
            </NavLink>
            <h1>{location.pathname === '/new' ? 'Nueva' : 'Editar'} nota</h1>
        </motion.div>
        <motion.div
        initial={{opacity: 0, y: 150}}
        animate={{opacity: 1, y: 0}}
        className='formNotas'>
            <input type={'text'} ref={titleNote} placeholder='Titulo de la Nota'/>
            <textarea ref={textNote} placeholder='Escriba una nota' />
            <button onClick={() => navigate('/')}>Cancelar</button>
            <button onClick={saveNote}>Guardar</button>
        </motion.div>
    </>
  )
}
