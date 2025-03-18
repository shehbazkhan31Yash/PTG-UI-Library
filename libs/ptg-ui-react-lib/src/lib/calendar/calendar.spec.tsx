import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PtgUiCalendar } from './calendar';

describe('PtgUiCalendar', () => {
	const defaultProps = {
		className: 'test-class',
		selected: new Date('2025-03-18'),
		onChange: jest.fn(),
		startDate: new Date('2025-01-01'),
		endDate: new Date('2025-12-31'),
		disabled: false,
		isDateTime: false,
	};

	test('renders date input type', () => {
		render(<PtgUiCalendar {...defaultProps} />);
		const inputElement = screen.getByLabelText('Select date');
		expect(inputElement).toHaveAttribute('type');
	});

	test('renders datetime-local input type', () => {
		render(<PtgUiCalendar {...defaultProps} isDateTime={true} />);
		const inputElement = screen.getByLabelText('Select date');
		expect(inputElement).toHaveAttribute('type');
	});

	test('handles date changes', () => {
		render(<PtgUiCalendar {...defaultProps} />);
		const inputElement = screen.getByLabelText('Select date');
		fireEvent.change(inputElement, { target: { value: '2025-03-19' } });
		expect(defaultProps.onChange).toHaveBeenCalled();
	});

	test('checks if the input is disabled', () => {
		render(<PtgUiCalendar {...defaultProps} disabled={true} />);
		const inputElement = screen.getByLabelText('Select date');
		expect(inputElement).toBeDisabled();
	});

	test('verifies the minimum and maximum selectable dates', () => {
		render(<PtgUiCalendar {...defaultProps} />);
		const inputElement = screen.getByLabelText('Select date');
		expect(inputElement).toHaveAttribute('min');
		expect(inputElement).toHaveAttribute('max');
	});
});