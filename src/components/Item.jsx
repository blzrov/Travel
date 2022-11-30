import React from "react";

import "./Item.less";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Like from "./Like";

export default function Item() {
  function onClick() {
    //
  }

  return (
    <Card style={{ minWidth: "300px" }}>
      <div
        className="card-img-bg"
        style={{
          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/%D0%A1%D0%BA%D0%B0%D0%B7%D0%BA%D0%B0%2C%D0%9C%D0%B5%D1%87%D1%82%D0%B0%2C%D0%9A%D1%80%D0%B0%D1%81%D0%B0%D0%B2%D0%B8%D1%86%D0%B0.jpg/1920px-%D0%A1%D0%BA%D0%B0%D0%B7%D0%BA%D0%B0%2C%D0%9C%D0%B5%D1%87%D1%82%D0%B0%2C%D0%9A%D1%80%D0%B0%D1%81%D0%B0%D0%B2%D0%B8%D1%86%D0%B0.jpg)`,
        }}
      ></div>
      <Like />
      <Card.Body style={{ position: "relative", color: "white" }}>
        <Card.Title>Камчатка</Card.Title>
        <Card.Text>Поход вокруг Толбачика</Card.Text>
        <Card.Text>01.01.2000 - 02.12.2001</Card.Text>
        <Card.Text>19 000 ₽</Card.Text>
        <Button onClick={onClick} variant="primary">
          Подробнее
        </Button>
      </Card.Body>
    </Card>
  );
}
