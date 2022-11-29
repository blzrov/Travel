import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.svg";
import "./Header.less";

export default function Header() {
  const activeStyle = { textDecoration: "underline" };

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
            <NavLink
              className="NavLink"
              to="/PickTour"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Подобрать тур
            </NavLink>

            <NavLink
              className="NavLink"
              to="/Travels"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Путешествия
            </NavLink>

            <NavLink
              className="NavLink"
              to="/Organizers"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Организаторам
            </NavLink>

            <NavLink
              className="NavLink"
              to="/Help"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Помощь
            </NavLink>

            <NavLink
              className="NavLink"
              to="/Favorites"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Избранное
            </NavLink>

            <NavLink
              className="NavLink"
              to="/Login"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Вход
            </NavLink>

            <NavLink
              className="NavLink"
              to="/Profile"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Профиль
            </NavLink>

            <NavLink
              className="NavLink"
              to="/travels/1"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Travel
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
