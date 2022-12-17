import React, { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextField from "@mui/material/TextField";
import { Button as ButtonMui } from "@mui/material";

import { useNavigate } from "react-router-dom";

export default function SignIn(props) {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const signIn = async () => {
    const response = await fetch("http://localhost:8080/signIn/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ login, password }),
    });
    const resultResp = await response.json();
    setResult(resultResp);
    if (resultResp) {
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
            <ButtonMui onClick={signIn} variant="contained" color="primary">
              Войти
            </ButtonMui>
          </div>
          <br />
          <div>
            <ButtonMui
              onClick={() => props.setIsLogin(false)}
              variant="text"
              size="small"
            >
              Зарегистрироваться
            </ButtonMui>
          </div>
        </div>
      </Col>
    </Row>
  );
}
