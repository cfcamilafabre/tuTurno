import styles from "../AboutUs/About.module.css"
export const About = () => {
  return (
    <div className={styles.sectionAbout}>
      <div className={styles.container}>
        <h4 className={styles.subtitleSection}>NOSOTROS</h4>
        <h3 className={styles.titleSection}>
          <strong>¿Quiénes somos?</strong>
        </h3>
        <p className={styles.pSection}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          culpa tenetur aperiam eos voluptates eaque fugiat. Beatae nemo amet
          voluptates molestias laborum debitis esse, iure rem, id dolorum,
          aliquid ratione?
        </p>
        <div className={styles.buttonContainer}>
        <a className="btn btn-primary" href="#">Ver más</a>
        </div>
      </div>
      <div className={styles.container}>
        <img src="/team2.jpg" alt="imagen del equipo de trabajo" className="img-thumbnail"></img>
      </div>
    </div>
  );
};
export default About;
