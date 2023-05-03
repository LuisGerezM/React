import { customColors } from "App.styles";
import { ListGroup } from "react-bootstrap";
import styled from "styled-components";

const ListGroupStylized = styled(ListGroup)`
  outline: 2px outset ${customColors.secondaryColor};

  &:hover {
    outline: 2px inset ${customColors.secondaryColor};
  }
`;

const ListGroupItemStylized = styled(ListGroup.Item)`
  background-color: ${customColors.VeryDarkBlue};
`;

export { ListGroupStylized, ListGroupItemStylized };
