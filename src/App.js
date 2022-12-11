import React from "react";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";
import Help from "./pages/Help";
import Organizers from "./pages/Organizers";
import Travels from "./pages/Travels";
import PickTour from "./pages/PickTour";
import Profile from "./pages/Profile";

import Travel from "./examples/Travel";

import "./App.less";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Container>
            <Routes>
              <Route path="/Login" element={<Login />} />
              <Route path="/Favorites" element={<Favorites />} />
              <Route path="/Help" element={<Help />} />
              <Route path="/Organizers" element={<Organizers />} />
              <Route path="/Travels" element={<Travels />} />
              <Route path="/PickTour" element={<PickTour />} />
              <Route path="/PickTour" element={<PickTour />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/PickTour/1" element={<Travel />} />
              <Route path="/Travels/1" element={<Travel />} />
              <Route path="/" element={<Login />} />
            </Routes>
          </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
