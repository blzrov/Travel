import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Like from "../components/Like";

export default function Help() {
  const [isLike, setIsLike] = React.useState(false);

  return (
    <div>
      <Row>
        <Col sm={12} md={6}>
          <div className="img-travel">
            <div className="img-travel-bg"></div>
            <Like />
            <div className="img-travel-content">
              <h3>Свердловская область</h3>
              <div>Краткое описание локации</div>
              <div>Лайк</div>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6}>
          <div className="img-travel-aside">
            <div>Организатор: Организатор</div>
            <div>Даты: 01.01.2000 - 02.12.2001</div>
            <div>Стоимость: 19 000 ₽</div>
          </div>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <h2>Поход на синие камни</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div>Галерея</div>
          <div>Отзывы // Вопросы и ответы</div>
        </Col>
      </Row>
    </div>
  );
}
