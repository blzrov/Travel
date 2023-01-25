import React from "react";
import "./Gallery.less";

import Carousel from "react-bootstrap/Carousel";

export default function Gallery({ media }) {
  return (
    <Carousel interval={null}>
      {media.map((e, i) => (
        <Carousel.Item key={i}>
          <img className="d-block w-100 gallery-img" src={e.url} alt={e.info} />
          <Carousel.Caption>
            <p>{e.info}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
