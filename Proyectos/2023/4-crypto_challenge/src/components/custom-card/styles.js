import { fadeIn } from '@/styles/animation.styles';
import { css, styled } from 'styled-components';

export const Card = styled.article`
  background: ${props => props.background || props.theme.cards.customCard.background};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};

  display: flex;
  align-items: ${props => props.alignitems || 'stretch'};
  justify-content: ${props => props.justifycontent || 'center'};
  padding: 0.3rem;
  border: ${props => props.theme.cards.customCard.border};
  border-radius: 0.5rem;
  margin-bottom: 3.5rem;
  box-shadow: ${props => props.theme.boxShadow};
  ${fadeIn}

  ${props =>
    !props.deletemarginx &&
    css`
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    `}
`;
