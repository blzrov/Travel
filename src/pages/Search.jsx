import React, { useState, useEffect, useContext } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import PickDate from "../components/PickDate";
import PickRegion from "../components/PickRegion";
import Card from "../components/Card";

import { LoginContext } from "../App";

export default function Search() {
  const loginContext = useContext(LoginContext);
  const [travels, setTravels] = useState([]);
  const [settings, setSettings] = useState({
    region: "",
    start: new Date(),
    finish: null,
    longMin: null,
    longMax: null,
    costMin: null,
    costMax: null,
    login: loginContext,
  });

  function handleSettings(k, value) {
    setSettings((prev) => {
      return { ...prev, [`${k}`]: value };
    });
  }

  function onSubmit() {
    async function doSearch() {
      const response = await fetch("http://localhost:8080/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(settings),
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
    <Row>
      <Col xs={12} md={3}>
        <Form>
          <Form.Group className="mb-3">
            <h5>Регион</h5>
            <PickRegion
              onChange={(e) => handleSettings("region", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <h5>Даты</h5>
            <Row>
              <Col xs={6}>
                <Form.Label>Начало не раньше:</Form.Label>
                <PickDate
                  value={settings.start}
                  onChange={(e) => handleSettings("start", e)}
                />
              </Col>
              <Col xs={6}>
                <Form.Label>Финиш не позднее:</Form.Label>
                <PickDate
                  value={settings.finish}
                  onChange={(e) => handleSettings("finish", e)}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h5>Длительность ( дней )</h5>
            <Row>
              <Col xs={6}>
                <Form.Label>От</Form.Label>
                <Form.Control
                  onChange={(e) => handleSettings("longMin", e.target.value)}
                  type="number"
                />
              </Col>
              <Col xs={6}>
                <Form.Label>До</Form.Label>
                <Form.Control
                  onChange={(e) => handleSettings("longMax", e.target.value)}
                  type="number"
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h5>Затраты</h5>
            <Row>
              <Col xs={6}>
                <Form.Label>От</Form.Label>
                <Form.Control
                  onChange={(e) => handleSettings("costMin", e.target.value)}
                  type="number"
                />
              </Col>
              <Col xs={6}>
                <Form.Label>До</Form.Label>
                <Form.Control
                  onChange={(e) => handleSettings("costMax", e.target.value)}
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
          {travels.map((e, i) => {
            return (
              <div key={i} className="flex-grow-1 bd-highlight">
                <Card className="m-1" travel={e} />
              </div>
            );
          })}
        </div>
      </Col>
    </Row>
  );
}
