import { IconButton } from '@mui/material';

const CustomIconButton = ({ size, edge, color, ariaLabel, sx, children }) => {
	return (
		<IconButton
			size={size}
			edge={edge}
			color={color}
			aria-label={ariaLabel}
			sx={{ sx }}
		>
			{children}
		</IconButton>
	);
};
export default CustomIconButton;
