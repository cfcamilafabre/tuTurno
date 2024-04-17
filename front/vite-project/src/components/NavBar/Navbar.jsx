import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from './logo.png'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


const Navbar = () => {

    const [showMyAppointments, setShowMyAppointments] = useState(false)


    const userLoggedState = useSelector((state) => state.user.user);

    useEffect(() => {

        if (userLoggedState) {
            setShowMyAppointments(true)
        } else {
            setShowMyAppointments(false)
        }
    }, [userLoggedState])

    return (
        <div className={styles.navContainer}>
            <div>
                <Link to='/'><img src={logo} className={styles.logo} alt="Logo" /></Link>
            </div>
            <div className={styles.containerUl}>
                <ul className={styles.navBar}>
                    <div>
                        <li><Link to="/" className={styles.liNavBar}> Inicio </Link> </li>
                    </div>
                    {showMyAppointments &&
                        <div>
                            <li><Link to="/myappointments" className={styles.liNavBar}> Mis turnos </Link> </li>
                        </div>}

                    <div>
                        <li><Link to="/register" className={styles.liNavBar}> Registrarme</Link> </li>
                    </div>
                    <div>
                        <li><Link to="/login" className={styles.liNavBar}> Ingresar </Link> </li>
                    </div>
                </ul>
            </div>
        </div>
    )
}
export default Navbar; 