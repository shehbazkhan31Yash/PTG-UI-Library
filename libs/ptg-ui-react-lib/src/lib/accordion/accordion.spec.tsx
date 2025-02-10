import Accordion from './Accordion';
import { render } from '@testing-library/react';

describe('Accordion', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<Accordion />);
		expect(baseElement).toBeTruthy();
	});
});
