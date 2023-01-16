import React, { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import PickDate from "../components/PickDate";
import PickRegion from "../components/PickRegion";

import { LoginContext } from "../App";

export default function Organizers() {
  const loginContext = useContext(LoginContext);
  const navigate = useNavigate();

  const [settings, setSettings] = useState({
    region: "",
    name: null,
    place: null,
    placeDescription: null,
    description: null,
    start: null,
    finish: null,
    cost: null,
    seats: null,
    organizer: loginContext,
    guide: loginContext,
  });

  function handleSettings(k, value) {
    setSettings((prev) => {
      return { ...prev, [`${k}`]: value };
    });
  }

  const [items, setItems] = useState([]);
  const [media, setMedia] = useState([]);

  function handleItems(value, i) {
    setItems((prev) => {
      const items = [...prev];
      items[i] = value;
      return items;
    });
  }

  function handleMediaInfo(value, i) {
    setMedia((prev) => {
      const media = [...prev];
      media[i].info = value;
      return media;
    });
  }

  const postTravel = async () => {
    const travel = { ...settings };
    travel.items = items;
    travel.media = media;
    console.log(travel);
    const response = await fetch("http://localhost:8080/travel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(travel),
    });
    const result = await response.json();
    navigate(`/Search/${result}`);
  };

  return (
    <Row>
      <Col md={8} className="m-auto">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Регион</Form.Label>
            <PickRegion
              onChange={(e) => handleSettings("region", e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Название</Form.Label>
            <Form.Control
              onChange={(e) => handleSettings("name", e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Локация</Form.Label>
            <Form.Control
              onChange={(e) => handleSettings("place", e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Описание локации</Form.Label>
            <Form.Control
              onChange={(e) =>
                handleSettings("placeDescription", e.target.value)
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Фотография локации</Form.Label>
            <Form.Control type="file" size="sm" />
          </Form.Group>

          {/* <Form.Group className="mb-3">
            <Form.Label>Организатор</Form.Label>
            <Form.Control onChange={(e) => setOrganizer(e.target.value)} />
          </Form.Group> */}

          {/* <Form.Group className="mb-3">
            <Form.Label>Гид</Form.Label>
            <Form.Control onChange={(e) => setGuide(e.target.value)} />
          </Form.Group> */}

          <Row className="mb-3">
            <Col xs={6}>
              <Form.Label>Дата старта</Form.Label>
              <PickDate
                value={settings.start}
                onChange={(e) => handleSettings("start", e)}
              />
            </Col>
            <Col xs={6}>
              <Form.Label>Дата финиша</Form.Label>
              <PickDate
                value={settings.finish}
                onChange={(e) => handleSettings("finish", e)}
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={6}>
              <Form.Group>
                <Form.Label>Затраты</Form.Label>
                <Form.Control
                  onChange={(e) => handleSettings("cost", e.target.value)}
                  type="number"
                />
              </Form.Group>
            </Col>

            <Col xs={6}>
              <Form.Group>
                <Form.Label>Количество мест</Form.Label>
                <Form.Control
                  onChange={(e) => handleSettings("seats", e.target.value)}
                  type="number"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Подробное описание путешествия</Form.Label>
            <Form.Control
              onChange={(e) => handleSettings("description", e.target.value)}
              as="textarea"
              rows={3}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Что взять с собой</Form.Label>
            <Button
              className="ms-2"
              onClick={() => {
                setItems((prev) => [...prev, ""]);
              }}
              variant="outline-primary"
              type="button"
              size="sm"
            >
              Добавить
            </Button>
            {items.map((e, i) => {
              return (
                <Form.Control
                  key={i}
                  onChange={(e) => handleItems(e.target.value, i)}
                  className="mb-2"
                  placeholder={`Предмет ${i + 1}`}
                />
              );
            })}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Фотографии</Form.Label>
            {media.map((e, i) => {
              return (
                <div key={i} className="mb-2">
                  <Row>
                    <Col xs={8}>
                      <Form.Control
                        onChange={(e) => handleMediaInfo(e.target.value, i)}
                        as="textarea"
                        placeholder="Описание"
                      />
                    </Col>
                    <Col xs={4}>
                      <div>Фото {i + 1}</div>
                      <Form.Control
                        type="file"
                        size="sm"
                        accept="image/png, image/jpeg"
                      />
                    </Col>
                  </Row>
                </div>
              );
            })}
            <div className="d-flex justify-content-end">
              <Button
                onClick={() => {
                  setMedia((prev) => [...prev, {}]);
                }}
                variant="outline-primary"
                type="button"
                size="sm"
              >
                Добавить
              </Button>
            </div>
          </Form.Group>

          <Button onClick={postTravel} variant="primary" type="button">
            Создать
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
