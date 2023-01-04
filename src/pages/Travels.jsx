import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Travels() {
  const [value, setValue] = React.useState(0);
  // eslint-disable-next-line
  const [travels, setTravels] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    async function getFuture() {
      const response = await fetch("http://localhost:8080/future/1");
      const result = await response.json();
      console.log(result);
      setTravels(result);
    }

    async function getHistory() {
      const response = await fetch("http://localhost:8080/history/1");
      const result = await response.json();
      console.log(result);
      setTravels(result);
    }

    if (value === 0) {
      getFuture();
    } else {
      getHistory();
    }
  }, [value]);

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Ближайшие" />
        <Tab label="Архив" />
      </Tabs>
    </Box>
  );
}
