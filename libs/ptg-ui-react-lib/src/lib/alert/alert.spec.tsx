import { PtgUiAlert } from './alert';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('PtgUiAlert', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<PtgUiAlert message="Test message" />);
		expect(baseElement).toBeTruthy();
	});

	it('should display the correct message', () => {
		render(<PtgUiAlert message="Test message" />);
		expect(screen.getByText('Test message')).toBeInTheDocument();
	});

	it('should apply the correct alert type class', () => {
		const { container } = render(<PtgUiAlert type="success" message="Success message" />);
		expect(container.querySelector('.alert-success')).toBeTruthy();
	});

	it('should default to danger type if no type is provided', () => {
		const { container } = render(<PtgUiAlert message="Default danger message" />);
		expect(container.querySelector('.alert-danger')).toBeTruthy();
	});
});
