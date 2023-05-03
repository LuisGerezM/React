import { Typography } from '@mui/material';

const CustomTypography = ({ variant = 'h6', component = 'div', sx, text }) => {
	return (
		<Typography variant={variant} component={component} sx={sx}>
			{text}
		</Typography>
	);
};
export default CustomTypography;
