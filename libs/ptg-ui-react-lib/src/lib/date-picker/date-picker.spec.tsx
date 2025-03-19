import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PtgUiDatePicker } from './date-picker';
import { PtgUiDatePickerProps } from '../interfaces';

describe('PtgUiDatePicker', () => {
	const defaultProps: Readonly<PtgUiDatePickerProps> = {
		id: 'test-date-picker',
		placeholder: 'Select a date',
		value: '',
		onChange: jest.fn(),
		className: 'test-class',
		ariaLabel: 'date-picker'
	};

	it('renders the date input with correct attributes', () => {
		render(<PtgUiDatePicker {...defaultProps} />);

		const inputElement = screen.getByLabelText('date-picker');
		expect(inputElement).toBeInTheDocument();
		expect(inputElement).toHaveAttribute('type');
		expect(inputElement).toHaveAttribute('id');
		expect(inputElement).toHaveAttribute('placeholder');
		expect(inputElement).toHaveClass('test-class form-control');
	});

	it('displays the correct value when a date is provided', () => {
		const dateValue = new Date(2025, 2, 19); // March 19, 2025
		render(<PtgUiDatePicker {...defaultProps} value={dateValue} />);

		const inputElement = screen.getByLabelText('date-picker');
		expect(inputElement).toHaveValue('2025-03-19');
	});

	it('calls onChange callback when the date is changed', () => {
		render(<PtgUiDatePicker {...defaultProps} />);

		const inputElement = screen.getByLabelText('date-picker');
		fireEvent.change(inputElement, { target: { value: '2025-03-20' } });

		expect(defaultProps.onChange).toHaveBeenCalled();
		expect(defaultProps.onChange).toHaveBeenCalledWith(expect.any(Object));
	});

	it('displays the correct value when a string date is provided', () => {
		render(<PtgUiDatePicker {...defaultProps} value="2025-03-19" />);

		const inputElement = screen.getByLabelText('date-picker');
		expect(inputElement).toHaveValue('2025-03-19');
	});
});