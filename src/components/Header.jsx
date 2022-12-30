import React, { useContext } from "react";

import logo from "../img/logo.svg";

import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { LoginContext } from "../App";

export default function Header() {
  const loginContext = useContext(LoginContext);

  const style = ({ isActive }) =>
    isActive ? { textDecoration: "underline" } : { textDecoration: "none" };

  return (
    <Navbar collapseOnSelect expand="lg">
      <NavLink className="NavLink" to="/Search">
        <img
          src={logo}
          width="124.8"
          height="66.4"
          className="d-inline-block align-top"
          alt=""
        />
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <NavLink className="NavLink mx-2" to="/Search" style={style}>
            Подобрать тур
          </NavLink>

          <NavLink className="NavLink mx-2" to="/Travels" style={style}>
            Путешествия
          </NavLink>

          <NavLink className="NavLink mx-2" to="/Organizers" style={style}>
            Организаторам
          </NavLink>

          <NavLink className="NavLink mx-2" to="/Help" style={style}>
            Помощь
          </NavLink>

          <NavLink className="NavLink mx-2" to="/Favorites" style={style}>
            Избранное
          </NavLink>

          <NavLink className="NavLink mx-2" to="/Profile" style={style}>
            {loginContext}
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
