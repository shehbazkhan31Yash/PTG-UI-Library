import { render, screen, fireEvent } from '@testing-library/react';
import { PtgUiDatePicker } from './date-picker';

describe('PtgUiDatePicker', () => {
	const mockSendSelectedDate = jest.fn();

	beforeEach(() => {
		render(<PtgUiDatePicker sendSelectedDate={mockSendSelectedDate} id="date-picker" className="test-class" />);
	});

	test('renders the date picker input', () => {
		const input = screen.getByPlaceholderText('Select a date');
		expect(input).toBeInTheDocument();
	});

	test('toggles calendar visibility on input click', () => {
		const input = screen.getByPlaceholderText('Select a date');
		fireEvent.click(input);
		expect(screen.getByText(/January/i)).toBeInTheDocument();
		fireEvent.click(input);
		expect(screen.queryByText(/January/i)).not.toBeInTheDocument();
	});

	test('selects a date and calls sendSelectedDate', () => {
		fireEvent.click(screen.getByPlaceholderText('Select a date'));
		fireEvent.click(screen.getByText('1'));
		expect(mockSendSelectedDate).toHaveBeenCalledWith(expect.stringMatching(/2023-01-01/));
		expect((screen.getByPlaceholderText('Select a date') as HTMLInputElement).value).toBe('2023-01-01');
	});

	test('navigates to the next month', () => {
		fireEvent.click(screen.getByPlaceholderText('Select a date'));
		fireEvent.click(screen.getByText('>'));
		expect(screen.getByText(/February/i)).toBeInTheDocument();
	});

	test('navigates to the previous month', () => {
		fireEvent.click(screen.getByPlaceholderText('Select a date'));
		fireEvent.click(screen.getByText('<'));
		expect(screen.getByText(/December/i)).toBeInTheDocument();
	});

	test('navigates to the next year', () => {
		fireEvent.click(screen.getByPlaceholderText('Select a date'));
		fireEvent.click(screen.getByText('>>'));
		expect(screen.getByText(/2024/i)).toBeInTheDocument();
	});

	test('navigates to the previous year', () => {
		fireEvent.click(screen.getByPlaceholderText('Select a date'));
		fireEvent.click(screen.getByText('<<'));
		expect(screen.getByText(/2022/i)).toBeInTheDocument();
	});

	test('closes calendar when clicking outside', () => {
		fireEvent.click(screen.getByPlaceholderText('Select a date'));
		expect(screen.getByText(/January/i)).toBeInTheDocument();
		fireEvent.mouseDown(document);
		expect(screen.queryByText(/January/i)).not.toBeInTheDocument();
	});
});