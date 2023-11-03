import { css, styled } from 'styled-components';

export const Button = styled.button`
  ${props =>
    props.withshadow === 'true' &&
    css`
      box-shadow: ${props => props.theme.boxShadow};
    `}

  ${props =>
    props.width &&
    css`
      width: ${props => props.width};
    `}

  ${props =>
    props.btnstylized &&
    css`
      background-color: ${props => props.theme.buttons[props.btnstylized].background};
      border: ${props => props.theme.buttons[props.btnstylized].border};

      padding: 0.5rem 0.5rem;
      border-radius: 0.5rem;
    `}

  &:hover {
    cursor: pointer;
    filter: brightness(1.5);
  }
`;
