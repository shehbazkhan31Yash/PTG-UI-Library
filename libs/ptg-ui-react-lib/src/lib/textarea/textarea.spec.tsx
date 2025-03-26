import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PtgUiTextArea from './textarea';

describe('PtgUiTextArea Component', () => {
    it('renders without crashing', () => {
        render(<PtgUiTextArea />);
        const textarea = screen.getByTestId('');
        expect(textarea).toBeInTheDocument();
    });

    it('calls onChange when the value changes', () => {
        const handleChange = jest.fn();
        render(<PtgUiTextArea onChange={handleChange} />);
        const textarea = screen.getByTestId('');
        fireEvent.change(textarea, { target: { value: 'new value' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('calls onBlur when the textarea loses focus', () => {
        const handleBlur = jest.fn();
        render(<PtgUiTextArea onBlur={handleBlur} />);
        const textarea = screen.getByTestId('');
        fireEvent.blur(textarea);
        expect(handleBlur).toHaveBeenCalledTimes(1);
    });
});