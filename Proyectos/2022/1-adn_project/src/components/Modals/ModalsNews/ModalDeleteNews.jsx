import { ButtonSubmit } from "components/Buttons/ButtonSubmit/ButtonSubmit";
import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { lenguageAppSchema } from "schemas/app.schema";
import { useModalDeleteNews } from "../hooks/useModalDeleteNews";
import {
  ModalBodyStyled,
  ModalHeaderStyled,
} from "../styled-components/Modal.styled";

export const ModalDeleteNews = ({ data }) => {
  const { onSubmit } = useModalDeleteNews(data);

  return (
    <>
      <ModalHeaderStyled closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {lenguageAppSchema("deleteNewsText")}
        </Modal.Title>
      </ModalHeaderStyled>
      <ModalBodyStyled>
        <div className="my-2">
          {lenguageAppSchema("areYouSureDeleteText")} {data.title}
        </div>
        <Form onSubmit={onSubmit}>
          <ButtonSubmit textBtn="confirmText" />
        </Form>
      </ModalBodyStyled>
    </>
  );
};
