import styled from "styled-components";
import { FormControl } from "react-bootstrap";

const FormControlStylized = styled(FormControl)`
  color: ${({ theme }) => theme.primaryColor}!important;
  text-decoration: none;
`;

export { FormControlStylized };
