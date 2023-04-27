import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Toolbar } from '@mui/material';
import CustomButtom from './CustomButtom';
import CustomTypography from './CustomTypography';
import CustomIconButton from './CustomIconButton';

const Header = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<CustomIconButton
						size='large'
						edge='start'
						color='inherit'
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</CustomIconButton>
					<CustomTypography sx={{ flexGrow: 1 }} text='news' />
					<CustomButtom text='Login' />
				</Toolbar>
			</AppBar>
		</Box>
	);
};
export default Header;
