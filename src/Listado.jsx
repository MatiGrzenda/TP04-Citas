import Citas from "./Cita.jsx"
import Subtitulo from './Subtitulo.jsx'
import './Listado.css'

export default function Listado(/*{listaCitas}*/) {

    /*listaCitas.map()
    {
        <Citas nombreMascota = cita.nombreMascota nombreDueño = cita.nombreDueño fecha = cita.fecha hora = cita.hora sintomasText = cita.sintomasText/>
    }*/
    return (
        <div className="one-half column">
            <Subtitulo subtitulo="Administra tus citas" />
            <Citas nombreMascota="Nehuén" nombreDueño="Martín Z" fecha="2025-05-13" hora="8:36" sintomasText="lele pancha" />
        </div>
    )
}