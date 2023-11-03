import { css, styled } from 'styled-components';

export const Text = styled.h4`
  text-align: ${props => props.textalign};
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.desktop.small};
    color: ${props => props.theme.colors[props.color] || props.theme.colors.white};
    font-weight: ${props => theme.fontWeights[props.fontWeight]};
  `}

  @media (${({ theme }) => theme.responsive.xs}) {
    ${({ theme }) => css`
      font-size: ${theme.fontSizes.mobileAndTablet.small};
    `}
  }
`;
