import { useState } from "react";
import validate from '../../helpers/validate';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../views/Login/Login.module.css'

const Register = () => {

    const [userData, setUserData] = useState({
        name: '',
        lastname: '',
        email: '',
        birthdate: '',
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        name: 'Name is required',
        lastname: 'Lastname is required',
        email: 'Email is required',
        birthdate: 'Birthdate is required',
        username: "Username is required",
        password: "Username is required"
    });

    const handleInput = (event) => {

        const { name, value } = event.target;

        //forma más pro
        setUserData({
            ...userData,
            [name]: value
        });

        setErrors(validate(userData));
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        alert(`Usuario registrado correctamente`)
    }

    return (
        <>
            <div>
                <h4>Completá el formulario para registrarte</h4>
            </div>
            <form onSubmit={handleOnSubmit}>
                <div className={styles.formContainer}>
                    <div className={styles.formGroup}>
                        <label>Nombre:</label>
                        <input type='text' value={userData.name} name='name' onChange={handleInput} className="form-control" />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Apellido:</label>
                        <input type='text' value={userData.lastname} name='lastname' onChange={handleInput} className="form-control" />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Email:</label>
                        <input type='text' value={userData.email} name='email' onChange={handleInput} className="form-control" />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Birthdate</label>
                        <input type='date' value={userData.birthdate} name='birthdate' onChange={handleInput} className="form-control" />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Usuario:</label>
                        <input type='text' value={userData.username} name='username' onChange={handleInput} className="form-control" />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Contraseña:</label>
                        <input type='password' value={userData.password} name='password' onChange={handleInput} className="form-control" />
                    </div>
                    <div>
                        <button className="btn btn-primary" id={styles.button} type='submit'>Registrarse</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Register;