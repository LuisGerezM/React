import { useState } from 'react';
import { Header, ListTasks } from './components';

const App = () => {
	const [tasks, setTasks] = useState([
		{ text: 'Photos', subText: "'Jan 9, 2014'" },
		{ text: 'Work', subText: 'Jan 7, 2014' },
		{ text: 'Vacation', subText: 'July 20, 2014' }
	]);

	return (
		<div className='App'>
			<Header />
			<ListTasks tasks={tasks} />
		</div>
	);
};
export default App;
