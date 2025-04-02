import { render, screen } from '@testing-library/react';
import { PtgUiLoading } from './loading';

describe('PtgUiLoading Component', () => {
	test('renders dot loader with correct color', () => {
		render(<PtgUiLoading type="dot" color="#ff0000" />);

		const loader = screen.getByText(/loader/i);
		expect(loader).toBeInTheDocument();

		const dots = screen.getAllByRole('presentation');
		expect(dots.length).toBe(3);

		dots.forEach(dot => {
			expect(dot).toHaveStyle('background: #ff0000');
		});
	});

	test('renders linear loader with correct color', () => {
		render(<PtgUiLoading type="linear" color="#00ff00" />);

		const linearLoader = screen.getByRole('presentation');
		expect(linearLoader).toBeInTheDocument();

		expect(linearLoader).toHaveStyle('background: #00ff00');
	});

	test('renders circular loader with correct color', () => {
		render(<PtgUiLoading type="circular" color="#0000ff" />);

		const circularLoader = screen.getByRole('presentation');
		expect(circularLoader).toBeInTheDocument();

		expect(circularLoader).toHaveStyle('background: #0000ff');
	});

	test('does not render any loader for unknown type', () => {
		const { container } = render(<PtgUiLoading type="unknown" color="#000000" />);

		expect(container).toBeEmptyDOMElement();
	});
});