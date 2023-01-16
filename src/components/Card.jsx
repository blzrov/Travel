import React from "react";
import "./Card.less";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import moment from "moment";

import Like from "./Like";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function MyCard({ travel, setModalShow, setSelectedId }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Card style={{ minWidth: "300px" }}>
      <div
        className="card-img-bg"
        style={{
          backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/%D0%A1%D0%BA%D0%B0%D0%B7%D0%BA%D0%B0%2C%D0%9C%D0%B5%D1%87%D1%82%D0%B0%2C%D0%9A%D1%80%D0%B0%D1%81%D0%B0%D0%B2%D0%B8%D1%86%D0%B0.jpg/1920px-%D0%A1%D0%BA%D0%B0%D0%B7%D0%BA%D0%B0%2C%D0%9C%D0%B5%D1%87%D1%82%D0%B0%2C%D0%9A%D1%80%D0%B0%D1%81%D0%B0%D0%B2%D0%B8%D1%86%D0%B0.jpg)`,
        }}
      ></div>
      <Like isLiked={travel.isFavorite} id={travel.id} />
      <Card.Body style={{ position: "relative", color: "white" }}>
        <Card.Title>{travel.name}</Card.Title>
        <Card.Text>{travel.place}</Card.Text>
        {location.pathname === "/Travels" &&
          moment().isBefore(moment(travel.start)) && (
            <Card.Text>
              {"Дней до начала: "}
              {moment
                .duration(moment(travel.start).diff(moment()))
                .asDays()
                .toFixed(0)}
            </Card.Text>
          )}
        <Card.Text>{`${moment(travel.start)
          .utc()
          .format("DD.MM.YYYY")} - ${moment(travel.finish)
          .utc()
          .format("DD.MM.YYYY")}`}</Card.Text>
        <Card.Text>{travel.cost} ₽</Card.Text>
        {location.pathname === "/Organizers" && (
          <Card.Text>
            <b>Могут ли пенсионеры пройти данный поход?</b>
          </Card.Text>
        )}
        {location.pathname === "/Travels" &&
          moment().isAfter(moment(travel.start)) && (
            <Button
              onClick={() => {
                setSelectedId(travel.id);
                setModalShow(true);
              }}
              variant="success"
            >
              Оставить отзыв
            </Button>
          )}
        {(location.pathname === "/Search" ||
          location.pathname === "/Favorites" ||
          location.pathname === "/Organizers") && (
          <Button
            onClick={() => navigate(`/Search/${travel.id}`)}
            variant="primary"
          >
            Подробнее
          </Button>
        )}
        {location.pathname === "/Travels" && (
          <Button
            className="ms-2"
            onClick={() => navigate(`/travels/${travel.id}`)}
            variant="primary"
          >
            Подробнее
          </Button>
        )}
        {location.pathname === "/Travels" &&
          moment().isBefore(moment(travel.start)) && (
            <Button
              onClick={() => {
                setSelectedId(travel.id);
                setModalShow(true);
              }}
              className="ms-2"
              variant="outline-light"
            >
              Чеклист
            </Button>
          )}
        {location.pathname === "/Organizers" && (
          <Button
            onClick={() => {
              setSelectedId(travel.id);
              setModalShow(true);
            }}
            className="ms-2"
            variant="success"
          >
            Ответить
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
