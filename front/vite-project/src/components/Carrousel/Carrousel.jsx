import Carousel from "react-bootstrap/Carousel";
import img1 from "./carrousel.png";
import img2 from "./carrousel2.png";
import img3 from "./carrousel3.png";
import styles from "../Carrousel/Carrousel.module.css"

function Carrousel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Carousel.Caption>
          <div className={styles.textCarrousel}>
          <h5>Tratamientos para mejorar tu calidad de vida</h5>
          <p>
            Profesionales expertos y actualizados. Laboratorio integrado.
            Servicio de calidad.
          </p>
          </div>
          <div className={styles.buttonSlide}>
        <a className="btn btn-primary" >
          Consultanos
        </a>
      </div>
        </Carousel.Caption>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;
