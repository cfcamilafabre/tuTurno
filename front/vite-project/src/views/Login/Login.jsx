import { useState } from "react";
import validate from '../../helpers/validate'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Login/Login.module.css'



const Login = () => {

    const [userData, setUserData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: "Username is required",
        password: "Username is required"
    });

    const handleInput = (event) => {
        const { name, value } = event.target;

        // forma más descriptiva
        if (name === username) {
            setUserData({
                ...userData,
                username: value
            })
        }

        if (name === password) {
            setUserData({
                ...userData,
                password: value
            })
        }

        setErrors(validate(userData));
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        alert(`Usuario loggeado correctamente`)
    }

    return (
        <>
        <div>
            <h4>Completá el formulario para iniciar sesión</h4>
        </div>
        <form onSubmit={handleOnSubmit}>
            <div className={styles.formContainer}>
                <div className={styles.formGroup}>
                    <label>Usuario:</label>
                    <input type='text' value={userData.username} name='username' onChange={handleInput}  className="form-control"/>
                    {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                </div>
                <div className={styles.formGroup}>
                    <label>Contraseña:</label>
                    <input type='password' value={userData.password} name='password' onChange={handleInput} className="form-control"/>
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>
                <div>
                    <button className="btn btn-primary" id={styles.button} type='submit'>Ingresar</button>
                </div>
            </div>
        </form>
        </>
    )
}

export default Login;