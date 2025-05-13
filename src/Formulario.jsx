import React from 'react'
import Subtitulo from './Subtitulo.jsx'
import './Formulario.css'

export default function Formulario() {
    return (
        <div className="one-half column">
            <Subtitulo subtitulo="Crear mi Cita" />
            <form>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota"></input>
                <label>Nombre Dueño</label>
                <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota"></input>
                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width"></input>
                <label>Hora</label>
                <input type="time" name="hora" className="u-full-width"></input>
                <label>Sintomas</label>
                <textarea name="sintomas" className="u-full-width"></textarea>
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </div>
    )
}
