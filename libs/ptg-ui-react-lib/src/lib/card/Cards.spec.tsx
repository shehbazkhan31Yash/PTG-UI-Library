import { render, screen, fireEvent } from '@testing-library/react';
import { PtgUiCard } from './Cards';

describe('PtgUiCard Component', () => {
	test('renders without crashing', () => {
		render(<PtgUiCard title="card without image" />);
		expect(screen.getByText(/card/i)).toBeTruthy();
	});

	test('renders title, description, and image when provided', () => {
		const title = 'Test Title';
		const description = 'Test Description';
		const image = 'https://via.placeholder.com/150';

		render(<PtgUiCard title={title} description={description} image={image} />);

		expect(screen.getByText(title)).toBeTruthy();
		expect(screen.getByText(description)).toBeTruthy();
	});

	test('does not render image when image prop is not provided', () => {
		render(<PtgUiCard title="Test Title" description="Test Description" />);
		const image = screen.queryByAltText('card');
		expect(image).not.toBeTruthy();
	});

	test('renders button with correct text and calls onClick when clicked', () => {
		const handleClick = jest.fn();
		const buttonText = 'Click Me';

		render(<PtgUiCard buttonText={buttonText} onClick={handleClick} />);

		const button = screen.getByText(buttonText);
		expect(button).toBeTruthy();
		fireEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	test('does not render button when buttonText prop is not provided', () => {
		render(<PtgUiCard />);
		const button = screen.queryByRole('button');
		expect(button).not.toBeTruthy();
	});

	test('renders children correctly', () => {
		render(
			<PtgUiCard>
				<p>Child Content</p>
			</PtgUiCard>
		);
		expect(screen.getByText('Child Content')).toBeTruthy();
	});
});
