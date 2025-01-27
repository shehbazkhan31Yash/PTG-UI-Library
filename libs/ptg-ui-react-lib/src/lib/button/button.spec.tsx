import { render } from '@testing-library/react';

import PtgUiButton from './button';

describe('PtgUiButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PtgUiButton />);
    expect(baseElement).toBeTruthy();
  });
});
