import Circle from "./Circle";
import styles from "./Method.module.css";

export const Method = () => {
  return (
    <>
      <section className={styles.ourMethod}>
        <div className={styles.titlesDiv}>
          <h4 className={styles.subtitleSection}>Deja el cuidado de tu salud en las mejores manos</h4>
          <h3 className={styles.titleSection}>Nuestro método de trabajo</h3>
        </div>

        <div className={styles.circlesContainer}>
          <Circle
            number="01"
            text="Historia clínica"
            span="En la primer entrevista revisaremos antecedentes y realizaremos un examen exhaustivo donde evaluaremos los pasos a seguir."
          />
          <Circle
            number="02"
            text="Análisis de laboratorio"
            span="En nuestro laboratorio realizaremos las pruebas necesarias para terminar de completar la historia clínica"
          />
          <Circle
            number="03"
            text="Plan de tratamiento"
            span="Ya con los resultados definiremos el plan de tratamiento. Luego se haran los controles correspondientes con cada profesional."
          />
        </div>
      </section>
    </>
  );
};
export default Method;
