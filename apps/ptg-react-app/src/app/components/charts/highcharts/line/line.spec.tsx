import { render } from '@testing-library/react';

import PtgUiLineChart from './line';

describe('PtgUiLineChart', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<PtgUiLineChart />);
		expect(baseElement).toBeTruthy();
	});
});
