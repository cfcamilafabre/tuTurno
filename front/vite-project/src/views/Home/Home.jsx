import { Link } from 'react-router-dom';
import styles from "./Home.module.css";


const Home = () => {
    return (
        <div>
            <div>
                <h1 className={styles.h1Home}> ¡Bienvenido a tuTurno! </h1>
                <h4 className={styles.pHome}>Ahora reservar tu turno es mucho más sencillo. Podes agendar día y horario haciendo click en el botón. <br /> Recordá que nos podes encontrar de lunes a viernes, de 9:00 a 18:00hs.</h4>
                <div className={styles.buttonContainer}>
                    <Link to='/login'><span className='btn btn-primary' >Inicia sesión para continuar</span></Link>
                </div>
                <div className={styles.crearCuentaDiv} >
                    <Link to='/register'>Crear una cuenta</Link>
                </div>
            </div>
        </div>
    )
}
export default Home; 
