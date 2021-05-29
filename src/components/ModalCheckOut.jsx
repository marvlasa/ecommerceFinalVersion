import { Modal, Button } from "react-bootstrap";

function ModalCheckOut({ modalShow, setModalShow }) {
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => setModalShow(false)}
      show={modalShow}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Hackfurniture</h4>
        <p>Your order has been placed.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setModalShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCheckOut;
