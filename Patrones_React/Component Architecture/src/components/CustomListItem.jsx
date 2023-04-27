import { ListItem, ListItemText } from '@mui/material';

const CustomListItem = ({ text, subText }) => {
	return (
		<ListItem>
			<ListItemText primary={text} secondary={subText} />
		</ListItem>
	);
};
export default CustomListItem;
