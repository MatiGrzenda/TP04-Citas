export default function Citas(nombreMascota, nombreDueño, fecha, hora, sintomasText) {
    
    return (
        <>
            <div class="cita">
                <p>Mascota: <span>{nombreMascota}</span></p>
                <p>Dueño: <span>{nombreDueño}</span></p>
                <p>Fecha: <span>{fecha}</span></p>
                <p>Hora: <span>{hora}</span></p>
                <p>Sintomas: <span>{sintomasText}</span></p>
                <button class="button elimnar u-full-width">Eliminar x</button>
            </div>
        </>
    )
}