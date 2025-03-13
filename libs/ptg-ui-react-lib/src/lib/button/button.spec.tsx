import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { PtgUiButton } from './button';

describe('PtgUiButton', () => {
	const defaultProps = {
		appearance: 'primary',
		btnIconAlignment: 'left',
		text: 'Click Me',
		hasbtnIconSlot: true,
		onClick: jest.fn(),
		width: '100px',
		height: '40px',
		fontSize: '16px',
		fontWeight: 'bold',
		textColor: '#fff',
		backgroundColor: '#007bff',
		disabled: false,
		border: '1px solid #007bff',
	};

	test('renders button with correct text', () => {
		render(<PtgUiButton {...defaultProps} />);
		expect(screen.getByText('Click Me')).toBeInTheDocument();
	});

	test('applies correct styles to button', () => {
		render(<PtgUiButton {...defaultProps} />);
		const button = screen.getByRole('button');
		expect(button).toHaveStyle({
			width: '100px',
			height: '40px',
			fontSize: '16px',
			fontWeight: 'bold',
			color: '#fff',
			backgroundColor: '#007bff',
			border: '1px solid #007bff',
		});
	});

	test('calls onClick handler when clicked', () => {
		render(<PtgUiButton {...defaultProps} />);
		const button = screen.getByRole('button');
		fireEvent.click(button);
		expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
	});

	test('renders button as disabled when disabled prop is true', () => {
		render(<PtgUiButton {...defaultProps} disabled={true} />);
		const button = screen.getByRole('button');
		expect(button).toBeDisabled();
	});

	test('renders children correctly', () => {
		render(
			<PtgUiButton {...defaultProps}>
				<span>Icon</span>
			</PtgUiButton>
		);
		expect(screen.getByText('Icon')).toBeInTheDocument();
	});
});
