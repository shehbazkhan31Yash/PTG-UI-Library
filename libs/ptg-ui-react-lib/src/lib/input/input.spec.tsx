import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PtgUiInput from './input';

describe('PtgUiInput', () => {
    const defaultProps = {
        type: 'text',
        value: 'testValue',
        placeholder: 'Enter text',
        disabled: false,
        required: true,
        className: 'test-class',
        inputsize: 'lg',
        name: 'testInput',
        onBlur: jest.fn(),
        onChange: jest.fn(),
        onKeyUp: jest.fn(),
        maxlength: 10,
        id: 'test-input',
    };

    it('renders the input with the correct attributes', () => {
        render(<PtgUiInput {...defaultProps} />);
        const input = screen.getByPlaceholderText('Enter text');
        expect(input).toHaveAttribute('type', 'text');
        expect(input).toHaveAttribute('value', 'testValue');
        expect(input).toHaveAttribute('placeholder', 'Enter text');
        expect(input).toHaveAttribute('class', 'test-class');
        expect(input).toHaveAttribute('maxlength', '10');
        expect(input).toHaveAttribute('id', 'test-input');
        expect(input).toBeRequired();
        expect(input).not.toBeDisabled();
    });

    it('calls the onChange function when the input value changes', () => {
        render(<PtgUiInput {...defaultProps} />);
        const input = screen.getByPlaceholderText('Enter text');
        fireEvent.change(input, { target: { value: 'new value' } });
        expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
    });

    it('calls the onBlur function when the input loses focus', () => {
        render(<PtgUiInput {...defaultProps} />);
        const input = screen.getByPlaceholderText('Enter text');
        fireEvent.blur(input);
        expect(defaultProps.onBlur).toHaveBeenCalledTimes(1);
    });

    it('calls the onKeyUp function when a key is released', () => {
        render(<PtgUiInput {...defaultProps} />);
        const input = screen.getByPlaceholderText('Enter text');
        fireEvent.keyUp(input, { key: 'A', code: 'KeyA' });
        expect(defaultProps.onKeyUp).toHaveBeenCalledTimes(1);
    });

    it('renders the input as disabled when the disabled prop is true', () => {
        render(<PtgUiInput {...defaultProps} disabled={true} />);
        const input = screen.getByPlaceholderText('Enter text');
        expect(input).toBeDisabled();
    });

    it('renders the input with the correct data-testid attribute', () => {
        render(<PtgUiInput {...defaultProps} />);
        const input = screen.getByTestId('testInput');
        expect(input).toBeInTheDocument();
    });
});