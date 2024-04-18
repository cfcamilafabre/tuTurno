import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from "./Home.module.css";

const Home = () => {

    const [isLogged, setIsLogged] = useState(false)


    const userLoggedState = useSelector((state) => state.user.user);

    useEffect(() => {

        if (userLoggedState) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }, [userLoggedState])

    return (
        <>
            <div className={styles.containerHome}>
                <h1 className={styles.h1Home}> ¡Bienvenido a tuTurno! </h1>
                <h4 className={styles.pHome}>Ahora reservar tu turno es mucho más sencillo. Podes agendar día y horario haciendo click en el botón. <br /> Recordá que nos podes encontrar de lunes a viernes, de 9:00 a 18:00hs.</h4>
                {!isLogged &&
                <>
                <div className={styles.buttonContainer}>
                    <Link to='/login'><span className='btn btn-primary'>Inicia sesión para continuar</span></Link>
                </div>
                <div className={styles.crearCuentaDiv}>
                    <p style={{ marginRight: "8px" }}>Todavia no tenes una cuenta?</p>
                    <Link to='/register'>Registrate ahora!</Link>
                </div>
                </>}
            </div>
        </>
    )
}
export default Home; 
