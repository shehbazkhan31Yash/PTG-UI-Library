import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import DateExampleOne from './dateExampleOne';

describe('Date Example One', () => {
  let container: any;
  let getByTestId: any;
  let getByText: any;
  let getByLabelText: any;
  it('date Example one', () => {
    const component = render(
      <BrowserRouter>
        <DateExampleOne showCodeOne />
      </BrowserRouter>
    );
    container = component.container;
    getByTestId = component.getByTestId;
    getByText = component.getByText;
    getByLabelText = component.getByLabelText;

    // start date
    const startDate = container.querySelector('#sdo input');
    fireEvent.mouseDown(startDate);
    fireEvent.change(startDate, { target: { value: '12-10-2022' } });

    // End date
    const endDate = container.querySelector('#edo input');
    fireEvent.mouseDown(endDate);
    fireEvent.change(endDate, { target: { value: '12-20-2022' } });

    // Range date
    const rangeDate = container.querySelector(
      '#react-datepicker_star-end input'
    );
    fireEvent.mouseDown(rangeDate);
    fireEvent.change(rangeDate, { target: { value: '12-15-2022' } });
  });
});
