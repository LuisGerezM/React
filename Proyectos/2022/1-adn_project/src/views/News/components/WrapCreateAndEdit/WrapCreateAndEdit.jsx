import { RowCreateAndEditStyled } from "views/News/styled-components/WrapCreateAndEdit.styled";
import { ColCreateAndEdit } from "./ColCreateAndEdit";

export const WrapCreateAndEdit = ({ author, date, editedBy, editedDate }) => {
  return (
    <RowCreateAndEditStyled>
      <ColCreateAndEdit>
        {{
          text: "createdBy",
          textDate: "date",
          data: { type: author, date },
        }}
      </ColCreateAndEdit>
      {editedBy && (
        <ColCreateAndEdit>
          {{
            text: "editedBy",
            textDate: "date",
            data: { type: editedBy, date: editedDate },
          }}
        </ColCreateAndEdit>
      )}
    </RowCreateAndEditStyled>
  );
};
