import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PtgUiRadio from './radio';
import { PtgUiRadioProps } from '@ptg-react-libs/interfaces';
import '@testing-library/jest-dom';

const mockOnChange = jest.fn();

const defaultProps: PtgUiRadioProps = {
	name: 'testRadio',
	value: '1',
	id: 'testRadio',
	onChange: mockOnChange,
	list: [
		{ id: '1', name: 'Option 1', value: '1' },
		{ id: '2', name: 'Option 2', value: '2' },
	],
};

describe('PtgUiRadio Component', () => {
	it('renders radio buttons correctly', () => {
		render(<PtgUiRadio {...defaultProps} />);
		const radio1 = screen.getByLabelText('Option 1');
		const radio2 = screen.getByLabelText('Option 2');
		expect(radio1).toBeInTheDocument();
		expect(radio2).toBeInTheDocument();
		expect((radio1 as HTMLInputElement).checked).toBe(true);
		expect((radio2 as HTMLInputElement).checked).toBe(false);
	});

	it('calls onChange when a radio button is clicked', () => {
		render(<PtgUiRadio {...defaultProps} />);
		const radio2 = screen.getByLabelText('Option 2');
		fireEvent.click(radio2);
		expect(mockOnChange).toHaveBeenCalledTimes(1);
		expect((radio2 as HTMLInputElement).checked).toBe(false);
	});

	it('renders with the correct data-testid attribute', () => {
		render(<PtgUiRadio {...defaultProps} />);
		const radio1 = screen.getByTestId('Option 1');
		const radio2 = screen.getByTestId('Option 2');
		expect(radio1).toBeInTheDocument();
		expect(radio2).toBeInTheDocument();
	});
});
