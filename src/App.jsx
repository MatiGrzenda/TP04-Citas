import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <title>Administración de Pacientes</title>
      <div id="root">
      <Titulo titulo="Administración de Pacientes"/>
        <div class="container">
          <div class="row">
            <Formulario />
            <Listado />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
