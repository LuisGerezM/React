import { fadeIn } from '@/styles/animation.styles';
import { styled } from 'styled-components';

export const Alert = styled.div`
  width: ${props => props.widthAlert || '100%'};
  background: ${props => props.theme.buttons[props.type].background};
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  ${fadeIn}

  &:hover {
    filter: brightness(1.5);
  }
`;
