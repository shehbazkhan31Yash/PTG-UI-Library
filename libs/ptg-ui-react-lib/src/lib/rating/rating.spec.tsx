import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Rating } from './rating';

describe('Rating Component', () => {
	const mockOnChange = jest.fn();

	it('renders the correct number of stars', () => {
		const { container } = render(<Rating onChange={mockOnChange} />);
		const stars = container.querySelectorAll('.rating-star');
		expect(stars.length).toBe(5);
	});

	it('renders filled stars based on the value prop', () => {
		const { container } = render(<Rating value={3} onChange={mockOnChange} />);
		const filledStars = container.querySelectorAll('.star-fill');
		filledStars.forEach((star, index) => {
			if (index < 3) {
				expect(star).toHaveStyle('width: 100%');
			} else {
				expect(star).toHaveStyle('width: 0%');
			}
		});
	});

	it('does not call onChange when readOnly is true', () => {
		const { container } = render(<Rating readOnly value={3} onChange={mockOnChange} />);
		const stars = container.querySelectorAll('.rating-star');
		fireEvent.click(stars[2]);
		expect(mockOnChange).not.toHaveBeenCalled();
	});

	it('does not call onChange when disabled is true', () => {
		const { container } = render(<Rating disabled value={3} onChange={mockOnChange} />);
		const stars = container.querySelectorAll('.rating-star');
		fireEvent.click(stars[2]);
		expect(mockOnChange).not.toHaveBeenCalled();
	});

	it('updates hover state on mouse enter and leave', () => {
		const { container } = render(<Rating onChange={mockOnChange} />);
		const stars = container.querySelectorAll('.full-star');
		fireEvent.mouseEnter(stars[2]);
		const filledStars = container.querySelectorAll('.star-fill');
		expect(filledStars[2]).toHaveStyle('width: 100%');
		fireEvent.mouseLeave(stars[2]);
		expect(filledStars[2]).toHaveStyle('width: 0%');
	});

	it('handles precision correctly for half stars', () => {
		const { container } = render(<Rating precision={0.5} onChange={mockOnChange} />);
		const stars = container.querySelectorAll('.rating-star');
		fireEvent.click(stars[2].querySelector('.half-star')!);
		expect(mockOnChange).toHaveBeenCalledWith(2.5);
		fireEvent.click(stars[2].querySelector('.full-star')!);
		expect(mockOnChange).toHaveBeenCalledWith(3);
	});

	it('calls onChange when a star is clicked', () => {
		const { container } = render(<Rating onChange={mockOnChange} />);
		const stars = container.querySelectorAll('.full-star');
		fireEvent.click(stars[2]);
		expect(mockOnChange).toHaveBeenCalledWith(3);
	});

	it('renders custom icons for filled and empty stars', () => {
		const { container } = render(<Rating icon="🔥" emptyIcon="⚪" onChange={mockOnChange} />);
		const filledStars = container.querySelectorAll('.star-fill');
		const emptyStars = container.querySelectorAll('.star-empty');
		filledStars.forEach((star) => {
			expect(star).toHaveTextContent('🔥');
		});
		emptyStars.forEach((star) => {
			expect(star).toHaveTextContent('⚪');
		});
	});

	it('renders custom colors for filled and empty stars', () => {
		const { container } = render(<Rating color="red" borderColor="blue" onChange={mockOnChange} />);
		const filledStars = container.querySelectorAll('.star-fill');
		const emptyStars = container.querySelectorAll('.star-empty');
		filledStars.forEach((star) => {
			expect(star).toHaveStyle('color: red');
		});
		emptyStars.forEach((star) => {
			expect(star).toHaveStyle('color: blue');
		});
	});
});
