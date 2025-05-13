import './Cita.css'

export default function Cita(props) {

    return (
        <>
            <div className="cita">
                <p>Mascota: <span>{props.nombreMascota}</span></p>
                <p>Dueño: <span>{props.nombreDueño}</span></p>
                <p>Fecha: <span>{props.fecha}</span></p>
                <p>Hora: <span>{props.hora}</span></p>
                <p>Sintomas: <span>{props.sintomasText}</span></p>
                <button className="button elimnar u-full-width">Eliminar x</button>
            </div>
        </>
    )
}