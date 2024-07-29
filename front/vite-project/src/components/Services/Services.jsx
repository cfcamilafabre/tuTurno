import Button from "react-bootstrap/Button";
import styles from "../Services/Services.module.css";
import Card from "react-bootstrap/Card";
import CardSpecialty from "./CardSpecialty";
export const Services = () => {
  return (
    <>
      <section className={styles.sectionServices}>
        <div className={styles.container}>
          <h4 className={styles.sectionTitle}>ESPECIALIDADES</h4>
          <h3 className={styles.sectionSubtitle}>
            Conocé todas las especialidades
          </h3>
        </div>

        <div className={styles.cardsContainer}>
          <CardSpecialty
            specialty="Cardiología"
            description="La cardiología es la rama de la medicina que se ocupa del estudio, diagnóstico y tratamiento de las enfermedades del corazón y del sistema circulatorio."
          ></CardSpecialty>
          <CardSpecialty
            specialty="Dermatología"
            description="La dermatología es la especialidad médica que se enfoca en el diagnóstico y tratamiento de las enfermedades de la piel, el cabello, las uñas y las mucosas."
          ></CardSpecialty>
          <CardSpecialty
            specialty="Traumatología"
            description="La traumatología es una rama de la medicina que se dedica al estudio y tratamiento de las lesiones del aparato locomotor."
          ></CardSpecialty>
        </div>
      </section>
    </>
  );
};

export default Services;
