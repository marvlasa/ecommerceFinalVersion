import { Modal, Button } from "react-bootstrap";

function ModalCheckOut({ modalShow, setModalShow }) {
  return (
    <Modal
      size="md"
      aria-labelledby="checkout-modal-title"
      centered
      onHide={() => setModalShow(false)}
      show={modalShow}
    >
      <Modal.Header closeButton>
        <Modal.Title id="checkout-modal-title">Order Confirmed</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Thank you — Maison Bois</h4>
        <p>
          Your order has been placed successfully. We will process and ship it
          within 2–3 business days.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setModalShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCheckOut;
