import { render } from '@testing-library/react';

import PtgUiLineBarChart from './linebar';

describe('PtgUiLineBarChart', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<PtgUiLineBarChart />);
		expect(baseElement).toBeTruthy();
	});
});
