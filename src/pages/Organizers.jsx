import React, { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import PickDate from "../components/PickDate";
import PickRegion from "../components/PickRegion";

export default function Organizers() {
  const [region, setRegion] = useState("d8327a56-80de-4df2-815c-4f6ab1224c50");
  const [name, setName] = useState();
  const [place, setPlace] = useState();
  const [placeDescription, setPlaceDescription] = useState();
  const [organizer, setOrganizer] = useState();
  const [guide, setGuide] = useState();
  const [start, setStart] = useState(null);
  const [finish, setFinish] = useState(null);
  const [description, setDescription] = useState();
  const [cost, setCost] = useState();

  const postTravel = async () => {
    const travel = {
      region,
      name,
      place,
      placeDescription,
      organizer,
      guide,
      start,
      finish,
      description,
      cost,
    };
    const response = await fetch("http://localhost:8080/travel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(travel),
    });
    const result = await response.json();
  };

  return (
    <div>
      <Row>
        <Col md={8} className="m-auto">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <h5>Создать путешествие</h5>
              <Form.Label>Регион</Form.Label>
              <PickRegion onChange={(e) => setRegion(e.target.value)} />
              <Form.Label>Название</Form.Label>
              <Form.Control onChange={(e) => setName(e.target.value)} />
              <Form.Label>Локация</Form.Label>
              <Form.Control onChange={(e) => setPlace(e.target.value)} />
              <Form.Label>Описание локации</Form.Label>
              <Form.Control
                onChange={(e) => setPlaceDescription(e.target.value)}
              />
              <Form.Label>Организатор</Form.Label>
              <Form.Control onChange={(e) => setOrganizer(e.target.value)} />
              <Form.Label>Гид</Form.Label>
              <Form.Control onChange={(e) => setGuide(e.target.value)} />
              <Row>
                <Col xs={6}>
                  <Form.Label>Дата старта</Form.Label>
                  <PickDate value={start} onChange={(e) => setStart(e)} />
                </Col>
                <Col xs={6}>
                  <Form.Label>Дата финиша</Form.Label>
                  <PickDate value={finish} onChange={(e) => setFinish(e)} />
                </Col>
              </Row>
              <Form.Label>Подробное описание путешествия</Form.Label>
              <Form.Control
                onChange={(e) => setDescription(e.target.value)}
                as="textarea"
                rows={3}
              />
              <Form.Label>Затраты</Form.Label>
              <Form.Control
                onChange={(e) => setCost(e.target.value)}
                type="number"
                placeholder=""
              />
            </Form.Group>
            <Button onClick={postTravel} variant="primary" type="button">
              Создать
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
