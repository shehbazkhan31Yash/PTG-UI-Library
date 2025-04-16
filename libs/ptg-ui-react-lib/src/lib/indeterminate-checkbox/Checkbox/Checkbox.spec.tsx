import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Checkbox } from './Checkbox';

describe('Checkbox Component', () => {
	const mockOnClick = jest.fn();

	it('should render the checkbox with the correct label', () => {
		render(<Checkbox labelId="test_label" />);
		const label = screen.getByText('test');
		expect(label).toBeInTheDocument();
	});

	it('should apply the indeterminate class when indeterminate is true', () => {
		render(<Checkbox labelId="test_label" indeterminate={true} />);
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toHaveClass('isIndeterminate');
	});

	it('should not apply the indeterminate class when indeterminate is false', () => {
		render(<Checkbox labelId="test_label" indeterminate={false} />);
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).not.toHaveClass('isIndeterminate');
	});

	it('should call onClick when the checkbox is clicked', () => {
		render(<Checkbox labelId="test_label" onClick={mockOnClick} />);
		const checkbox = screen.getByRole('checkbox');
		fireEvent.click(checkbox);
		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});

	it('should set the checkbox to checked when isChecked is true', () => {
		render(<Checkbox labelId="test_label" isChecked={true} />);
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).toBeChecked();
	});

	it('should set the checkbox to unchecked when isChecked is false', () => {
		render(<Checkbox labelId="test_label" isChecked={false} />);
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).not.toBeChecked();
	});
});
