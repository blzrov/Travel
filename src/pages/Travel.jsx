import React, { useState, useEffect, useContext } from "react";
import "./Travel.less";

import { useLocation } from "react-router-dom";
import moment from "moment";

import Like from "../components/Like";
import Gallery from "../components/Gallery";
import TravelTabs from "../components/TravelTabs";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { LoginContext } from "../App";

export default function Travel() {
  const loginContext = useContext(LoginContext);
  const location = useLocation();
  const [travel, setTravel] = useState();
  const [modalShow, setModalShow] = useState(false);

  function getTravel() {
    const id = location.pathname.split("/").pop();
    async function doFetch() {
      const response = await fetch(
        `http://localhost:8080/travel/${id}?login=${loginContext}`
      );
      const result = await response.json();
      console.log(result);
      setTravel(result);
    }
    doFetch();
  }
  // eslint-disable-next-line
  useEffect(getTravel, []);

  async function joinTravel() {
    await fetch("http://localhost:8080/joinTravel/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ loginContext, id: travel.id }),
    });
    getTravel();
  }

  if (travel)
    return (
      <div className="mb-5">
        <Row>
          <Col sm={12} md={6}>
            <div className="travel-img-wrapper">
              <div
                style={{ backgroundImage: `url(${travel.media[0].url})` }}
                className="img-travel-bg"
              ></div>
              <Like isLiked={travel.isFavorite} id={travel.id} />
              <div className="img-travel-content">
                <h3>{travel.place}</h3>
                <div>{travel.placeDescription}</div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="travel-img-aside">
              <div>
                <b>Регион:</b> {travel.region}
              </div>
              <div>
                <b>Организатор:</b> {travel.organizer}
              </div>
              <div>
                <b>Даты:</b> {moment(travel.start).utc().format("MM.DD.YYYY")}
                {" - "}
                {moment(travel.finish).utc().format("MM.DD.YYYY")}
              </div>
              {/* <div>Проводник: {travel.guide}</div> */}
              <div>
                <b>Затраты:</b> {travel.cost} ₽
              </div>
              <div>
                <b>Свободные места:</b> {travel.seats - travel.seatsIsTaken}
                {" из "}
                {travel.seats}
              </div>
              <div>
                <Button
                  className="mt-5"
                  onClick={joinTravel}
                  variant="success"
                  type="button"
                  size={"lg"}
                  disabled={
                    !travel.canJoin ||
                    travel.organizer === loginContext ||
                    travel.members.filter((e) => e.login === loginContext)
                      .length > 0
                  }
                >
                  {travel.members.filter((e) => e.login === loginContext)
                    .length > 0
                    ? "Вы записаны, ура!"
                    : travel.organizer === loginContext
                    ? "Вы организатор"
                    : "Принять участие"}
                </Button>
                {travel.organizer === loginContext && (
                  <Button
                    onClick={() => setModalShow(true)}
                    className="ms-2 mt-5"
                    variant="info"
                    type="button"
                    size={"lg"}
                  >
                    Информация для организатора
                  </Button>
                )}
                <MyVerticallyCenteredModal
                  data={travel.members}
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h2>{travel.name}</h2>
            <p>{travel.description}</p>
            <Gallery media={travel.media} />
            <TravelTabs travel={travel} />
          </Col>
        </Row>
      </div>
    );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Участники</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.data.map((e, i) => (
          <div key={i} className="mb-2">
            <div>{e.name + " " + e.surname}</div>
            <div>{e.num}</div>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
}
