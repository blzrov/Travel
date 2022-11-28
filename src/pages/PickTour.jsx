import React from "react";

import Item from "../components/Item";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import PickDate from "../components/PickDate";

export default function PickTour() {
  return (
    <div>
      <Row>
        <Col xs={12} md={3}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <h5>Даты</h5>
              <Row>
                <Col xs={6}>
                  <Form.Label>Начало не раньше:</Form.Label>
                  <PickDate />
                </Col>
                <Col xs={6}>
                  <Form.Label>Финиш не позднее:</Form.Label>
                  <PickDate />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h5>Длительность ( дней )</h5>
              <Row>
                <Col xs={6}>
                  <Form.Label>От</Form.Label>
                  <Form.Control type="number" placeholder="" />
                </Col>
                <Col xs={6}>
                  <Form.Label>До</Form.Label>
                  <Form.Control type="number" placeholder="" />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h5>Стоимость</h5>
              <Row>
                <Col xs={6}>
                  <Form.Label>От</Form.Label>
                  <Form.Control type="number" placeholder="" />
                </Col>
                <Col xs={6}>
                  <Form.Label>До</Form.Label>
                  <Form.Control type="number" placeholder="" />
                </Col>
              </Row>
            </Form.Group>
            <Button variant="success" type="submit">
              Найти
            </Button>
          </Form>
        </Col>

        <Col xs={12} md={9}>
          <div className="d-flex flex-wrap">
            <div className="flex-grow-1 bd-highlight">
              <Item className="m-1" />
            </div>
            <div className="flex-grow-1 bd-highlight">
              <Item className="m-1" />
            </div>
            <div className="flex-grow-1 bd-highlight">
              <Item className="m-1" />
            </div>
            <div className="flex-grow-1 bd-highlight">
              <Item className="m-1" />
            </div>
            <div className="flex-grow-1 bd-highlight">
              <Item className="m-1" />
            </div>
            <div className="flex-grow-1 bd-highlight">
              <Item className="m-1" />
            </div>
            <div className="flex-grow-1 bd-highlight">
              <Item className="m-1" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
