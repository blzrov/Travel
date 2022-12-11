import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";
import { Button as ButtonBootstrap } from "react-bootstrap";
import { Button as ButtonMui } from "@mui/material";

import PickDate from "../components/PickDate";
import PickRegion from "../components/PickRegion";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Profile() {
  return (
    <div>
      <Row>
        <Col md={4} className="m-auto">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <h5>Личные данные</h5>
              <Form.Label>Имя</Form.Label>
              <Form.Control type="" placeholder="" />
              <Form.Label>Фамилия</Form.Label>
              <Form.Control type="" placeholder="" />
              <Form.Label>Дата рождения</Form.Label>
              <PickDate />
              <Form.Label className="mb-0">Пол</Form.Label>
              <RadioGroup
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
              <Form.Control type="number" placeholder="" />
              <Form.Label>Регион</Form.Label>
              <PickRegion />
            </Form.Group>
            <div>
              <ButtonBootstrap variant="success" type="button">
                Сохранить
              </ButtonBootstrap>
            </div>
            <br />
            <div>
              <ButtonMui variant="text" size="small" color="error">
                Выйти
              </ButtonMui>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
