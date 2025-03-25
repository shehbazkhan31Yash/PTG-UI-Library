import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PtgUiSelect from './select';
import { PtgUiSelectProps } from '@ptg-react-libs/interfaces';

const mockOnChange = jest.fn();
const mockOnBlur = jest.fn();

const defaultProps: PtgUiSelectProps = {
    name: 'testSelect',
    value: '',
    id: 'testSelect',
    className: 'test-class',
    list: [
        { id: '1', label: 'Option 1', value: '1' },
        { id: '2', label: 'Option 2', value: '2' },
    ],
    onBlur: mockOnBlur,
    onChange: mockOnChange,
};

describe('PtgUiSelect Component', () => {
    it('renders select options correctly', () => {
        render(<PtgUiSelect {...defaultProps} />);
        
        const selectElement = screen.getByTestId('testSelect');
        expect(selectElement).toBeInTheDocument();
        expect((selectElement  as HTMLSelectElement).value).toBe('');

        const options = screen.getAllByRole('option');
        expect(options).toHaveLength(3); // Including the default "Select" option
        expect(options[0].textContent).toBe('Select');
        expect(options[1].textContent).toBe('Option 1');
        expect(options[2].textContent).toBe('Option 2');
    });

    it('calls onChange when an option is selected', () => {
        render(<PtgUiSelect {...defaultProps} />);
        
        const selectElement = screen.getByTestId('testSelect');
        fireEvent.change(selectElement, { target: { value: '2' } });

        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect((selectElement  as HTMLSelectElement).value).toBe('');
    });

    it('calls onBlur when the select loses focus', () => {
        render(<PtgUiSelect {...defaultProps} />);
        
        const selectElement = screen.getByTestId('testSelect');
        fireEvent.blur(selectElement);

        expect(mockOnBlur).toHaveBeenCalledTimes(1);
    });

    it('renders with the correct class name', () => {
        render(<PtgUiSelect {...defaultProps} />);
        
        const selectElement = screen.getByTestId('testSelect');
        expect(selectElement).toHaveClass('test-class');
    });

    it('renders with the correct id and name attributes', () => {
        render(<PtgUiSelect {...defaultProps} />);
        
        const selectElement = screen.getByTestId('testSelect');
        expect(selectElement).toHaveAttribute('id', 'testSelect');
        expect(selectElement).toHaveAttribute('name', 'testSelect');
    });
});