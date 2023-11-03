import { useState } from 'react';
import { Calendar } from 'react-big-calendar';

import 'react-big-calendar/lib/css/react-big-calendar.css';

import { CalendarEventBox, CalendarModal, FabAddNew, FabDelete, Nabvar } from '..';

import { getMessagesES, localizer } from '@/helpers';
import { useAuthStore, useCalendarStore, useUiStore } from '@/hooks';
import { useEffect } from 'react';

export const CalendarPage = () => {
	const { user } = useAuthStore();
	const { toggleDateModal } = useUiStore();
	const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();

	const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

	const eventStyleGetter = event => {
		const isMyEvent = user.uid === event.user._id || user.uid === event.user.uid;

		const style = {
			backgroundColor: isMyEvent ? '#347CF7' : '#465660',
			borderRadius: '0px',
			opacity: 0.8,
			color: 'white',
		};

		return {
			style,
		};
	};

	const onDoubleClick = event => {
		toggleDateModal();
	};

	const onSelect = event => {
		setActiveEvent(event);
	};

	const onViewChanged = event => {
		localStorage.setItem('lastView', event);
	};

	useEffect(() => {
		startLoadingEvents();
	}, []);

	return (
		<>
			<Nabvar />

			<Calendar
				culture='es'
				localizer={localizer}
				events={events}
				defaultView={lastView}
				startAccessor='start'
				endAccessor='end'
				style={{ height: 'calc( 100vh - 80px )' }}
				messages={getMessagesES()}
				eventPropGetter={eventStyleGetter}
				components={{
					event: CalendarEventBox,
				}}
				onDoubleClickEvent={onDoubleClick}
				onSelectEvent={onSelect}
				onView={onViewChanged}
			/>
			<CalendarModal />
			<FabAddNew />
			<FabDelete />
		</>
	);
};
