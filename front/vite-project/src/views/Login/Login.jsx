import { useState } from "react";
import validate from '../../helpers/validate'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Login/Login.module.css'

const Login = () => {

    const [userData, setUserData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        const { name, value } = event.target;

        setUserData({
            ...userData,
            [name]: value
        });
    }

    const handleBlur = (event) => {
        const { name, value } = event.target;

        setErrors({
            ...errors,
            [name]: value.trim() === '' ? 'Este campo es requerido' : ''
        });
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        const formErrors = {};
        if (userData.username.trim() === '') {
            formErrors.username = 'Este campo es requerido';
        }
        if (userData.password.trim() === '') {
            formErrors.password = 'Este campo es requerido';
        }

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        axios.post("http://localhost:3000/users/login", userData)
          .then((response) => {
            if (response.data.success) {
              alert("Usuario loggeado correctamente");
            } else {
              alert("Ha ocurrido un error en el login");
            }
          })
          .catch((error) => {
            alert("Ha ocurrido un error en la conexión");
            console.error("Error:", error);
          });
    };

    return (
        <>
        <div>
            <h5>Completá el formulario para iniciar sesión</h5>
        </div>
        <form onSubmit={handleOnSubmit}>
            <div className={styles.formContainer}>
                <div className={styles.formGroup}>
                    <label>Usuario:</label>
                    <input type='text' value={userData.username} name='username' onChange={handleInput} onBlur={handleBlur} className="form-control"/>
                    {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                </div>
                <div className={styles.formGroup}>
                    <label>Contraseña:</label>
                    <input type='password' value={userData.password} name='password' onChange={handleInput} onBlur={handleBlur} className="form-control"/>
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>
                <div>
                    <button disabled={!userData.username || !userData.password} className="btn btn-primary"  type='submit'>Ingresar</button>
                </div>
            </div>
        </form>
        </>
    )
}

export default Login;