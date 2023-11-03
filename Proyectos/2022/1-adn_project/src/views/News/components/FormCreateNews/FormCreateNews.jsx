import { ButtonSubmit } from "components/Buttons/ButtonSubmit/ButtonSubmit";
import { SpinnerLoad } from "components/SpinnerLoad/SpinnerLoad";
import { Form } from "react-bootstrap";
import { FormProvider } from "react-hook-form";
import { fieldFormCreateNews } from "schemas/news/formCreateNews.schema";
import { ColStyledWithAnimate } from "styled-components/animation.styled";
import { useFormCreateNews } from "views/News/hooks/useFormCreateNews";
import { FloatingLabels } from "../FloatingLabels/FloatingLabels";

export const FormCreateNews = ({ navigateToNews }) => {
  const { register, errors, handleSubmit, handleConfirm, loadingNewsSubmit } =
    useFormCreateNews(navigateToNews);

  return (
    <ColStyledWithAnimate className="col col-12 mt-3">
      <FormProvider {...{ register, errors }}>
        <Form onSubmit={handleSubmit(handleConfirm)}>
          <FloatingLabels>{fieldFormCreateNews}</FloatingLabels>
          {loadingNewsSubmit && <SpinnerLoad />}
          <ButtonSubmit textBtn="sendText" />
        </Form>
      </FormProvider>
    </ColStyledWithAnimate>
  );
};
