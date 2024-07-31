import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselReview() {

  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Carousel.Caption>
          <div>
          <h5>Tratamientos para mejorar tu calidad de vida</h5>
          <p>
            Profesionales expertos y actualizados. Laboratorio integrado.
            Servicio de calidad.
          </p>
          </div>
          <div>
        <a className="btn btn-primary" >
          Consultanos
        </a>
      </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

      </Carousel.Item>
      <Carousel.Item>

      </Carousel.Item>
    </Carousel>
  );
}


export default CarouselReview;