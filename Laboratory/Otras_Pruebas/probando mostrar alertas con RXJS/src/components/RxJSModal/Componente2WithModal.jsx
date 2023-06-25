import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { sharingInformationWithModalService } from "../../services/sharing-information-with-modal-service";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal show={props.show} onHide={props.onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <h1>Estas seguro de que deseas eliminar: "{props?.text}"</h1>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.handleConfirm()}>Confirm</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export const Componente2WithModal = () => {
  const [modalShow, setModalShow] = useState(false);
  const [receivedData, setReceivedData] = useState("");

  const subscription$ = sharingInformationWithModalService.getSubject();

  const handleConfirm = () => {
    console.log("handleConfirm", receivedData.from);

    console.log({ receivedData });
    sharingInformationWithModalService.setSubject({
      from: receivedData.from,
      action: "confirm",
      idToDelete: receivedData.data.id,
    });
    setModalShow(false);
  };
  console.log({ subscription$ });

  useEffect(() => {
    subscription$.subscribe((data) => {
      if (data && data.objectToSend?.data.showModalConfirm) {
        setReceivedData(data.objectToSend);
        setModalShow(data.objectToSend.data.showModalConfirm);
      }
    });
  }, []);

  return (
    <div>
      Component2
      <hr />
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} handleConfirm={handleConfirm} text={receivedData.data?.text} />
    </div>
  );
};
