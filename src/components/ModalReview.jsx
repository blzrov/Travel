import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function ModalReview({
  modalShow,
  setModalShow,
  selectedId,
  login,
}) {
  // eslint-disable-next-line
  const [review, setReview] = useState("");

  const onSubmit = async () => {
    const response = await fetch("http://localhost:8080/leaveFeedback/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ reviews: review, login, id: selectedId }),
    });
    const result = await response.json();
    setModalShow(false);
    console.log(result)
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
          Оставить отзыв
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={(e) => setReview(e.target.value)}
              as="textarea"
              placeholder="Расскажите о впечатлениях"
            />
          </Form.Group>

          <Button onClick={onSubmit} variant="primary" type="button">
            Отправить
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
