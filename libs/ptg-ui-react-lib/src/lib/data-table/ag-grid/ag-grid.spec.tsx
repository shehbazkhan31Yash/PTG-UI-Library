import { render } from '@testing-library/react';

import PtgUiAgGrid from './ag-grid';

describe('PtgUiAgGrid', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<PtgUiAgGrid />);
		expect(baseElement).toBeTruthy();
	});
});
