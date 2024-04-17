import { useState } from "react";
import validate from '../../helpers/validate';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../Register/Register.module.css'
import axios from 'axios';

const Register = () => {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        birthdate: '',
        nDni: '',
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const requiredFields = ['name', 'email', 'birthdate', 'nDni', 'username', 'password'];

    const handleInput = (event) => {
        const { name, value } = event.target;

        setUserData({
            ...userData,
            [name]: value
        });

        setErrors(validate(userData));
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

        if (userData.password !== userData.confirmPassword) {
            setErrors({ ...errors, confirmPassword: 'Las contraseñas no coinciden' });
            return;
        }
        const formErrors = {};

        requiredFields.forEach(field => {
            if (userData[field].trim() === '') {
                formErrors[field] = 'Este campo es requerido';
            }
        });

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        axios.post('http://localhost:3000/users/register', userData)
            .then(response => {
                if (response.data.success) {
                    alert(`Usuario registrado correctamente`);
                    setUserData({
                        name: '',
                        email: '',
                        birthdate: '',
                        nDni: '',
                        username: '',
                        password: '',
                    });
                } else {
                    alert(response.data.message);
                }
            })
            .catch(error => {
                alert('Ha ocurrido un error en la conexión');
                console.error('Error:', error);
            });
    }

    return (
        <>
            <div>
                <h5>Completá el formulario para registrarte</h5>
            </div>
            <form onSubmit={handleOnSubmit}>
                <div className={styles.formContainer}>
                    <div className={styles.formGroup}>
                        <label>Nombre:</label>
                        <input type='text' value={userData.name} name='name' onChange={handleInput} onBlur={handleBlur} className="form-control" />
                        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label>Email:</label>
                        <input type='text' value={userData.email} name='email' onChange={handleInput} onBlur={handleBlur} className="form-control" />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label>Fecha de nacimiento:</label>
                        <input type='date' value={userData.birthdate} name='birthdate' onChange={handleInput} onBlur={handleBlur} className="form-control" />
                        {errors.birthdate && <p style={{ color: 'red' }}>{errors.birthdate}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label>Numero de DNI:</label>
                        <input type='number' value={userData.nDni} name='nDni' onChange={handleInput} onBlur={handleBlur} className="form-control" />
                        {errors.nDni && <p style={{ color: 'red' }}>{errors.nDni}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label>Usuario:</label>
                        <input type='text' value={userData.username} name='username' onChange={handleInput} onBlur={handleBlur} className="form-control" />
                        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label>Contraseña:</label>
                        <input type='password' value={userData.password} name='password' onChange={handleInput} onBlur={handleBlur} className="form-control" />
                        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label>Confirmar Contraseña:</label>
                        <input type='password' value={userData.confirmPassword} name='confirmPassword' onChange={handleInput} className="form-control" />
                        {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
                    </div>
                    <div className={styles.containerButton}>
                        <button disabled={!userData.name || !userData.email || !userData.birthdate || !userData.nDni || !userData.username || !userData.password} className="btn btn-secondary" type='submit'>Registrarse</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Register;