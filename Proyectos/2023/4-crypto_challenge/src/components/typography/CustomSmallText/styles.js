import { css, styled } from 'styled-components';

export const SmallText = styled.h6`
	${({ theme }) => css`
			font-size: ${theme.fontSizes.desktop.extraSmall};
			color: ${props => props.theme.colors[props.color] || props.theme.colors.white};
			font-weight: ${theme.fontWeights.light};
		`}
	
	@media (${({ theme }) => theme.responsive.xs}){
		${({ theme }) => css`
			font-size: ${theme.fontSizes.mobileAndTablet.extraSmall};
		`}
	}
`;
