import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PtgUiToaster from './toaster';

describe('PtgUiToaster Component', () => {
    it('renders without crashing', () => {
        render(<PtgUiToaster show={true} setShow={() => jest.fn()} message="Test message" type="success" />);
        const toaster = screen.getByText('Test message');
        expect(toaster).toBeInTheDocument();
    });

    it('displays the correct message and type', () => {
        render(<PtgUiToaster show={true} setShow={() => jest.fn()} message="Success message" type="success" />);
        const message = screen.getByText('Success message');
        const header = screen.getByText('Success');
        expect(message).toBeInTheDocument();
        expect(header).toHaveClass('text-success');
    });

    it('displays the correct error message and type', () => {
        render(<PtgUiToaster show={true} setShow={() => jest.fn()} message="Error message" type="error" />);
        const message = screen.getByText('Error message');
        const header = screen.getByText('Error');
        expect(message).toBeInTheDocument();
        expect(header).toHaveClass('text-danger');
    });

    it('calls setShow when the close button is clicked', () => {
        const setShowMock = jest.fn();
        render(<PtgUiToaster show={true} setShow={setShowMock} message="Test message" type="success" />);
        const closeButton = screen.getByRole('button');
        fireEvent.click(closeButton);
        expect(setShowMock).toHaveBeenCalledWith(false);
    });
});