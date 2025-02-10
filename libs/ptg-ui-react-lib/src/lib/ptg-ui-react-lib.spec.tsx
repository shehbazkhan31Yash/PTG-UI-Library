import { render } from '@testing-library/react';

import PtgUiReactLib from './ptg-ui-react-lib';

describe('PtgUiReactLib', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<PtgUiReactLib />);
		expect(baseElement).toBeTruthy();
	});
});
