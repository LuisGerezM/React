import { ButtonSubmit } from "components/Buttons/ButtonSubmit/ButtonSubmit";
import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { FormProvider } from "react-hook-form";
import { lenguageAppSchema } from "schemas/app.schema";
import { fieldFormCreateNews } from "schemas/news/formCreateNews.schema";
import { FloatingLabels } from "views/News/components/FloatingLabels/FloatingLabels";
import { useFormEditNews } from "views/News/hooks/useFormEditNews";
import {
  ModalHeaderStyled,
  ModalBodyStyled,
} from "../styled-components/Modal.styled";

export const ModalEditNews = ({ data }) => {
  const { register, errors, handleSubmit, onSubmit } = useFormEditNews(data);

  return (
    <>
      <ModalHeaderStyled closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {lenguageAppSchema("editNewsText")}
        </Modal.Title>
      </ModalHeaderStyled>
      <ModalBodyStyled>
        <FormProvider {...{ register, errors }}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FloatingLabels>{fieldFormCreateNews}</FloatingLabels>
            <ButtonSubmit textBtn="confirmText" />
          </Form>
        </FormProvider>
      </ModalBodyStyled>
    </>
  );
};
