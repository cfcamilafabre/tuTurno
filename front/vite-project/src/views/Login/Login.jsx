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
        username: "El campo es requerido",
        password: "El campo es requerido"
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
        axios
          .post("http://localhost:3000/users/login", userData)
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
                    <input type='text' value={userData.username} name='username' onChange={handleInput}  className="form-control"/>
                    {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                </div>
                <div className={styles.formGroup}>
                    <label>Contraseña:</label>
                    <input type='password' value={userData.password} name='password' onChange={handleInput} className="form-control"/>
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>
                <div>
                    <button className="btn btn-primary"  type='submit'>Ingresar</button>
                </div>
            </div>
        </form>
        </>
    )
}

export default Login;