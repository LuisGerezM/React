import { List } from '@mui/material';
import CustomListItem from './CustomListItem';

const ListTasks = ({ tasks }) => {
	return (
		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			{tasks?.map((task, idx) => (
				<CustomListItem key={idx} {...task} />
			))}
		</List>
	);
};
export default ListTasks;
