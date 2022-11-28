import * as React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Login() {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

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
