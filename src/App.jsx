//import { useState } from 'react'
import Titulo from './Titulo.jsx'
import Formulario from './Formulario.jsx'
import Listado from './Listado.jsx'
import './App.css'

function App() {
  return (
    <>
      <div id="root">
        <Titulo titulo="Administración de Pacientes" />
        <div className="container">
          <div className="row">
            <Formulario />
            <Listado />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
