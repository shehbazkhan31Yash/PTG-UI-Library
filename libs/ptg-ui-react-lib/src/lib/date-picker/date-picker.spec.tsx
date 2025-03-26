import { render, screen, fireEvent } from '@testing-library/react';
import { PtgUiDatePicker } from './date-picker';

test('renders date picker component', () => {
	render(<PtgUiDatePicker sendSelectedDate={jest.fn()} id="test-date-picker" className="test-class" />);
	const inputElement = screen.getByPlaceholderText(/select a date/i);
	expect(inputElement).toBeInTheDocument();
});

test('toggles calendar popup', () => {
	render(<PtgUiDatePicker sendSelectedDate={jest.fn()} id="test-date-picker" className="test-class" />);
	const inputElement = screen.getByPlaceholderText(/select a date/i);
	fireEvent.click(inputElement);
	const calendarElement = screen.getByRole('table');
	expect(calendarElement).toBeInTheDocument();
	fireEvent.mouseDown(document);
	expect(calendarElement).not.toBeInTheDocument();
});

test('selects a date', () => {
	const mockSendSelectedDate = jest.fn();
	render(<PtgUiDatePicker sendSelectedDate={mockSendSelectedDate} id="test-date-picker" className="test-class" />);
	const inputElement = screen.getByPlaceholderText(/select a date/i);
	fireEvent.click(inputElement);
	const dayElement = screen.getByText('15');
	fireEvent.click(dayElement);
	expect((inputElement as HTMLInputElement).value).toBe('2025-03-15');
	expect(mockSendSelectedDate).toHaveBeenCalledWith('2025-03-15');
});

test('changes month and year', () => {
	render(<PtgUiDatePicker sendSelectedDate={jest.fn()} id="test-date-picker" className="test-class" />);
	const inputElement = screen.getByPlaceholderText(/select a date/i);
	fireEvent.click(inputElement);
	const monthSelect = screen.getByDisplayValue('March');
	fireEvent.change(monthSelect, { target: { value: '4' } });
	expect(screen.getByText('April 2025')).toBeInTheDocument();
	const yearSelect = screen.getByDisplayValue('2025');
	fireEvent.change(yearSelect, { target: { value: '2026' } });
	expect(screen.getByText('April 2026')).toBeInTheDocument();
});