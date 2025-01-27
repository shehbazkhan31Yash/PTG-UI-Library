import { PtgUiTextArea } from '../textarea/textarea';
import { render } from '@testing-library/react';


describe('textarea', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PtgUiTextArea/>);
    expect(baseElement).toBeTruthy();
  });
});
