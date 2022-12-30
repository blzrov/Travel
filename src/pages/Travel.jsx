import React, { useState, useEffect } from "react";
import "./Travel.less";

import { useLocation } from "react-router-dom";
import moment from "moment";

import Like from "../components/Like";
import Gallery from "../components/Gallery";
import TravelTabs from "../components/TravelTabs";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Travel() {
  const location = useLocation();
  const [travel, setTravel] = useState();

  function getTravel() {
    const id = location.pathname.split("/").pop();
    async function doFetch() {
      const response = await fetch(`http://localhost:8080/travel/${id}`);
      const result = await response.json();
      console.log(result);
      setTravel(result);
    }
    doFetch();
  }
  // eslint-disable-next-line
  useEffect(getTravel, []);

  if (travel)
    return (
      <div className="mb-5">
        <Row>
          <Col sm={12} md={6}>
            <div className="travel-img-wrapper">
              <div className="img-travel-bg"></div>
              <Like />
              <div className="img-travel-content">
                <h3>{travel.place}</h3>
                <div>{travel.placeDescription}</div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="travel-img-aside">
              <div>Регион: {travel.region}</div>
              <div>Организатор: {travel.organizer}</div>
              <div>
                Даты: {moment(travel.start).utc().format("MM.DD.YYYY")}
                {" - "}
                {moment(travel.finish).utc().format("MM.DD.YYYY")}
              </div>
              <div>Проводник: {travel.guide}</div>
              <div>Затраты: {travel.cost} ₽</div>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h2>{travel.name}</h2>
            <p>{travel.description}</p>
            <Gallery />
            <TravelTabs />
          </Col>
        </Row>
      </div>
    );
}
