import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import PtgUiCheckbox from './checks';

describe('PtgUiCheckbox', () => {
    const defaultProps = {
        id: 'test-checkbox',
        name: 'testCheckbox',
        label: 'Test Checkbox',
        value: 'testValue',
        checked: false,
        onChange: jest.fn(),
        className: 'test-class',
        htmlFor: 'test-checkbox',
    };

    it('renders the checkbox with the correct label', () => {
        render(<PtgUiCheckbox {...defaultProps} />);
        expect(screen.getByLabelText('Test Checkbox')).toBeInTheDocument();
    });

    it('renders the checkbox with the correct attributes', () => {
        render(<PtgUiCheckbox {...defaultProps} />);
        const checkbox = screen.getByLabelText('Test Checkbox');
        expect(checkbox).toHaveAttribute('id', 'test-checkbox');
        expect(checkbox).toHaveAttribute('name', 'testCheckbox');
        expect(checkbox).toHaveAttribute('value', 'testValue');
        expect(checkbox).toHaveAttribute('class', 'test-class');
        expect(checkbox).not.toBeChecked();
    });

    it('calls the onChange function when the checkbox is clicked', () => {
        render(<PtgUiCheckbox {...defaultProps} />);
        const checkbox = screen.getByLabelText('Test Checkbox');
        fireEvent.click(checkbox);
        expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
    });

    it('renders the checkbox as checked when the checked prop is true', () => {
        render(<PtgUiCheckbox {...defaultProps} checked={true} />);
        const checkbox = screen.getByLabelText('Test Checkbox');
        expect(checkbox).toBeChecked();
    });

    it('renders the checkbox with the correct data-testid attribute', () => {
        render(<PtgUiCheckbox {...defaultProps} />);
        const checkbox = screen.getByTestId('testCheckbox');
        expect(checkbox).toBeInTheDocument();
    });
});