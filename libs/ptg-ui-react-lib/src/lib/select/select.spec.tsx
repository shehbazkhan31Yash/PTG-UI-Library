import { render } from '@testing-library/react';

import PtgUiSelect from './select';

describe('PtgUiSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PtgUiSelect />);
    expect(baseElement).toBeTruthy();
  });
});
