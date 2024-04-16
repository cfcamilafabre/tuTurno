import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Appointment from '../../components/Appointment/Appointment';
import styles from './MyAppointments.module.css'
import axios from "axios";

const MyAppointments = () => {

    const userAppointments = useSelector((state) => state.userAppointments);

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/appointments');
                console.log('Datos de turnos obtenidos:', response.data);
                setAppointments(response.data);
            } catch (error) {
                ('Error al obtener los datos', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <h5>Mis turnos</h5>
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