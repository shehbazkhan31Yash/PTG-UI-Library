import { fireEvent, render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import PtgUiResetPassword from './ResetPassword';

describe('PtgUiResetPassword', () => {
  let getByTestId: any;
  let container: any;

  it('should render successfully', () => {
    const component = render(
      <BrowserRouter>
        <PtgUiResetPassword />
      </BrowserRouter>
    );
    getByTestId = component.getByTestId;
    container = component.container;

    fireEvent.click(getByTestId('submitPassword'));

    fireEvent.change(getByTestId('password'), {
      target: { value: '' },
    });
    fireEvent.change(getByTestId('password'), {
      target: { value: 'enterPassword' },
    });
    fireEvent.change(getByTestId('confirmPassword'), {
      target: { value: '' },
    });
    fireEvent.change(getByTestId('confirmPassword'), {
      target: { value: 'confirmPassword' },
    });

    fireEvent.submit(getByTestId('resetConfirmClick'));

    global.alert = jest.fn();
    expect(global.alert).toHaveBeenCalledTimes(0);

    const element = container.querySelector('#password');
    element.focus();
    element.blur();

    const element1 = container.querySelector('#confirmPassword');
    element1.focus();
    element1.blur();

    fireEvent.focus(getByTestId('password'));
    fireEvent.change(getByTestId('password'), {
      target: { value: 'test' },
    });
    fireEvent.change(getByTestId('password'), {
      target: { value: '' },
    });
    fireEvent.focusOut(getByTestId('password'));
  });
});
