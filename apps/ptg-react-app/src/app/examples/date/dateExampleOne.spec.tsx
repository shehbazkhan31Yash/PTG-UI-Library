import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ExampleOne } from './dateExampleOne';
import '@testing-library/jest-dom';

describe('ExampleOne Component', () => {
  it('should set start date and clear end date when field is startDate', () => {
    const { container } = render(<ExampleOne showCodeOne />);
    const startDate = container.querySelector('#sdo input');
    
    fireEvent.mouseDown(startDate);
    fireEvent.change(startDate, { target: { value: '2023-10-10' } });

    expect(startDate.value).toBe('2023-10-10');
    const endDate = container.querySelector('#edo input');
    expect(endDate.value).toBe('');
  });

  it('should set end date correctly', () => {
    const { container } = render(<ExampleOne showCodeOne />);
    const endDate = container.querySelector('#edo input');
    
    if (endDate) {
      fireEvent.mouseDown(endDate);
    }
    if (endDate) {
      fireEvent.change(endDate, { target: { value: '2023-10-20' } });
    }

    expect(endDate?.value).toBe('2023-10-20');
  });

  it('should set range date correctly', () => {
    const { container } = render(<ExampleOne showCodeOne />);
    const rangeDate = container.querySelector('#react-datepicker_star-end input');
    
    if (rangeDate) {
      fireEvent.mouseDown(rangeDate);
    }
    if (rangeDate) {
      fireEvent.change(rangeDate, { target: { value: '2023-10-15' } });
    }

    expect(rangeDate.value).toBe('2023-10-15');
  });

  it('should render ExampleOne component correctly', () => {
    const { container } = render(<ExampleOne showCodeOne />);
    const startDate = container.querySelector('#sdo input');
    expect(startDate).toBeInTheDocument();
  });

  it('should call setDateState on start date change', () => {
    const { container } = render(<ExampleOne showCodeOne />);
    const startDate = container.querySelector('#sdo input');
    
    fireEvent.mouseDown(startDate);
    fireEvent.change(startDate, { target: { value: '2023-10-10' } });

    expect(startDate.value).toBe('2023-10-10');
  });
});