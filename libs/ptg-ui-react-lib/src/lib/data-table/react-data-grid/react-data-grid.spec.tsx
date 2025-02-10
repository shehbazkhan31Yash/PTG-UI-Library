import { render } from '@testing-library/react';

import PtgUiReactDataGrid from './react-data-grid';

describe('ReactDataGrid', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<PtgUiReactDataGrid
				data={[]}
				columns={undefined}
				filterValue={undefined}
				minHeight={0}
				idProperty={''}
				pagination={false}
			/>
		);
		expect(baseElement).toBeTruthy();
	});
});
