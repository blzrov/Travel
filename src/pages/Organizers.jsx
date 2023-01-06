import React, { useState } from "react";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import CreateTravel from "../components/CreateTravel";

export default function Organizers() {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Ответить на вопросы" />
          <Tab label="Создать путешествие" />
        </Tabs>
      </Box>
      {value === 1 && <CreateTravel />}
    </div>
  );
}
