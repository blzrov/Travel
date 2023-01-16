import React, { useState, useEffect, useContext } from "react";

import Card from "./Card";
import ModalCheckList from "./ModalCheckList";

import { LoginContext } from "../App";

export default function FutureTravels() {
  const loginContext = useContext(LoginContext);
  const [modalShow, setModalShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [travels, setTravels] = useState([]);

  function onSubmit() {
    const obj = {
      region: null,
      start: null,
      finish: null,
      longMin: null,
      longMax: null,
      costMin: null,
      costMax: null,
      login: loginContext,
    };
    async function doSearch() {
      const response = await fetch("http://localhost:8080/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(obj),
      });
      const result = await response.json();
      setTravels(result);
    }
    doSearch();
  }
  // eslint-disable-next-line
  useEffect(onSubmit, []);

  return (
    <div>
      {travels.map((e, i) => {
        return (
          <div key={i} className="my-3">
            <Card
              travel={e}
              setModalShow={setModalShow}
              setSelectedId={setSelectedId}
            />
          </div>
        );
      })}
      <ModalCheckList
        modalShow={modalShow}
        setModalShow={setModalShow}
        selectedId={selectedId}
      />
    </div>
  );
}
