import { render } from '@testing-library/react';

import PtgUiLine from './line';

describe('PtgUiLine', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<PtgUiLine />);
		expect(baseElement).toBeTruthy();
	});
});
