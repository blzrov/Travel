import React, { useState } from "react";

import "./Login.less";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function onClick() {
    console.log({ login, password });
  }

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
            <br />
            <div>
              <Button onClick={onClick} variant="contained">
                Войти
              </Button>
            </div>
            <br />
            <div>
              <Button onClick={onClick} variant="text" size="small">
                Зарегистрироваться
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
