import './calendar.css';

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

export const PtgUiCalendar = ({
	className,
	selected,
	onChange,
	startDate,
	endDate,
	disabled,
	isDateTime,
}: CalendarProps) => {
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
