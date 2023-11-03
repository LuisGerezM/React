import { WrapToogleBtngroupStyled } from "components/ToogleButtonGroup/styled-component/WrapToogleBtngroup.styled";
import { ToggleBtnGroup } from "components/ToogleButtonGroup/ToggleBtnGroup";
import { useSelector } from "react-redux";
import { actionsInNews } from "schemas/news/news.schema";
import { useNewsContext } from "views/News/context/NewsProvider";

export const NewsToggleButton = ({ clickToggleBtn, handleToggleBtnClick }) => {
  const {
    user: { role },
  } = useSelector((store) => store.user);

  const { state } = useNewsContext();

  return (
    <>
      {role && (
        <WrapToogleBtngroupStyled className="WrapToogleBtngroupStyled col col-12 btn-group">
          {!state.loadingNews &&
            actionsInNews.map((elements, idx) => (
              <div className="col col-5" key={idx}>
                <ToggleBtnGroup
                  handleToggleBtnClick={handleToggleBtnClick}
                  clickToggleBtn={clickToggleBtn}
                  elements={elements}
                  idx={idx}
                />
              </div>
            ))}
        </WrapToogleBtngroupStyled>
      )}
    </>
  );
};
