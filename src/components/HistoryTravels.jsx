import React, { useState, useEffect, useContext } from "react";

import Card from "./Card";
import ModalReview from "./ModalReview";

import { LoginContext } from "../App";

export default function HistoryTravels({ travels }) {
  const loginContext = useContext(LoginContext);
  const [modalShow, setModalShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

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
      <ModalReview
        login={loginContext}
        modalShow={modalShow}
        setModalShow={setModalShow}
        selectedId={selectedId}
      />
    </div>
  );
}
