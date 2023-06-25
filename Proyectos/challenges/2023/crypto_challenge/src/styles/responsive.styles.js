import { screenSizes } from './screen.styles';

export const responsive = {
	xsAndMin: `(max-width: ${screenSizes.xsMin}px)`, // to 320
	xs: `(max-width: ${screenSizes.xsMax}px)`, // to 767
	smPlus: `(min-width: ${screenSizes.smMin}px)`, // to 768
	smAndLess: `(max-width: ${screenSizes.smMax}px)`, // to 1023
	sm: `(min-width: ${screenSizes.smMin}px) and (max-width: ${screenSizes.smMax}px)`, // from 768 to 1023
	mdPlus: `(min-width: ${screenSizes.mdMin}px)`, // to 1024
	mdAndLess: `(max-width: ${screenSizes.mdMax}px)`, // to 1439
	md: `(min-width: ${screenSizes.mdMin}px) and (max-width: ${screenSizes.mdMax}px)`, // from 1024 to 1439
	lgPlus: `(min-width: ${screenSizes.lgMin}px)`, // to 1440
	lg: `(min-width: ${screenSizes.lgMin}px) and (max-width: ${screenSizes.lgMax}px)`, // from 1440 to 1799
	xl: `(min-width: ${screenSizes.xlMin}px)`, // to 1800
};
