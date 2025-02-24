import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PtgUiLogin from './Login';
import renderer from 'react-test-renderer';

describe('PtgUiLogin', () => {
  let getByTestId: any;

  it('Should match Login Snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <PtgUiLogin />
        </BrowserRouter>
      )
      .toJSON();
    // let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should create', () => {
    const component = render(
      <BrowserRouter>
        <PtgUiLogin />
      </BrowserRouter>
    );
    expect(component.baseElement).toBeTruthy();
  });

  it('Renders One button', async () => {
    render(
      <BrowserRouter>
        <PtgUiLogin />
      </BrowserRouter>
    );
    const items = await screen.findAllByRole('button');
    expect(items).toHaveLength(1);
  });

  it('should render successfully', () => {
      const component = render(
        <BrowserRouter>
          <PtgUiLogin />
        </BrowserRouter>
      );
    getByTestId = component.getByTestId;

    // text-inputs
    fireEvent.change(getByTestId('email'), {
      target: { value: 'test@test' },
    });
    fireEvent.focus(getByTestId('password'));
    fireEvent.change(getByTestId('password'), {
      target: { value: 'test' },
    });
    fireEvent.change(getByTestId('password'), {
      target: { value: '' },
    });
    fireEvent.focusOut(getByTestId('password'));

    fireEvent.change(getByTestId('email'), {
      target: { value: 'raj@gmail.com' },
    });

    fireEvent.change(getByTestId('password'), {
      target: { value: '12345' },
    });

    // button
    fireEvent.click(getByTestId('login'));

    const handleSubmit = jest.fn();
    userEvent.click(getByTestId('login'));
    waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith(
        {
          email: 'raj@gmail.com',
          password: '12345',
        },
        //--setItem called after api success
        expect(window.localStorage.setItem).toHaveBeenCalledTimes(1)
      )
    );
  });
});
