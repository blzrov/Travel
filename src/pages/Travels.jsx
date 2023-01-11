import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import FutureTravels from "../components/FutureTravels";
import HistoryTravels from "../components/HistoryTravels";

import { LoginContext } from "../App";

export default function Travels() {
  const loginContext = useContext(LoginContext);
  const [value, setValue] = useState(0);
  // eslint-disable-next-line
  const [travels, setTravels] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    async function getFuture() {
      const response = await fetch(
        `http://localhost:8080/future/${loginContext}`
      );
      const result = await response.json();
      console.log(result);
      setTravels(result);
    }

    async function getHistory() {
      const response = await fetch(
        `http://localhost:8080/history/${loginContext}`
      );
      const result = await response.json();
      console.log(result);
      setTravels(result);
    }

    if (value === 0) {
      getFuture();
    } else {
      getHistory();
    }
    // eslint-disable-next-line
  }, [value]);

  return (
    <div>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Ближайшие" />
          <Tab label="Архив" />
        </Tabs>
      </Box>
      {value === 0 && <FutureTravels />}
      {value === 1 && <HistoryTravels />}
    </div>
  );
}
