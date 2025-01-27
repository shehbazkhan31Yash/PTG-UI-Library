import { render } from '@testing-library/react';

import PtgUiRadio from './Radio';

describe('PtgUiRadio', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PtgUiRadio />);
    expect(baseElement).toBeTruthy();
  });
});
