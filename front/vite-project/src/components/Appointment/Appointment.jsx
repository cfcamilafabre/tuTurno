import styles from './Appointment.module.css'

const Appointment = ({date, time, status, description}) => {

    const formattedDate = date.toLocaleDateString(); 

    return (
        <>
        <div className={styles.cardAppointment}>
            <ul>
            <li className={styles.liCard}> <h4>{description}</h4> </li>
            <li className={styles.liCard}> <h5>{formattedDate}</h5> </li>
            <li className={styles.liCard}> <h5>{time}</h5> </li>
            <li className={styles.liCard}><h5 className={status === 'canceled' ? styles.canceled : ''} >{status} </h5></li>
            {status === 'active' && <button className={styles.buttonCancel}>Cancelar</button>}
            </ul>
        </div>
        </>
    )
}

export default Appointment;