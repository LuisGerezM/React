import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        /* font-family: 'Rubik', sans-serif; */

        *, *::before, *:after {
            box-sizing: inherit;
        }

        a {
            text-decoration: none;
        }
        
        ul, li, h1, h2, h3, h4, h5, h6, p, button {
            margin: 0; 
            padding: 0;
        }

        ul { 
            list-style: none;
        }
        
        button {
            background: transparent;
            border: 0;
            outline: 0;
        }

        body {
            ${({ theme }) => css`
              background: linear-gradient(
                to bottom,
                ${theme.colors.neutralGreyLight200},
                ${theme.colors.neutralGreyLight}
              );
              font-family: ${theme.white};
            `}
            min-height: 100vh;
            max-width: 90%; 
            min-width: 300px;
            overscroll-behavior: none;
            height: 100%;
            width: 100%;
            margin: 0 auto;
            transition: 0.5s;

            &::-webkit-scrollbar {
                width: 12px;
                background: #e4e4e4;
            }

            &::-webkit-scrollbar-thumb {
                background:  ${({ theme }) => theme.colors.secondaryAzure};
                border-radius: 5px;
                border: 1px solid hsla(233, 22%, 15%, 0.55);
                border-right: 1px solid #e4e4e4;

                &:hover {
                background: ${({ theme }) => theme.colors.secondaryAzureDark700};
                border: 1px solid hsla(233, 22%, 15%, 0.85);
                border-right: 1px solid #e4e4e4;
                }

                &:active {
                background: ${({ theme }) => theme.colors.darkBlue};
                border: 1px solid hsla(233, 22%, 15%, 1);
                border-right: 1px solid #e4e4e4;
                }
            }
        }

        #root {
            padding-top: 3rem;
            width: 100%;
        }
    }
`;
