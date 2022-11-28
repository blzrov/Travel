import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import PickDate from "../components/PickDate";

export default function Organizers() {
  return (
    <div>
      <Row>
        <Col md={8} className="m-auto">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <h5>Создать путешествие</h5>
              <Form.Label>Название</Form.Label>
              <Form.Control type="" placeholder="" />
              <Form.Label>Локация</Form.Label>
              <Form.Control type="" placeholder="" />
              <Form.Label>Описание локации</Form.Label>
              <Form.Control type="" placeholder="" />
              <Form.Label>Организатор</Form.Label>
              <Form.Control type="" placeholder="" />
              <Form.Label>Проводник</Form.Label>
              <Form.Control type="" placeholder="" />
              <Row>
                <Col xs={6}>
                  <Form.Label>Дата старта</Form.Label>
                  <PickDate />
                </Col>
                <Col xs={6}>
                  <Form.Label>Дата финиша</Form.Label>
                  <PickDate />
                </Col>
              </Row>
              <Form.Label>Подробное описание путешествия</Form.Label>
              <Form.Control as="textarea" rows={3} />
              <Form.Label>Стоимость</Form.Label>
              <Form.Control type="number" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <h5>Контактная информация</h5>
              <Form.Label>Номер телефона</Form.Label>
              <Form.Control type="" placeholder="" />
              <Form.Label>Город</Form.Label>
              <Form.Control type="" placeholder="" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Создать
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
