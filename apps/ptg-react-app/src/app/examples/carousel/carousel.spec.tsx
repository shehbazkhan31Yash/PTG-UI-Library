import { fireEvent, render } from '@testing-library/react';
import CarouselExample from './carousel';

global.URL.createObjectURL = jest.fn();

describe('CarouselExample', () => {
  it('should render successfully', () => {
    const { baseElement, getByTestId } = render(<CarouselExample />);
    expect(baseElement).toBeTruthy();

    //button
    fireEvent.click(getByTestId('openButton'));

  });
});
