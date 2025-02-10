import { render } from '@testing-library/react';

import PtgUi3dPie from './pie';

describe('PtgUi3dPie', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<PtgUi3dPie />);
		expect(baseElement).toBeTruthy();
	});
});
