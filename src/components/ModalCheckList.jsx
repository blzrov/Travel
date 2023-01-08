import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

export default function ModalCheckList({
  modalShow,
  setModalShow,
  selectedId,
}) {
  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    console.log(newChecked);
    setChecked(newChecked);
  };

  return (
    <Modal
      size="lg"
      show={modalShow}
      onHide={() => setModalShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Взять с собой
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {["Лыжи", "Авто", "Очки"].map((value) => {
            return (
              <ListItem key={value} disablePadding>
                <ListItemButton onClick={handleToggle(value)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                    />
                  </ListItemIcon>
                  <ListItemText id={value} primary={`${value}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Button onClick={() => setModalShow(false)} variant="primary">
          Сохранить
        </Button>
      </Modal.Body>
    </Modal>
  );
}
