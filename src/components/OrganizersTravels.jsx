import React, { useState, useContext } from "react";

import Card from "./Card";

import { LoginContext } from "../App";

export default function OrganizersTravels() {
  const loginContext = useContext(LoginContext);
  const [travels, setTravels] = useState([]);

  // eslint-disable-next-line
  function getOrganizersTravels() {
    async function doSearch() {
      const response = await fetch(
        `http://localhost:8080/myCreatedTravels/${loginContext}`
      );
      const result = await response.json();
      setTravels(result);
    }
    doSearch();
  }

  // useEffect(() => getOrganizersTravels);

  return (
    <div>
      {travels.map((e, i) => {
        return (
          <div key={i} className="my-3">
            <Card travel={e} />
          </div>
        );
      })}
    </div>
  );
}
