import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import PickDate from "../components/PickDate";
import PickRegion from "../components/PickRegion";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function SignUp(props) {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [birth, setBirth] = useState(null);
  const [sex, setSex] = useState(null);
  const [num, setNum] = useState(null);
  const [region, setRegion] = useState("");

  const signUp = async () => {
    const obj = {
      login,
      password,
      name: name,
      surname: surname,
      birth: birth,
      sex: sex,
      num: num,
      region: region,
    };
    const response = await fetch("http://localhost:8080/signUp/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(obj),
    });
    const result = await response.json();
    setResult(result);
    if (result) {
      props.setLogin(login);
      props.setIsSignIn(login);
      localStorage.setItem("login", login);
      navigate("/Search");
    }
  };

  return (
    <Row>
      <Col md={4} className="m-auto">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <h5>Регистрация</h5>
            <Form.Label>Логин</Form.Label>
            <Form.Control onChange={(e) => setLogin(e.target.value)} />
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Label>Имя</Form.Label>
            <Form.Control onChange={(e) => setName(e.target.value)} />
            <Form.Label>Фамилия</Form.Label>
            <Form.Control onChange={(e) => setSurname(e.target.value)} />
            <Form.Label>О себе</Form.Label>
            <Form.Control as="textarea" onChange={(e) => {}} />
            <Form.Label>Фото</Form.Label>
            <Form.Control type="file" size="sm" />
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
            <Button
              onClick={signUp}
              variant="contained"
              color={result ? "success" : "primary"}
            >
              Зарегистрироваться
            </Button>
          </div>
          <br />
          <div>
            <Button
              onClick={() => props.setIsSignIn(true)}
              variant="text"
              size="small"
            >
              Уже есть аккаунт? Войти
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
}
