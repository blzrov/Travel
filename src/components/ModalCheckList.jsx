import Modal from "react-bootstrap/Modal";

export default function ModalCheckList({
  modalShow,
  setModalShow,
  selectedId,
}) {
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
      <Modal.Body>Взять с собой</Modal.Body>
    </Modal>
  );
}
