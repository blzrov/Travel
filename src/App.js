import React, { useState, createContext } from "react";

import "./App.less";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import Travels from "./pages/Travels";
import Travel from "./pages/Travel";
import Organizers from "./pages/Organizers";
import Help from "./pages/Help";
import Profile from "./pages/Profile";

import Container from "react-bootstrap/Container";
import Header from "./components/Header";

const LoginContext = createContext(null);

function App() {
  const [login, setLogin] = useState(
    () => localStorage.getItem("login") || null
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <LoginContext.Provider value={login}>
            {login && <Header />}
            <Routes>
              <Route path="/" element={<Login setLogin={setLogin} />} />
              <Route path="/Search" element={<Search />} />
              <Route path="/Favorites" element={<Favorites />} />
              <Route path="/Travels" element={<Travels />} />
              <Route path="/Travels/:id" element={<Travel />} />
              <Route path="/Organizers" element={<Organizers />} />
              <Route path="/Help" element={<Help />} />
              <Route
                path="/Profile"
                element={<Profile setLogin={setLogin} />}
              />
            </Routes>
          </LoginContext.Provider>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
export { LoginContext };
