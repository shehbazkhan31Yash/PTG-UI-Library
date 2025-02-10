import { render } from '@testing-library/react';

import PtgUiMaterialTable from './material-table';

describe('MaterialTable', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<PtgUiMaterialTable />);
		expect(baseElement).toBeTruthy();
	});
});
