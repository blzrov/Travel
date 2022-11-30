import React from "react";

import "./Gallery.less";
import Carousel from "react-bootstrap/Carousel";

export default function Gallery() {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <img
          className="d-block w-100 gallery-img"
          src={require("../img/altai.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Галерея</h3>
          <p>Описание к картинке</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 gallery-img"
          src={require("../img/altai.jpg")}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 gallery-img"
          src={require("../img/altai.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>{}</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
