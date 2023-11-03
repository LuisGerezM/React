import { fadeIn } from '@/styles/animation.styles';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const CustomLink = styled(Link)`
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

      padding: 0.5rem 1rem;
      border-radius: 0.5rem;

      &:hover {
        filter: brightness(1.5);
      }
    `}

    ${fadeIn}

  &:hover {
    cursor: pointer;
  }
`;

export { CustomLink };
