import styles from './Navbar.module.css'
import logo from './logo.png'

const Navbar = () => {
    return (
        <div className={styles.navContainer}>
            <div>
                <a href=""><img src={logo} className={styles.logo} alt="Logo" /></a>
            </div>
            <div>
                <ul className={styles.navBar}>
                    <li className={styles.liNavBar}><a href="">Inicio</a></li>
                    <li className={styles.liNavBar}><a href="">Mis turnos</a></li>
                    <li className={styles.liNavBar}><a href="">Contacto</a></li>
                    <li className={styles.liNavBar}><a href="">Login</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar; 