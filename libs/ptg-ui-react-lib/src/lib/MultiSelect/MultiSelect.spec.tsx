import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PtgUiSelectbox } from './MultiSelect';

describe('PtgUiSelectbox Component', () => {
	const mockProps = {
		name: 'test-select',
		list: [
			{ value: '1', label: 'Option 1' },
			{ value: '2', label: 'Option 2' },
		],
		onSelect: jest.fn(),
		selectedOption: '',
		width: '200px',
		multiSelectOptions: [],
		toggleDropdown: jest.fn(),
		dropdownOpen: false,
		singleSelect: true,
		removeItem: jest.fn(),
		placeholder: 'Select an option',
	};

	it('renders single select dropdown correctly', () => {
		render(<PtgUiSelectbox {...mockProps} />);
		const selectElement = screen.getByRole('combobox');
		expect(selectElement).toBeInTheDocument();
		expect(selectElement).toHaveStyle({ width: '200px' });
		expect(screen.getByText('Select an option')).toBeInTheDocument();
	});

	it('calls onSelect when an option is selected in single select', () => {
		render(<PtgUiSelectbox {...mockProps} />);
		const selectElement = screen.getByRole('combobox');
		fireEvent.change(selectElement, { target: { value: '1' } });
		expect(mockProps.onSelect).toHaveBeenCalled();
	});

	it('renders multi-select dropdown correctly', () => {
		render(<PtgUiSelectbox {...mockProps} singleSelect={false} dropdownOpen={true} multiSelectOptions={['1']} />);
		const dropdownButton = screen.getByText('Option 1');
		expect(dropdownButton).toBeInTheDocument();
		const checkbox = screen.getByRole('checkbox', { name: 'Option 1' });
		expect(checkbox).toBeChecked();
	});

	it('calls toggleDropdown when dropdown button is clicked', () => {
		render(<PtgUiSelectbox {...mockProps} singleSelect={false} />);
		const dropdownButton = screen.getByText('Select an option');
		fireEvent.click(dropdownButton);
		expect(mockProps.toggleDropdown).toHaveBeenCalled();
	});

	it('calls removeItem when remove button is clicked in multi-select', () => {
		render(<PtgUiSelectbox {...mockProps} singleSelect={false} multiSelectOptions={['1']} />);
		const removeButton = screen.getByText('x');
		fireEvent.click(removeButton);
		expect(mockProps.removeItem).toHaveBeenCalledWith('1');
	});

	it('renders placeholder when no options are selected in multi-select', () => {
		render(<PtgUiSelectbox {...mockProps} singleSelect={false} />);
		expect(screen.getByText('Select an option')).toBeInTheDocument();
	});
});
