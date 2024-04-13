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
        name: 'El campo es requerido',
        lastname: 'El campo es requerido',
        email: 'El campo es requerido',
        birthdate: 'El campo es requerido',
        username: "El campo es requerido",
        password: "El campo es requerido"
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
        axios.post('http://localhost:3000/users/register', userData)
        .then(response => {
            if (response.data.success) {
                alert (`Usuario registrado correctamente`);
                setUserData({
                    name: '',
                        lastname: '',
                        email: '',
                        birthdate: '',
                        username: '',
                        password: ''
                    });
                } else {
                    alert('Ha ocurrido un error en el registro');
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
                        <input type='text' value={userData.name} name='name' onChange={handleInput} className="form-control" />
                        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label>Apellido:</label>
                        <input type='text' value={userData.lastname} name='lastname' onChange={handleInput} className="form-control" />
                        {errors.lastname && <p style={{ color: 'red' }}>{errors.lastname}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label>Email:</label>
                        <input type='text' value={userData.email} name='email' onChange={handleInput} className="form-control" />
                        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label>Fecha de nacimiento:</label>
                        <input type='date' value={userData.birthdate} name='birthdate' onChange={handleInput} className="form-control" />
                        {errors.birthdate && <p style={{ color: 'red' }}>{errors.birthdate}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label>Usuario:</label>
                        <input type='text' value={userData.username} name='username' onChange={handleInput} className="form-control" />
                        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                    </div>
                    <div className={styles.formGroup}>
                        <label>Contraseña:</label>
                        <input type='password' value={userData.password} name='password' onChange={handleInput} className="form-control" />
                        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                    </div>
                    <div>
                        <button className="btn btn-primary" type='submit'>Registrarse</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Register;