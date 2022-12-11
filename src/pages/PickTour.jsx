import React, { useState, useEffect } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import PickDate from "../components/PickDate";
import PickRegion from "../components/PickRegion";
import Card from "../components/Card";

export default function PickTour() {
  // eslint-disable-next-line
  const [travels, setTravels] = useState([]);

  const [region, setRegion] = useState("d8327a56-80de-4df2-815c-4f6ab1224c50");
  const [start, setStart] = useState(null);
  const [finish, setFinish] = useState(null);
  const [longMin, setLongMin] = useState();
  const [longMax, setLongMax] = useState();
  const [costMin, setCostMin] = useState();
  const [costMax, setCostMax] = useState();

  function onSubmit() {
    const obj = { region, start, finish, longMin, longMax, costMin, costMax };
    async function doSearch() {
      const response = await fetch("http://localhost:8080/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(obj),
      });
      const result = await response.json();
      console.log(result);
      setTravels(result);
    }
    doSearch();
  }
  // eslint-disable-next-line
  useEffect(onSubmit, []);

  return (
    <div>
      <Row>
        <Col xs={12} md={3}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <h5>Регион</h5>
              <PickRegion onChange={(e) => setRegion(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <h5>Даты</h5>
              <Row>
                <Col xs={6}>
                  <Form.Label>Начало не раньше:</Form.Label>
                  <PickDate value={start} onChange={(e) => setStart(e)} />
                </Col>
                <Col xs={6}>
                  <Form.Label>Финиш не позднее:</Form.Label>
                  <PickDate value={finish} onChange={(e) => setFinish(e)} />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h5>Длительность ( дней )</h5>
              <Row>
                <Col xs={6}>
                  <Form.Label>От</Form.Label>
                  <Form.Control
                    onChange={(e) => setLongMin(e.target.value)}
                    type="number"
                  />
                </Col>
                <Col xs={6}>
                  <Form.Label>До</Form.Label>
                  <Form.Control
                    onChange={(e) => setLongMax(e.target.value)}
                    type="number"
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h5>Стоимость</h5>
              <Row>
                <Col xs={6}>
                  <Form.Label>От</Form.Label>
                  <Form.Control
                    onChange={(e) => setCostMin(e.target.value)}
                    type="number"
                  />
                </Col>
                <Col xs={6}>
                  <Form.Label>До</Form.Label>
                  <Form.Control
                    onChange={(e) => setCostMax(e.target.value)}
                    type="number"
                  />
                </Col>
              </Row>
            </Form.Group>
            <Button onClick={onSubmit} variant="success" type="button">
              Найти
            </Button>
          </Form>
        </Col>

        <Col xs={12} md={9}>
          <div className="d-flex flex-wrap">
            <div className="flex-grow-1 bd-highlight">
              <Card className="m-1" />
            </div>
            <div className="flex-grow-1 bd-highlight">
              <Card className="m-1" />
            </div>
            <div className="flex-grow-1 bd-highlight">
              <Card className="m-1" />
            </div>
            <div className="flex-grow-1 bd-highlight">
              <Card className="m-1" />
            </div>
            <div className="flex-grow-1 bd-highlight">
              <Card className="m-1" />
            </div>
            <div className="flex-grow-1 bd-highlight">
              <Card className="m-1" />
            </div>
            <div className="flex-grow-1 bd-highlight">
              <Card className="m-1" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
