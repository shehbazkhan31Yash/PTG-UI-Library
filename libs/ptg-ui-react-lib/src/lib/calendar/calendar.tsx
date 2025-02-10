/* eslint-disable jsx-a11y/no-access-key */
/**
 * @since March 2022
 * @author Harsha Zalawa
 * @desc Reusable Calendar Component
 *
 */
import './calendar.scss';
//import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';
export interface CalendarProps {
	onChange?: any;
	date?: any;
	selected?: any;
	className?: any;
	startDate?: any;
	endDate?: any;
	disabled?: boolean;
	startRef?: any;
	onKeyDown?: any;
	accessKey?: string;
	showTimeSelect?: boolean;
	dateFormat?: string;
	isDateTime?: boolean;
}

export function PtgUiCalendar({
	className,
	selected,
	onChange,
	startDate,
	endDate,
	disabled,
	isDateTime,
	startRef,
	onKeyDown,
	accessKey,
	showTimeSelect,
	dateFormat = 'MM-dd-yyyy',
}: CalendarProps) {
	return (
		<div className="position-relative post-icon">
			<div>
				<input
					className={className}
					type={!isDateTime ? 'date' : 'datetime-local'}
					value={selected}
					onChange={onChange}
					min={startDate || ''}
					max={endDate || ''}
					disabled={disabled}
				/>
			</div>
		</div>
	);
}

export default PtgUiCalendar;
