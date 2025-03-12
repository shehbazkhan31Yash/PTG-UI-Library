import { render } from '@testing-library/react';

import PtgUiD3Pie from './pie';

describe('PtgUiD3Pie', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<PtgUiD3Pie />);
		expect(baseElement).toBeTruthy();
	});
});
