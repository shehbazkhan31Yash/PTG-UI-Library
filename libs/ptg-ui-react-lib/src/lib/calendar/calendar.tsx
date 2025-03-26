import './calendar.css';
import { IPtgUiCalendarProps } from '../interfaces';

/**
 * PtgUiCalendar Component
 * 
 * A functional component that renders a date or datetime input field.
 * 
 * @param {Readonly<IPtgUiCalendarProps>} props - The props for the calendar component.
 * @param {string} props.className - Additional class names for styling the input.
 * @param {Date | string} props.selected - The currently selected date or datetime.
 * @param {function} props.onChange - Callback function to handle date changes.
 * @param {Date | string} props.startDate - The minimum selectable date.
 * @param {Date | string} props.endDate - The maximum selectable date.
 * @param {boolean} props.disabled - Indicates if the input should be disabled.
 * @param {boolean} props.isDateTime - Indicates if the input should be a datetime picker.
 * 
 * @returns {JSX.Element} A JSX element representing the calendar input.
 */
export const PtgUiCalendar = (props: Readonly<IPtgUiCalendarProps>) => {
	const {
		className,
		selected,
		onChange,
		startDate,
		endDate,
		disabled,
		isDateTime,
	} = props;
	const formatDate = (date: Date | string) => {
		if (date instanceof Date) {
			return date.toISOString().split('T')[0];
		}
		return date || '';
	};
	const formatDateTime = (date: Date | string) => {
		if (date instanceof Date) {
			return date.toISOString().slice(0, 16); // Format for datetime-local
		}
		return date || '';
	};
	return (
		<div className="position-relative post-icon">
			<div>
				<input
					className={className}
					type={isDateTime ? 'datetime-local' : 'date'}
					value={isDateTime ? formatDateTime(selected ?? '') : formatDate(selected ?? '')}
					onChange={onChange}
					min={isDateTime ? formatDateTime(startDate ?? '') : formatDate(startDate ?? '')}
					max={isDateTime ? formatDateTime(endDate ?? '') : formatDate(endDate ?? '')}
					disabled={disabled}
					aria-label="Select date"
				/>
			</div>
		</div>
	);
}
