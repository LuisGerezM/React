import { css, styled } from 'styled-components';

export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.7rem 1rem;
  border: 1px solid ${props => props.theme.colors.neutralGreyDark600};
  border-radius: 8px;

  ${({ theme }) => css`
    font-size: ${theme.fontSizes.desktop.small};
    color: ${props => props.theme.colors[props.color] || props.theme.colors.darkblue};
    font-weight: ${theme.fontWeights.bold};
  `}

  @media (${({ theme }) => theme.responsive.xs}) {
    ${({ theme }) => css`
      font-size: ${theme.fontSizes.mobileAndTablet.small};
    `}
  }

  &:focus {
    border-color: ${props =>
      props.theme.colors.skyBlue}; /* Cambia el color del borde al azul deseado */
    outline: none; /* Elimina el contorno predeterminado en el foco */
    box-shadow: 0 0 5px blue; /* Agrega una sombra alrededor del input cuando está enfocado */
  }
`;
