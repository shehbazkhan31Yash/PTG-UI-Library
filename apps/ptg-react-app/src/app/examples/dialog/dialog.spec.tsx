import { fireEvent, render } from '@testing-library/react';
import DialogExample from './dialog';

global.URL.createObjectURL = jest.fn();

describe('DialogExample', () => {
  it('should render successfully', () => {
    const { baseElement, getByTestId } = render(<DialogExample />);
    expect(baseElement).toBeTruthy();

    //button
    fireEvent.click(getByTestId('openButton'));

    // close button
    fireEvent.click(getByTestId('closeButton'));
  });
});
