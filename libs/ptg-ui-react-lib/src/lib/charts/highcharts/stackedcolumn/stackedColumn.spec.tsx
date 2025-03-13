import { render } from '@testing-library/react';

import PtgUiStackedColumn from './stackedColumn';

describe('PtgUiStackedColumn', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<PtgUiStackedColumn />);
		expect(baseElement).toBeTruthy();
	});
});
