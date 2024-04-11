import styles from "./Home.module.css";

const Home = () => {
    return (
        <div>
            <div>
                <h1 className={styles.h1Home}> ¡Bienvenido a tuTurno! </h1>
                <p className={styles.pHome}>Ahora reservar tu turno es mucho más sencillo. Podes agendar día y horario haciendo click en el botón. <br/> Recordá que nos podes encontrar de lunes a viernes, de 9:00 a 18:00hs.</p>

                <div className={styles.buttonContainer}>
                    <button className={styles.buttonHome}>Reservar ahora</button>
                </div>

            </div>

        </div>
    )
}
export default Home; 
