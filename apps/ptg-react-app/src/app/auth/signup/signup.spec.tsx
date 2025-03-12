import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';

import PtgUiSignup from './signup';

describe('PtgUiSignup', () => {
  let container: any;
  let getByTestId: any;
  it('should render successfully', async () => {
    const component = render(
      <BrowserRouter>
        <PtgUiSignup />
      </BrowserRouter>
    );
    container = component.container;
    getByTestId = component.getByTestId;
    // Radio
    fireEvent.click(getByTestId('Female'));

    // text-inputs
    fireEvent.focus(getByTestId('email'));
    fireEvent.focusOut(getByTestId('email'));
    fireEvent.change(getByTestId('email'), {
      target: { value: 'test@test.com' },
    });
    fireEvent.focus(getByTestId('username'));
    fireEvent.focusOut(getByTestId('username'));
    fireEvent.change(getByTestId('username'), {
      target: { value: 'testusername' },
    });
    fireEvent.change(getByTestId('password'), {
      target: { value: 'testpassword' },
    });

    // select
    fireEvent.focus(getByTestId('city'));
    fireEvent.focusOut(getByTestId('city'));
    fireEvent.change(getByTestId('city'), {
      target: { value: 'indore' },
    });

    // datepicker
    const dateOfBirth = container.querySelector('#dob input');
    fireEvent.mouseDown(dateOfBirth);
    fireEvent.change(dateOfBirth, { target: { value: '10-12-2020' } });

    // Checkbox
    fireEvent.click(getByTestId('confirm-registration'));

    // button
    fireEvent.click(getByTestId('register'));
    const handleSubmit = jest.fn();
    waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith(
        {
          email: 'raj@gmail.com',
          password: '12345',
          username: 'test',
          DOB: '10-12-2020',
          city: 'indore',
          gender: 'female',
        },
        //--setItem called after api success
        expect(window.localStorage.setItem).toHaveBeenCalledTimes(1)
      )
    );
  });
  it('matches email', () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const email = 'test@gmail.com';
    expect(email).toMatch(regexEmail);
  });
});
