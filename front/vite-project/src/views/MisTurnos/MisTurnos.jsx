import misTurnos from "../../helpers/misTurnos";
import Turno from '../../components/Turno/Turno'

const MisTurnos = () => {

    const [turnos, setTurnos] = useState(misTurnos)
    return (
        <>
        <h1>Mis turnos</h1>

        <div>
        {turnos.map((turno) => (
                    <Turno
                        key={turno.id}
                        fecha={turno.date}
                        hora={turno.time}
                        paciente={turno.userId}
                    />
                ))}
        </div>
        </>
    )
}

export default MisTurnos;