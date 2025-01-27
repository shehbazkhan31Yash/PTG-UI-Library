import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import DateExampleFour from './dateExampleFour';

describe('Date Example One', () => {
  let container: any;
  let getByTestId: any;
  let getByText: any;
  let getByLabelText: any;
  it('date Example one', () => {
    const component = render(
      <BrowserRouter>
        <DateExampleFour showCodeFour />
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

    // End date gives error
    const endDateError = container.querySelector('#end-date input');
    fireEvent.mouseDown(endDateError);
    fireEvent.change(endDateError, { target: { value: '12-09-2022' } });

    // End date
    const endDate = container.querySelector('#end-date input');
    fireEvent.mouseDown(endDate);
    fireEvent.change(endDate, { target: { value: '12-20-2022' } });
  });
});
