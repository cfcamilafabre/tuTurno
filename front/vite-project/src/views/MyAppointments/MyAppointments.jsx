import { useState, useEffect } from "react";
import Appointment from '../../components/Appointment/Appointment';
import styles from './MyAppointments.module.css'

const MyAppointments = () => {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/appointments');
                setAppointments(response.data);
            } catch (error) {
                ('Error al obtener los datos', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <h1>Mis turnos</h1>
            <div className={styles.containerCards}>
                {appointments.map((appointment) => {
                    return (
                        <Appointment
                            key={appointment.id}
                            description={appointment.description}
                            time={appointment.time}
                            date={appointment.date}
                            status={appointment.status}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default MyAppointments;