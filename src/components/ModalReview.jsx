import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function ModalReview({ modalShow, setModalShow, selectedId }) {
  // eslint-disable-next-line
  const [review, setReview] = useState("");

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
              as="textarea"
              placeholder="Расскажите о впечатлениях"
            />
          </Form.Group>

          <Button
            onClick={() => setModalShow(false)}
            variant="primary"
            type="button"
          >
            Отправить
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
