import { render } from '@testing-library/react';

import PtgUi3dColumn from './column';

describe('PtgUi3dColumn', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<PtgUi3dColumn />);
		expect(baseElement).toBeTruthy();
	});
});
