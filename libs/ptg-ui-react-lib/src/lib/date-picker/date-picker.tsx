import { PtgUiDatePickerProps } from '../interfaces';

/**
 * PtgUiDatePicker Component
 * 
 * A functional component that renders a date input field.
 * 
 * @param {Readonly<PtgUiDatePickerProps>} props - The props for the date picker component.
 * @param {string} props.id - The unique identifier for the input element.
 * @param {string} props.placeholder - The placeholder text for the input.
 * @param {Date | string} props.value - The currently selected date value.
 * @param {function} props.onChange - Callback function to handle date changes.
 * @param {string} props.className - Additional class names for styling the input.
 * @param {string} props.ariaLabel - The aria-label for accessibility.
 * 
 * @returns {JSX.Element} A JSX element representing the date input.
 */
export const PtgUiDatePicker = ({
	id,
	placeholder,
	value,
	onChange,
	className,
	ariaLabel
}: Readonly<PtgUiDatePickerProps>) => {
	return (
		<input
			type="date"
			className={`${className} form-control`}
			id={id}
			placeholder={placeholder}
			value={value instanceof Date ? value.toISOString().split('T')[0] : value ?? ''}
			onChange={onChange}
			aria-label={ariaLabel}
		/>
	);
}