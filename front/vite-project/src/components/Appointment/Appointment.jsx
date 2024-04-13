import styles from './Appointment.module.css'

const Appointment = ({date, time, status, description}) => {

    const formattedDate = date instanceof Date ? date.toLocaleDateString() : '';

    return (
        <>
        <div className={styles.cardAppointment}>
            
            <p className={styles.liCard}>{description}</p>
            <span className={styles.liCard}>{formattedDate}</span>
            <span className={styles.liCard}>{time}</span>
            <span className={status === 'canceled' ? styles.canceled : ''} >{status} </span>
            {status === 'active' && <button className={styles.buttonCancel}>Cancelar</button>}
            
        </div>
        </>
    )
}

export default Appointment;