//import { useState } from 'react'
import { useState } from 'react'
import Titulo from './Titulo.jsx'
import Formulario from './Formulario.jsx'
import Listado from './Listado.jsx'
import './App.css'

function App() {
  const [listaCitas, setLista] = useState();

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"></link>
      <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"></link>
      <Titulo titulo="Administración de Pacientes" />
      <div className="container">
        <div className="row">
          <Formulario listaCitas={listaCitas} setLista={setLista} />
          <Listado listaCitas={listaCitas} setLista={setLista} />
        </div>
      </div>
    </>
  )
}

export default App
