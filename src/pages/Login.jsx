import React, { useState } from "react";

import "./Login.less";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [result, setResult] = useState("");

  const postLogin = async () => {
    const response = await fetch("http://localhost:8080/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ login, password }),
    }); // завершается с заголовками ответа
    const result = await response.json(); // читать тело ответа в формате JSON
    setResult(result);
  };

  return (
    <div className="login-wrapper">
      <Row>
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
              <Button onClick={postLogin} variant="contained">
                Войти
              </Button>
            </div>
            <br />
            <div>
              <Button onClick={postLogin} variant="text" size="small">
                Зарегистрироваться
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
