import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Like from "../components/Like";

import Gallery from "../components/Gallery";

export default function Travel() {
  return (
    <div>
      <Row>
        <Col sm={12} md={6}>
          <div className="img-travel">
            <div className="img-travel-bg"></div>
            <Like />
            <div className="img-travel-content">
              <h3>Река Исеть</h3>
              <div>
                Река на Урале и в Западной Сибири, левый приток реки Тобол.
                Протекает по территории Свердловской, Тюменской и Курганской
                областей.
              </div>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className="img-travel-aside">
            <div>Регион: Регион</div>
            <div>Организатор: Организатор</div>
            <div>Даты: 01.01.2000 - 02.12.2001</div>
            <div>Проводник: Вася Петров</div>
            <div>Стоимость: 19 000 ₽</div>
          </div>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <h2>Сплав по реке Исеть</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Gallery />
          <div>Отзывы // Вопросы и ответы</div>
        </Col>
      </Row>
    </div>
  );
}
