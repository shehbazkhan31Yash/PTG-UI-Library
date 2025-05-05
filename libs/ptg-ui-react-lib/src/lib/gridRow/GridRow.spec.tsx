import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PtgUiRow } from './GridRow';

describe('PtgUiRow Component', () => {
	it('should render children correctly', () => {
		const { getByText } = render(
			<PtgUiRow>
				<span>Test Child</span>
			</PtgUiRow>
		);
		expect(getByText('Test Child')).toBeInTheDocument();
	});

	it('should apply the provided className', () => {
		const { container } = render(
			<PtgUiRow className="custom-class">
				<span>Test Child</span>
			</PtgUiRow>
		);
		expect(container.firstChild).toHaveClass('row custom-class');
	});

	it('should have default "row" class when no className is provided', () => {
		const { container } = render(
			<PtgUiRow>
				<span>Test Child</span>
			</PtgUiRow>
		);
		expect(container.firstChild).toHaveClass('row');
	});
});
