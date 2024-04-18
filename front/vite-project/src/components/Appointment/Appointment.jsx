import { useState } from 'react';
import axios from 'axios';

const Appointment = ({ id, date, time, status, description }) => {
    const formattedDate = date instanceof Date ? date.toLocaleDateString() : '';
    console.log('formattedDate:', formattedDate);

    const [isCancelled, setIsCancelled] = useState(false)

    const handleClick = () => {
       
        // Realizar la solicitud PUT para cancelar la cita
        axios.put(`http://localhost:3000/appointments/cancel/${id}`)
            .then((response) => {
                setIsCancelled(!isCancelled)
                // Manejar la respuesta si es necesario
                console.log('Appointment cancelled:', response.data);
            })
            .catch((error) => {
                // Manejar el error si ocurre
                console.error('Error cancelling appointment:', error);
            });
    };

    return (
        <>
            <div className="card" style={{ margin: "8px" }}>
                <div className="card-body" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h5 className="card-title">Tu turno</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
                    <p className="card-text">{time}</p>
                    <p className="card-text">{description}</p>
                    {!isCancelled ? (
                        <button onClick={handleClick} className="btn btn-danger">Cancelar</button>
                    ) : (
                        <button disabled className="btn btn-light">Cancelado</button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Appointment;
