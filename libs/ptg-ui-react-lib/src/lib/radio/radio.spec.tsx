import { render } from '@testing-library/react';

import PtgUiRadio from './radio';

describe('PtgUiRadio', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PtgUiRadio />);
    expect(baseElement).toBeTruthy();
  });
});
