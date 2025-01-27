import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import DateRangePicker from './date';


describe('DateRangePicker', () => {
  it('should render successfully', () => {
    const component = render(
      <BrowserRouter>
        <DateRangePicker />
      </BrowserRouter>
    );
    expect(component).toBeTruthy();
  });
});
