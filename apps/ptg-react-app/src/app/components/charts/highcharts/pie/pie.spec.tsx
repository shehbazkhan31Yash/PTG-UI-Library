import { render } from '@testing-library/react';

import PtgUiPie from './pie';

describe('PtgUiPie', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<PtgUiPie />);
		expect(baseElement).toBeTruthy();
	});
});
