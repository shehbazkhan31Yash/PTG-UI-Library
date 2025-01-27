import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import DateExampleTwo from './dateExampleTwo';

describe('Date Example Two', () => {
  let container: any;
  let getByTestId: any;
  let getByText: any;
  let getByLabelText: any;
  it('date Example Two', () => {
    const component = render(
      <BrowserRouter>
        <DateExampleTwo showCodeTwo />
      </BrowserRouter>
    );
    container = component.container;
    getByTestId = component.getByTestId;
    getByText = component.getByText;
    getByLabelText = component.getByLabelText;

    // start date
    const startDate = container.querySelector('#start-date input');
    fireEvent.mouseDown(startDate);
    fireEvent.change(startDate, { target: { value: '12-10-2022' } });

    // End date
    const endDate = container.querySelector('#end-date input');
    fireEvent.mouseDown(endDate);
    fireEvent.change(endDate, { target: { value: '12-20-2022' } });

    // Range date should give error
    const rangeDateTwo = container.querySelector('#date-range-two input');
    fireEvent.mouseDown(rangeDateTwo);
    fireEvent.change(rangeDateTwo, { target: { value: '12-30-2022' } });

    // Range date
    const rangeDate = container.querySelector('#date-range-two input');
    fireEvent.mouseDown(rangeDate);
    fireEvent.change(rangeDate, { target: { value: '12-15-2022' } });
  });
});
