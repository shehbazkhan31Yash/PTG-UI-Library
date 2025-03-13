import { render } from '@testing-library/react';

import PtgUiD3Bar from './bar';

describe('PtgUiD3Bar', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<PtgUiD3Bar />);
		expect(baseElement).toBeTruthy();
	});
});
