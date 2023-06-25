import { Button, Modal } from "react-bootstrap";
import { ModalEditNews } from "components/Modals/ModalsNews/ModalEditNews";
import { useModalConfirmContext } from "context/ModalConfirmProvier";
import { SpinnerLoad } from "components/SpinnerLoad/SpinnerLoad";
import { ModalDeleteNews } from "components/Modals/ModalsNews/ModalDeleteNews";
import { ModalFooterStyled } from "../styled-components/Modal.styled";
import { ModalConfirmQuestion } from "../ModalConfirmQuestion/ModalConfirmQuestion";
import { lenguageAppSchema } from "schemas/app.schema";
import { GlobalButton } from "components/Buttons/GlobalButton/GlobalButton";

export function ModalConfirmComponent(props) {
  const { reConfirm, loading } = useModalConfirmContext();

  const whatModal = {
    ModalEditNews: () => (
      <ModalEditNews data={props.data} handleConfirm={props.handleConfirm} />
    ),
    ModalDeleteNews: () => (
      <ModalDeleteNews data={props.data} handleConfirm={props.handleConfirm} />
    ),
    ModalConfirm: () => (
      <ModalConfirmQuestion
        data={props.data}
        handleConfirm={props.handleConfirm}
      />
    ),
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {props.child && whatModal[props.child]()}
      <ModalFooterStyled>
        {reConfirm && <div className="text-center">{reConfirm}</div>}
        <div className="col col-12 d-flex justify-content-center">
          {!loading && (
            <GlobalButton
              buttonClass="col col-10"
              color="danger"
              onClick={props.onHide}
              text={lenguageAppSchema("cancelText")}
            />
          )}
        </div>
      </ModalFooterStyled>
      {loading && <SpinnerLoad />}
    </Modal>
  );
}
