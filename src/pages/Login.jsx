import React, { useState } from "react";
import "./Login.less";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const doLogin = async () => {
    const response = await fetch("http://localhost:8080/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ login, password }),
    });
    const result = await response.json();
    setResult(result);
    if (result) {
      props.setLogin(login);
      navigate("/Search");
    }
  };

  return (
    <Row className="login-wrapper">
      <Col>
        <div className="login">
          <div>
            <TextField
              onChange={(e) => setLogin(e.target.value)}
              id="outlined-basic"
              label="Логин"
              variant="outlined"
            />
          </div>
          <br />
          <div>
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              id="outlined-basic"
              label="Пароль"
              variant="outlined"
              type="password"
            />
          </div>
          {result === false && "Ошибка"}
          {result === true && "Успешно"}
          <br />
          <div>
            <Button
              onClick={doLogin}
              variant="contained"
              color={result ? "success" : "primary"}
            >
              {result ? "Перейти на сервис" : "Войти"}
            </Button>
          </div>
          <br />
          <div>
            <Button onClick={doLogin} variant="text" size="small">
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}
