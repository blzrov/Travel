import React, { useState } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import CreateTravel from "../components/CreateTravel";
import AnswerQuestions from "../components/AnswerQuestions";
import OrganizersTravels from "../components/OrganizersTravels";

export default function Organizers() {
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <Tabs
          variant="scrollable"
          scrollButtons
          value={value}
          onChange={handleChange}
        >
          <Tab label="Вы организатор" />
          <Tab label="Ответить на вопросы" />
          <Tab label="Создать путешествие" />
        </Tabs>
      </div>
      {value === 0 && <OrganizersTravels />}
      {value === 1 && <AnswerQuestions />}
      {value === 2 && <CreateTravel />}
    </div>
  );
}
