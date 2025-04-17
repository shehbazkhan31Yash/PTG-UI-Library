import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PtgUiGridColumn } from './GridColumns';

describe('PtgUiGridColumn', () => {
	it('should render with default props', () => {
		const { container } = render(
			<PtgUiGridColumn>
				<span>Default Content</span>
			</PtgUiGridColumn>
		);
		expect(container.firstChild).not.toHaveClass('some-class-name');
	});

	it('should apply the correct class names based on props', () => {
		const { container } = render(
			<PtgUiGridColumn
				xl={4}
				lg={3}
				md={2}
				sm={1}
				xs={6}
				offsetLg={2}
				offsetMd={1}
				offsetSm={3}
				className="custom-class"
			>
				<span>Test Content</span>
			</PtgUiGridColumn>
		);
		expect(container.firstChild).toHaveClass(
			'ptg-ui-col-xl-4 ptg-ui-col-lg-3 ptg-ui-col-md-2 ptg-ui-col-sm-1 ptg-ui-col-xs-6 ptg-ui-offset-lg-2 ptg-ui-offset-md-1 ptg-ui-offset-sm-3 custom-class'
		);
	});

	it('should render children correctly', () => {
		const { getByText } = render(
			<PtgUiGridColumn>
				<span>Test Child</span>
			</PtgUiGridColumn>
		);
		expect(getByText('Test Child')).toBeInTheDocument();
	});

	it('should pass additional props to the div element', () => {
		const { container } = render(
			<PtgUiGridColumn data-testid="grid-column">
				<span>Test Content</span>
			</PtgUiGridColumn>
		);
		expect(container.firstChild).toHaveAttribute('data-testid', 'grid-column');
	});
});
