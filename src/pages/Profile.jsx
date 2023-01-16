import React, { useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";

import PickDate from "../components/PickDate";
import PickRegion from "../components/PickRegion";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Button as ButtonBootstrap } from "react-bootstrap";
import { Button as ButtonMui } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { LoginContext } from "../App";

export default function Profile({ setLogin }) {
  const loginContext = useContext(LoginContext);
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function getProfile() {
      const response = await fetch(
        `http://localhost:8080/profile/${loginContext}`
      );
      const result = await response.json();
      console.log(result);
      setProfile(result);
    }
    getProfile();
  }, [loginContext]);

  async function onSubmit() {
    // const obj = { ...profile };
    // await fetch(`http://localhost:8080/profile/${loginContext}`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(obj),
    // });
  }

  function logout() {
    setLogin(null);
    localStorage.removeItem("login");
    navigate("/");
  }

  if (profile)
    return (
      <Row>
        <Col md={4} className="m-auto">
          <Form>
            <Form.Group className="mb-3">
              <h5>Личные данные</h5>
              <Form.Label>Имя</Form.Label>
              <Form.Control value={profile.name} />
              <Form.Label>Фамилия</Form.Label>
              <Form.Control value={profile.surname} />
              <Form.Label>О себе</Form.Label>
              <Form.Control value={profile.about} as="textarea" />
              <Form.Label>Фото</Form.Label>
              <Form.Control type="file" size="sm" />
              <Form.Label>Дата рождения</Form.Label>
              <PickDate value={profile.birth} />
              <Form.Label className="mb-0">Пол</Form.Label>
              <RadioGroup
                value={profile.sex}
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
              <Form.Control value={profile.num} type="number" />
              <Form.Label>Регион</Form.Label>
              <PickRegion value={profile.region} />
            </Form.Group>
            <div>
              <ButtonBootstrap
                onClick={onSubmit}
                variant="success"
                type="button"
              >
                Сохранить
              </ButtonBootstrap>
            </div>
            <br />
            <div>
              <ButtonMui
                onClick={logout}
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
