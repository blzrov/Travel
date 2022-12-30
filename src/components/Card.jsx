import React from "react";
import "./Card.less";

import { useNavigate } from "react-router-dom";
import moment from "moment";

import Like from "./Like";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function MyCard({ travel }) {
  const navigate = useNavigate();
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
        <Card.Title>{travel.place}</Card.Title>
        <Card.Text>{travel.placeDescription}</Card.Text>
        <Card.Text>{`${moment(travel.start)
          .utc()
          .format("MM.DD.YYYY")} - ${moment(travel.finish)
          .utc()
          .format("MM.DD.YYYY")}`}</Card.Text>
        <Card.Text>{travel.cost} ₽</Card.Text>
        <Button
          onClick={() => navigate(`/travels/${travel.id}`)}
          variant="primary"
        >
          Подробнее
        </Button>
      </Card.Body>
    </Card>
  );
}
