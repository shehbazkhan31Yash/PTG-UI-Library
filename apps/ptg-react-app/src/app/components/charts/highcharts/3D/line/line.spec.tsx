import { render } from '@testing-library/react';

import PtgUi3dLine from './line';

describe('PtgUi3dLine', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<PtgUi3dLine />);
		expect(baseElement).toBeTruthy();
	});
});
