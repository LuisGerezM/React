import { useState, useMemo, useEffect } from 'react';

import { addHours, differenceInSeconds } from 'date-fns';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import Modal from 'react-modal';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';

import { useUiStore, useCalendarStore } from '@/hooks';
import { userFeedbackMsg } from '@/helpers/userFeedbackMsg';
import { getEnvVariables } from '@/helpers';

registerLocale('es', es);

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

if (getEnvVariables().VITE_MODE !== 'test') {
	Modal.setAppElement('#root');
}

export const CalendarModal = () => {
	const { isDateModalOpen, closeDateModal, toggleDateModal } = useUiStore();
	const { activeEvent, startSavingEvent } = useCalendarStore();

	const [formSubmitted, setFormSubmitted] = useState(false);

	const [formValues, setFormValues] = useState({
		title: 'Luis',
		notes: 'Gerez',
		start: new Date(),
		end: addHours(new Date(), 2),
	});

	const titleClass = useMemo(() => {
		if (!formSubmitted) return '';

		return formValues.title.length > 0 ? 'is-valid' : 'is-invalid';
	}, [formValues.title, formSubmitted]);

	useEffect(() => {
		if (activeEvent !== null) {
			setFormValues({ ...activeEvent });
		}
	}, [activeEvent]);

	const onCloseModal = () => {
		// closeDateModal();
		toggleDateModal();
	};

	const onInputChanged = ({ target }) => {
		setFormValues({
			...formValues,
			[target.name]: target.value,
		});
	};

	const onDateChanged = (event, changing) => {
		setFormValues({
			...formValues,
			[changing]: event,
		});
	};

	const onSubmit = async event => {
		event.preventDefault();

		setFormSubmitted(true);

		const difference = differenceInSeconds(formValues.end, formValues.start);

		if (isNaN(difference) || difference <= 0) {
			userFeedbackMsg({
				title: 'Fechas incorrectas',
				subTitle: 'Revisar las fechas ingresadas',
				icon: 'error',
			});
			return;
		}

		if (formValues.title.length <= 0) return;

		await startSavingEvent(formValues);
		toggleDateModal();
		setFormSubmitted(false);
	};

	return (
		<Modal
			isOpen={isDateModalOpen}
			onRequestClose={onCloseModal}
			style={customStyles}
			className='modal'
			overlayClassName='modal-fondo'
			closeTimeoutMS={200}
		>
			<h1> Nuevo evento </h1>
			<hr />
			<form className='container' onSubmit={onSubmit}>
				<div className='form-group mb-2'>
					<label className='w-100'>Fecha y hora inicio</label>
					<DatePicker
						className='form-control'
						selected={formValues.start}
						onChange={event => onDateChanged(event, 'start')}
						dateFormat='Pp'
						locale='es'
						timeCaption='Hora'
						showTimeSelect
					/>
				</div>

				<div className='form-group mb-2'>
					<label className='w-100'>Fecha y hora fin</label>
					<DatePicker
						className='form-control'
						selected={formValues.end}
						onChange={event => onDateChanged(event, 'end')}
						dateFormat='Pp'
						minDate={formValues.start}
						locale='es'
						timeCaption='Hora'
						showTimeSelect
					/>
				</div>

				<hr />
				<div className='form-group mb-2'>
					<label>Titulo y notas</label>
					<input
						type='text'
						className={`form-control ${titleClass}`}
						placeholder='Título del evento'
						name='title'
						autoComplete='off'
						onChange={onInputChanged}
						value={formValues.title}
					/>
					<small id='emailHelp' className='form-text text-muted'>
						Una descripción corta
					</small>
				</div>

				<div className='form-group mb-2'>
					<textarea
						type='text'
						className='form-control'
						placeholder='Notas'
						rows='5'
						name='notes'
						onChange={onInputChanged}
						value={formValues.notes}
					></textarea>
					<small id='emailHelp' className='form-text text-muted'>
						Información adicional
					</small>
				</div>

				<button type='submit' className='btn btn-outline-primary btn-block'>
					<i className='far fa-save'></i>
					<span> Guardar</span>
				</button>
			</form>
		</Modal>
	);
};
