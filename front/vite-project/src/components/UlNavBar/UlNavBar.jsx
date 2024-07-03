import styles from "../UlNavBar/UlNavBar.module.css";
import { Link } from "react-router-dom";

export const UlNavBar = () => {

    return(
        <>
        <ul className={styles.navBar}>
        <div>
          <li>
            <Link to="/" className={styles.liNavBar}>
              {" "}
              Inicio{" "}
            </Link>{" "}
          </li>
        </div>
        <div>
          <li>
            <Link to="/" className={styles.liNavBar}>
              {" "}
              Nosotros{" "}
            </Link>{" "}
          </li>
        </div>
        <div>
          <li>
            <Link to="/" className={styles.liNavBar}>
              {" "}
              Servicios{" "}
            </Link>{" "}
          </li>
        </div>
        <div>
          <li>
            <Link to="/" className={styles.liNavBar}>
              {" "}
              Preguntas frecuentes{" "}
            </Link>{" "}
          </li>
        </div>
        <div>
          <li>
            <Link to="/" className={styles.liNavBar}>
              {" "}
              Blog{" "}
            </Link>{" "}
          </li>
        </div>
        <div>
          <li>
            <Link to="/" className={styles.liNavBar}>
              {" "}
              Contacto{" "}
            </Link>{" "}
          </li>
        </div>
      </ul>
      </>
    )
}

export default UlNavBar;