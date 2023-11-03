import { ButtonSubmit } from "components/Buttons/ButtonSubmit/ButtonSubmit";
import {
  ModalBodyStyled,
  ModalHeaderStyled,
} from "components/Modals/styled-components/Modal.styled";
import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { lenguageAppSchema } from "schemas/app.schema";
import { useModalConfirmQuestion } from "../hooks/useModalConfirmQuestion";

export const ModalConfirmQuestion = ({ data }) => {
  const { onSubmit } = useModalConfirmQuestion(data);

  return (
    <>
      <ModalHeaderStyled closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {lenguageAppSchema("confirmActionText")}
        </Modal.Title>
      </ModalHeaderStyled>
      <ModalBodyStyled>
        <Form onSubmit={onSubmit}>
          <ButtonSubmit textBtn="confirmText" />
        </Form>
      </ModalBodyStyled>
    </>
  );
};
