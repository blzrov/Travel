import React, { useState, useEffect, useContext } from "react";

import Card from "./Card";
import ModalCheckList from "./ModalCheckList";

import { LoginContext } from "../App";

export default function FutureTravels({ travels }) {
  const [modalShow, setModalShow] = useState(false);
  const [itemsModal, setItemsModal] = useState([]);
  const [selectedID, setSelectedId] = useState([null]);

  return (
    <div>
      {travels.map((e, i) => {
        return (
          <div key={i} className="my-3">
            <Card
              travel={e}
              setModalShow={setModalShow}
              setSelectedId={setSelectedId}
              setItemsModal={setItemsModal}
            />
          </div>
        );
      })}
      <ModalCheckList
        modalShow={modalShow}
        setModalShow={setModalShow}
        selectedID={selectedID}
        items={itemsModal}
      />
    </div>
  );
}
