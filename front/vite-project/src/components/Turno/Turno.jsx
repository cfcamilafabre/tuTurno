const Turno = ({id, date, time, userId}) => {
    return (
        <div>
            <h3>Datos del turno</h3>
            <h5>{id}</h5>
            <h5>{date}</h5>
            <h5>{time}</h5>
            <h5>{userId}</h5>
        </div>
    )
}

export default Turno;