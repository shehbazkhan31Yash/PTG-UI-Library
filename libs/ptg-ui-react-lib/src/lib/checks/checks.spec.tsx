import { render } from '@testing-library/react';

import PtgUiChecks from './checks';

describe('PtgUiChecks', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<PtgUiChecks />);
		expect(baseElement).toBeTruthy();
	});
});
