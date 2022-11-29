import React from "react";

import "./Header.less";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.svg";

export default function Header() {
  const activeStyle = { textDecoration: "underline" };
  const style = ({ isActive }) => (isActive ? activeStyle : undefined);

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <NavLink className="NavLink" to="/">
          <img
            src={logo}
            width="124.8"
            height="66.4"
            className="d-inline-block align-top"
            alt=""
          />
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavLink className="NavLink" to="/PickTour" style={style}>
              Подобрать тур
            </NavLink>

            <NavLink className="NavLink" to="/Travels" style={style}>
              Путешествия
            </NavLink>

            <NavLink className="NavLink" to="/Organizers" style={style}>
              Организаторам
            </NavLink>

            <NavLink className="NavLink" to="/Help" style={style}>
              Помощь
            </NavLink>

            <NavLink className="NavLink" to="/Favorites" style={style}>
              Избранное
            </NavLink>

            <NavLink className="NavLink" to="/Login" style={style}>
              Вход
            </NavLink>

            <NavLink className="NavLink" to="/Profile" style={style}>
              Профиль
            </NavLink>

            <NavLink className="NavLink" to="/travels/1" style={style}>
              Travel
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
