import React, { useState, useEffect, useReducer } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../redux/reducer';
import Appointment from '../../components/Appointment/Appointment';
import styles from './MyAppointments.module.css';
import axios from "axios";

const MyAppointments = () => {
    const dispatch = useDispatch();
    const userState= useSelector((state) => state.user);


    const [appointments, setAppointments] = useState([]);
    const [formData, setFormData] = useState({
        description: '',
        time: '',
        date: '',
        status: 'active'
    });
    const [formErrors, setFormErrors] = useState({
        description: false,
        time: false,
        date: false
    });
    const [isFormValid, setIsFormValid] = useState(false); 

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/appointments/${userState.user.id}`);
            setAppointments(response.data.appointments);
        } catch (error) {
            console.error('Error al obtener los datos', error);
        }
    }; 

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        formData.userId = userState.user.id;
        formData.time.toString()
        axios.post("http://localhost:3000/appointments/schedule", formData)
          .then((response) => {
           if (response.data.success) {
            fetchData();
        } 
        alert(response.data.message);
      })

      .catch((error) => {
        alert("Ha ocurrido un error en la conexión");
        console.error("Error:", error);
      });
    };

    const handleBlur = (event) => {
        const { name, value } = event.target;
        if (value.trim() === '') {
            setFormErrors({
                ...formErrors,
                [name]: true
            });
        } else {
            setFormErrors({
                ...formErrors,
                [name]: false
            });
        }
    };

    useEffect(() => {
        setIsFormValid(Object.values(formData).every(value => value !== '') &&
            !Object.values(formErrors).some(error => error));
    }, [formData, formErrors]);

    const today = new Date().toISOString().split('T')[0]; // Obtener la fecha actual

    return (
        <>
            <section>
                <h5 className={styles.titulosSeccion}>Mis turnos</h5>
                <div className={styles.containerCards}>
                    {appointments.map((appointment) => {
                        return (
                            <Appointment
                                key={appointment.id}
                                id={appointment.id}
                                description={appointment.description}
                                time={appointment.time}
                                date={appointment.date}
                                status={appointment.status}
                            />
                        );
                    })}
                </div>
            </section>
            <section>
                <h5 className={styles.titleSeccion}>Reserva un nuevo turno aquí</h5>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formContainer}>
                        <div className="row">
                            <div className="col">
                                <label>Descripcion del turno:</label>
                                <input
                                    type="text"
                                    className={`form-control ${formErrors.description ? 'is-invalid' : ''}`}
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {formErrors.description && <div className="invalid-feedback">Este campo es requerido</div>}
                            </div>
                            <div className="col">
                                <label>Hora:</label>
                                <input
                                    type="number"
                                    className={`form-control ${formErrors.time ? 'is-invalid' : ''}`}
                                    name="time"
                                    min="9"
                                    max="18"
                                    step="1"
                                    value={formData.time}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {formErrors.time && <div className="invalid-feedback">Este campo es requerido</div>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label>Elige una fecha:</label>
                                <input
                                    type="date"
                                    className={`form-control ${formErrors.date ? 'is-invalid' : ''}`}
                                    name="date"
                                    value={formData.date}
                                    min={today} // Establecer la fecha mínima como la fecha actual
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {formErrors.date && <div className="invalid-feedback">Este campo es requerido</div>}
                            </div>
                        </div>
                        <div className={styles.containerButton}>
                            <button
                                className="btn btn-secondary"
                                type='submit'
                                disabled={!isFormValid}
                            >
                                Agendar turno
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};

export default MyAppointments;



