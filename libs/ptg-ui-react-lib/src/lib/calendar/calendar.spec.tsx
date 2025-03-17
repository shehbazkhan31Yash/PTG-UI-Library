import { render } from '@testing-library/react';

import { PtgUiCalendar } from './calendar';

describe('Calendar', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<PtgUiCalendar />);
		expect(baseElement).toBeTruthy();
	});
});
