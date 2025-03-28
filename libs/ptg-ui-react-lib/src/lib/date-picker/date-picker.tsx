import { useEffect, useRef, useState } from 'react';
import './date-picker.css';
import { PtgUiDatePickerProps } from '@ptg-react-libs/interfaces';

/**
 * PtgUiDatePicker Component
 * 
 * A functional component that renders a custom date picker with a calendar popup.
 * 
 * @param {Readonly<PtgUiDatePickerProps>} props - The props for the date picker component.
 * @param {function} props.sendSelectedDate - Callback function to send the selected date to the parent component.
 * @param {string} props.id - The unique identifier for the input element.
 * @param {string} props.className - Additional class names for styling the input.
 * 
 * @returns {JSX.Element} A JSX element representing the date picker.
 */
export const PtgUiDatePicker = ({ sendSelectedDate, id, className }: Readonly<PtgUiDatePickerProps>) => {
	const [isCalendarOpen, setIsCalendarOpen] = useState(false);
	const [selectedDate, setSelectedDate] = useState<string | null>(null);
	const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
	const calendarRef = useRef<HTMLDivElement | null>(null);

	const toggleCalendar = () => {
		setIsCalendarOpen(prev => !prev);
	};

	const handleDateSelect = (day: number) => {
		const date = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
		setSelectedDate(date);
		if (sendSelectedDate) {
			sendSelectedDate(date);
		}
		setIsCalendarOpen(false);
	};

	const changeMonth = (increment: number) => {
		setCurrentMonth(prev => {
			const newMonth = (prev + increment + 12) % 12;
			if (newMonth === 0 && increment === -1) {
				setCurrentYear(year => year - 1);
			} else if (newMonth === 11 && increment === 1) {
				setCurrentYear(year => year + 1);
			}
			return newMonth;
		});
	};

	const changeYear = (increment: number) => {
		setCurrentYear(prev => prev + increment);
	};

	const renderCalendar = () => {
		const firstDay = new Date(currentYear, currentMonth, 1);
		const lastDay = new Date(currentYear, currentMonth + 1, 0);
		const daysInMonth = lastDay.getDate();
		const days: JSX.Element[] = [];

		for (let i = 0; i < firstDay.getDay(); i++) {
			days.push(<td key={`blank-${i}`}></td>);
		}

		for (let day = 1; day <= daysInMonth; day++) {
			days.push(
				<td key={day} onClick={() => handleDateSelect(day)}>{day}</td>
			);
		}

		const weeks: JSX.Element[] = [];
		for (let i = 0; i < days.length; i += 7) {
			weeks.push(<tr key={`week-${i / 7}`}>{days.slice(i, i + 7)}</tr>);
		}

		return (
			<table>
				<thead>
					<tr>
						<th colSpan={7}>{`${firstDay.toLocaleString('default', { month: 'long' })} ${currentYear}`}</th>
					</tr>
					<tr>
						{['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
							<th key={day} colSpan={1}>{day}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{weeks}
				</tbody>
			</table>
		);
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
				setIsCalendarOpen(false);
			}
		};
		window.addEventListener('mousedown', handleClickOutside);
		return () => {
			window.removeEventListener('mousedown', handleClickOutside);
		};
	}, [calendarRef]);

	return (
		<div className="date-picker">
			<input
				type="text"
				value={selectedDate || ''}
				onClick={toggleCalendar}
				readOnly
				placeholder="Select a date"
				className={`${className} form-control`}
				id={id}
			/>
			{isCalendarOpen && (
				<div className="calendar" ref={calendarRef}>
					<div className="calendar-controls">
						<button className='selectButton' onClick={() => changeYear(-1)}>&lt;&lt;</button>
						<button className='selectButton' onClick={() => changeMonth(-1)}>&lt;</button>
						<span className='showMonthAndYear'>{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}</span>
						<button className='selectButton' onClick={() => changeMonth(1)}>&gt;</button>
						<button className='selectButton' onClick={() => changeYear(1)}>&gt;&gt;</button>
					</div>
					<div className="calendar-days">{renderCalendar()}</div>
				</div>
			)}
		</div>
	);
}