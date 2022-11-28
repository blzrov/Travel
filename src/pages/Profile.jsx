import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Help() {
  return (
    <div>
      <Row>
        <Col md={4} className="m-auto">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <h5>Личные данные</h5>
              <Form.Label>Имя</Form.Label>
              <Form.Control type="" placeholder="" />
              <Form.Label>Фамилия</Form.Label>
              <Form.Control type="" placeholder="" />
              <Form.Label>Дата рождения</Form.Label>
              <Form.Control type="" placeholder="" />
              <Form.Label>Пол</Form.Label>
              <Form.Control type="" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <h5>Контактная информация</h5>
              <Form.Label>Номер телефона</Form.Label>
              <Form.Control type="" placeholder="" />
              <Form.Label>Город</Form.Label>
              <Form.Control type="" placeholder="" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Сохранить
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
