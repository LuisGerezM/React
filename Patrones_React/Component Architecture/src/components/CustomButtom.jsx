import { Button } from '@mui/material';

const CustomButtom = ({
	color = 'inherit',
	text,
	onClick,
	disabled = false
}) => {
	return (
		<Button color={color} onClick={onClick} disabled={disabled}>
			{text}
		</Button>
	);
};
export default CustomButtom;
