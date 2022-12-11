import React, { useState, useEffect, useContext } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Button as ButtonBootstrap } from "react-bootstrap";
import { Button as ButtonMui } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import PickDate from "../components/PickDate";
import PickRegion from "../components/PickRegion";

import { User } from "../App";
import { useNavigate } from "react-router-dom";

export default function Profile(props) {
  const user = useContext(User);
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [birth, setBirth] = useState(null);
  const [sex, setSex] = useState();
  const [num, setNum] = useState();
  const [region, setRegion] = useState("d8327a56-80de-4df2-815c-4f6ab1224c50");

  useEffect(() => {
    async function getProfile() {
      const response = await fetch(`http://localhost:8080/profile/${user}`);
      const result = await response.json();
      console.log(result);
    }
    getProfile();
  }, [user]);

  async function onSubmit() {
    const obj = { name, surname, birth, sex, num, region };
    console.log(obj);
    const response = await fetch(`http://localhost:8080/profile/${user}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(obj),
    });
    const result = await response.json();
    console.log(result);
  }

  return (
    <Row>
      <Col md={4} className="m-auto">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <h5>Личные данные</h5>
            <Form.Label>Имя</Form.Label>
            <Form.Control onChange={(e) => setName(e.target.value)} />
            <Form.Label>Фамилия</Form.Label>
            <Form.Control onChange={(e) => setSurname(e.target.value)} />
            <Form.Label>Дата рождения</Form.Label>
            <PickDate value={birth} onChange={(e) => setBirth(e)} />
            <Form.Label className="mb-0">Пол</Form.Label>
            <RadioGroup
              onChange={(e) => setSex(e.target.value)}
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="male"
                control={<Radio size="small" />}
                label="Мужской"
              />
              <FormControlLabel
                value="female"
                control={<Radio size="small" />}
                label="Женский"
              />
              <FormControlLabel
                value="other"
                control={<Radio size="small" />}
                label="Other"
              />
            </RadioGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <h5>Контактная информация</h5>
            <Form.Label>Номер телефона</Form.Label>
            <Form.Control
              onChange={(e) => setNum(e.target.value)}
              type="number"
            />
            <Form.Label>Регион</Form.Label>
            <PickRegion onChange={(e) => setRegion(e.target.value)} />
          </Form.Group>
          <div>
            <ButtonBootstrap onClick={onSubmit} variant="success" type="button">
              Сохранить
            </ButtonBootstrap>
          </div>
          <br />
          <div>
            <ButtonMui
              onClick={() => {
                props.setLogin(null);
                navigate("/");
              }}
              variant="text"
              size="small"
              color="error"
            >
              Выйти
            </ButtonMui>
          </div>
        </Form>
      </Col>
    </Row>
  );
}
