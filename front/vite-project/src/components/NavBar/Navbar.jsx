import styles from './Navbar.module.css'
import logo from './logo.png'

const Navbar = () => {
    return (
        <div className={styles.navContainer}>
            <div>
                <a href=""><img src={logo} className={styles.logo} alt="Logo" /></a>
            </div>
            <div className={styles.containerUl}>
                <ul className={styles.navBar}>
                    <div>
                        <li className={styles.liNavBar}><a className="nav-link" href="">Inicio</a></li>
                    </div>
                    <div>
                        <li className={styles.liNavBar}><a className="nav-link" href="">Mis turnos</a></li>
                    </div>
                    <div>
                        <li className={styles.liNavBar}><a className="nav-link" href="">Registrarme</a></li>
                    </div>
                    <div>
                        <li className={styles.liNavBar}><a className="nav-link" href="">Ingresar</a></li>
                    </div>
                </ul>
            </div>
        </div>
    )
}
export default Navbar; 