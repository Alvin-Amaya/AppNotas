import React from 'react'
import Note from './Note'
import Header from './Header.js';
import { AnimatePresence } from "framer-motion";

export default function Notes({notas}) {
  return (
    <>
        <Header/>
        <div className='Notas'>
        <AnimatePresence>
          {notas.map(note => (
              <Note className='Nota' key={note.id} data={note}/>
          ))}
        </AnimatePresence>
        </div>
    </>
  )
}