import { styled } from 'styled-components';

export const Form = styled.form`
  width: 75%;
  padding-top: 3rem;
  margin: auto;

  @media (${({ theme }) => theme.responsive.xs}) {
    width: 100%;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;
