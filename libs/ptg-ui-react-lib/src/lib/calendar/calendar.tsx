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
	return (
		<div className="position-relative post-icon">
			<div>
				<input
					className={props.className}
					type={!props.isDateTime ? 'date' : 'datetime-local'}
					value={props.selected instanceof Date ? props.selected.toISOString().split('T')[0] : props.selected || ''}
					onChange={props.onChange}
					min={props.startDate instanceof Date ? props.startDate.toISOString().split('T')[0] : props.startDate || ''}
					max={props.endDate instanceof Date ? props.endDate.toISOString().split('T')[0] : props.endDate || ''}
					disabled={props.disabled}
				/>
			</div>
		</div>
	);
}
