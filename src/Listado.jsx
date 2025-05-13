import Citas from "./Citas";

export default function Listado(/*{listaCitas}*/) {
    
    return (
        <div class="one-half column">
            <Subtitulo subtitulo="Administra tus citas" />
            {
                /*listaCitas.map()
                {
                    <Citas nombreMascota = cita.nombreMascota nombreDueño = cita.nombreDueño fecha = cita.fecha hora = cita.hora sintomasText = cita.sintomasText/>
                }*/
                <Citas nombreMascota = "Nehuén" nombreDueño = "Martín Z" fecha = "2025-05-13" hora = "8:36" sintomasText = "lele pancha" />
            }
        </div>
    )
}