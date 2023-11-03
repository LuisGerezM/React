import { useNearScreen } from "hooks/useNearScreen";
import { useSelector } from "react-redux";
import { HrStyled } from "styled-components/App.styled";
import { WrapNewsFormStyled } from "views/News/styled-components/FormShowNews.styled";
import { FormNews } from "../FormNews";
import { WrapNewsButtonActions } from "../WrapNewsButtonActions";
import { WrapCreateAndEdit } from "../../WrapCreateAndEdit/WrapCreateAndEdit";

const { REACT_APP...: AR } = process.env;

export const ShowNewsSection = ({ item }) => {
  const {
    user: { email, role },
  } = useSelector((store) => store.user);

  const [show, ref] = useNearScreen();

  return (
    <>
      {item.active && (
        <WrapNewsFormStyled
          className="WrapNewsFormStyled"
          ref={ref}
          show={show}
        >
          {show && (
            <>
              {email && role && <WrapNewsButtonActions item={item} />}
              <FormNews item={item} />
              {email && role === AR && (
                <WrapCreateAndEdit
                  author={item.responsibleUser}
                  date={item.date}
                  editedBy={item.editedBy}
                  editedDate={item.editedDate}
                />
              )}
              <HrStyled />
            </>
          )}
        </WrapNewsFormStyled>
      )}
    </>
  );
};
