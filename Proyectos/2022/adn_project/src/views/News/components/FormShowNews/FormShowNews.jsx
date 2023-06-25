import { AlertMessageError } from "components/Alerts/AlertMessages/AlertMessageError";
import { SpinnerLoad } from "components/SpinnerLoad/SpinnerLoad";
import { useModalConfirmContext } from "context/ModalConfirmProvier";
import { lenguageAppSchema } from "schemas/app.schema";
import { ColStyledWithAnimate } from "styled-components/animation.styled";
import { useNewsContext } from "views/News/context/NewsProvider";
import { useFormShowNews } from "views/News/hooks/useFormShowNews";
import { RenderSection } from "./FormNewsSections/RenderSection";
import { HeaderSection } from "./FormNewsSections/HeaderSection";

export const FormShowNews = () => {
  const { dataToConfirm, handleResetDataConfirm } = useModalConfirmContext();

  const { state, dispatch, messageError } = useNewsContext();

  useFormShowNews(dispatch, dataToConfirm, handleResetDataConfirm);

  if (state.loadingNews) return <SpinnerLoad />;

  return (
    <ColStyledWithAnimate className="col col-12">
      <HeaderSection />
      <AlertMessageError
        messageError={messageError}
        textError={
          messageError.message
            ? messageError.message
            : lenguageAppSchema("thereAreProblemsTryLater")
        }
      />
      {!messageError && <RenderSection />}
    </ColStyledWithAnimate>
  );
};
