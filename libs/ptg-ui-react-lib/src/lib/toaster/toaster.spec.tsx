import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PtgUiToaster from './toaster';

describe('PtgUiToaster Component', () => {
  const defaultProps = {
    show: true,
    setShow: jest.fn(),
    message: 'Test message',
    type: 'success',
    showDescription: true,
    closeIcon: <span>Close</span>,
    alignItem: 'center',
    justifyContent: 'center',
    timeToShow: 3000,
    icon: <span>Icon</span>,
  };

  it('should render the toaster with the correct message', () => {
    render(<PtgUiToaster {...defaultProps} />);
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });

  it('should render the toaster with the correct type', () => {
    render(<PtgUiToaster {...defaultProps} />);
    expect(screen.getByText('success')).toBeInTheDocument();
  });

  it('should render the toaster with the custom icon', () => {
    render(<PtgUiToaster {...defaultProps} />);
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  it('should render the close button with the custom close icon', () => {
    render(<PtgUiToaster {...defaultProps} />);
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  it('should call setShow(false) when the close button is clicked', () => {
    render(<PtgUiToaster {...defaultProps} />);
    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);
    expect(defaultProps.setShow).toHaveBeenCalledWith(false);
  });

  it('should hide the toaster after the specified timeToShow duration', () => {
    jest.useFakeTimers();
    const setShowMock = jest.fn();
    render(<PtgUiToaster {...defaultProps} setShow={setShowMock} />);
    jest.advanceTimersByTime(3000);
    expect(setShowMock).toHaveBeenCalledWith(false);
    jest.useRealTimers();
  });

  it('should render the description if showDescription is true', () => {
    render(<PtgUiToaster {...defaultProps} />);
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });

  it('should not render the description if showDescription is false', () => {
    render(<PtgUiToaster {...defaultProps} showDescription={false} />);
    expect(screen.queryByText('Test message')).not.toBeInTheDocument();
  });
});