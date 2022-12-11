import React, { useState } from "react";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";
import Help from "./pages/Help";
import Organizers from "./pages/Organizers";
import Travels from "./pages/Travels";
import Search from "./pages/Search";
import Profile from "./pages/Profile";

import Travel from "./pages/Travel";

import "./App.less";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const User = React.createContext(null);

function App() {
  const [login, setLogin] = useState("Profile");

  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <User.Provider value={login}>
            {login && <Header />}
            <Routes>
              <Route path="/Favorites" element={<Favorites />} />
              <Route path="/Help" element={<Help />} />
              <Route path="/Organizers" element={<Organizers />} />
              <Route path="/Travels" element={<Travels />} />
              <Route path="/Search" element={<Search />} />
              <Route path="/Profile" element={<Profile setLogin={setLogin} />} />
              <Route path="/Travels/1" element={<Travel />} />
              <Route path="/" element={<Login setLogin={setLogin} />} />
            </Routes>
          </User.Provider>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
export { User };
