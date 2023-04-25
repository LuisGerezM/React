import { Button, Modal } from "react-bootstrap";

export function MyVerticallyCenteredModal(props) {
  return (
    <Modal show={props.show} onHide={props.onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <h1>Estas seguro de que deseas eliminar: "{props?.data?.text}"</h1>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.handleConfirm(props.data, props.from)}>Confirm</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
