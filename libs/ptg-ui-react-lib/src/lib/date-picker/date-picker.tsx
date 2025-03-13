/**
 * @since March 2022
 * @author Harsha Zalawa
 * @uses Reusable component for date picker.
 * https://www.npmjs.com/package/@material-ui/pickers
 */

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import './date-picker.scss';

/* eslint-disable-next-line */
export interface PtgUiDatePickerProps {
	variant?: any;
	format?: string;
	id?: string;
	placeholder?: string;
	value?: any;
	onChange?: any;
	className?: string;
	inputVariant?: any;
	ariaLabel?: any;
	// accessKey?: any,
	disableRipple?: boolean;
	disableTouchRipple?: boolean;
}

export function PtgUiDatePicker({
	variant,
	className = 'toolbarNone',
	format,
	id,
	placeholder,
	value,
	inputVariant = 'outlined',
	onChange,
	ariaLabel = 'date',
	// accessKey = 'c',
	disableRipple,
	disableTouchRipple,
}: PtgUiDatePickerProps) {
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<KeyboardDatePicker
				variant={variant}
				className={className}
				format={format}
				id={id}
				placeholder={placeholder}
				inputVariant={inputVariant}
				value={value}
				onChange={onChange}
				KeyboardButtonProps={{
					'aria-label': ariaLabel,
					// 'accessKey':accessKey,
					disableRipple: disableRipple,
					disableTouchRipple: disableTouchRipple,
				}}
			/>
		</MuiPickersUtilsProvider>
	);
}

export default PtgUiDatePicker;
