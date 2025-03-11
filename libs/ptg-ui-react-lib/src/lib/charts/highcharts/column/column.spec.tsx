import { render } from '@testing-library/react';

import PtgUiColumn from './column';

describe('PtgUiColumn', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<PtgUiColumn />);
		expect(baseElement).toBeTruthy();
	});
});
