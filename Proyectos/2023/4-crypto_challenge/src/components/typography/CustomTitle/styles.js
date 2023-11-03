import { css, styled } from 'styled-components';

export const Title = styled.h1`
	${({ theme }) => css`
			font-size: ${theme.fontSizes.desktop.large};
			color: ${props => props.theme.colors[props.color] || props.theme.colors.white};
			font-weight: ${theme.fontWeights.heavy};
		`}
	
	@media (${({ theme }) => theme.responsive.xs}){
		${({ theme }) => css`
			font-size: ${theme.fontSizes.mobileAndTablet.large};
		`}
	}
`;
