import './styles/index.css'
import Notes from './components/Notes';
import React from 'react'
import { useSelector } from 'react-redux'
import FormNotes from './components/FormNotes';
import { Route, Routes } from 'react-router-dom';
import repository from './store/localManager'

const repos = repository()
if(!repos.getData()){
  repos.saveData([])
}

function App() {
  const storedNotas = useSelector((state) => state)
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Notes notas={storedNotas ?? []}/>}/>
          <Route path='/new' element={<FormNotes/>} />
          <Route path='/edit/:id' element={<FormNotes/>} />
        </Routes>
    </div>
  );
}

export default App;
