import { css, styled } from 'styled-components';

export const SubTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.desktop.medium};
    color: ${props => props.theme.colors[props.color] || props.theme.colors.white};
    font-weight: ${props => theme.fontWeights[props.fontWeight]};
  `}

  @media (${({ theme }) => theme.responsive.xs}) {
    ${({ theme }) => css`
      font-size: ${theme.fontSizes.mobileAndTablet.medium};
    `}
  }
`;
