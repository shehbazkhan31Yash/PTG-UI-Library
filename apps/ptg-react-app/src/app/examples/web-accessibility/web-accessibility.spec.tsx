import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { axe, toHaveNoViolations } from 'jest-axe';
import WebAccessibility from './web-accessibility';

expect.extend(toHaveNoViolations);

describe('WebAccessibility', () => {
  let container: any;
  let getByTestId: any;
  let getByText: any;
  let getByLabelText: any;

  it('should render successfully', async () => {
    const component = render(
      <BrowserRouter>
        <WebAccessibility />
      </BrowserRouter>
    );
    container = component.container;
    getByTestId = component.getByTestId;
    getByText = component.getByText;
    getByLabelText = component.getByLabelText;

    expect(await axe(container)).toHaveNoViolations();

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
      target: { value: 'pune' },
    });
    const dateOfBirth = container.querySelector('#inputDOB');
    fireEvent.mouseDown(dateOfBirth);
    fireEvent.change(dateOfBirth, { target: { value: '10-12-2020' } });

    fireEvent.click(getByTestId('confirm-registration'));
    fireEvent.click(getByTestId('register'));
  });
});
