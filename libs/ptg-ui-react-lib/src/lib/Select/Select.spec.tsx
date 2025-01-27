import { render } from '@testing-library/react';

import PtgUiSelect from './Select';

describe('PtgUiSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PtgUiSelect />);
    expect(baseElement).toBeTruthy();
  });
});
