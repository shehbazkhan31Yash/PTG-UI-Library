import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';

describe('PtgUIForgotPassword', () => {
  let getByTestId: (id: string) => HTMLElement;

  it('should render successfully', () => {
    const component = render(
      <BrowserRouter>
        <ForgotPassword />
      </BrowserRouter>
    );

    getByTestId = component.getByTestId;

    fireEvent.click(getByTestId('linkForgotPassword'));
    fireEvent.focus(getByTestId('email'));
    fireEvent.focusOut(getByTestId('email'));
    fireEvent.change(getByTestId('email'), {
      target: { value: 'test@test.com' },
    });

    fireEvent.click(getByTestId('handleSubmit'));
    fireEvent.click(getByTestId('handleClose'));
  });
});
