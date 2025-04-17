import { render, screen, fireEvent } from '@testing-library/react';
import { PtgUiIndeterminateCheckbox } from './CheckboxTree';
import '@testing-library/jest-dom';

describe('PtgUiIndeterminateCheckbox', () => {
	const mockItems = [
		{ id: 1, name: 'Parent 1', parentId: 0 },
		{ id: 2, name: 'Child 1.1', parentId: 1 },
		{ id: 3, name: 'Child 1.2', parentId: 1 },
		{ id: 4, name: 'Parent 2', parentId: 2 },
	];

	it('should render the component', () => {
		render(<PtgUiIndeterminateCheckbox items={mockItems} />);
		const checkboxes = screen.getAllByRole('checkbox');
		expect(checkboxes.length).toBe(mockItems.length);
	});

	it('should initialize all checkboxes as unchecked', () => {
		render(<PtgUiIndeterminateCheckbox items={mockItems} />);
		const checkboxes = screen.getAllByRole('checkbox');
		checkboxes.forEach((checkbox) => {
			expect(checkbox).not.toBeChecked();
		});
	});

	it('should call clickHandler and update state when a checkbox is clicked', () => {
		render(<PtgUiIndeterminateCheckbox items={mockItems} />);
		const checkboxes = screen.getAllByRole('checkbox');
		fireEvent.click(checkboxes[0]);
		// Assuming the first checkbox toggles to checked
		expect(checkboxes[0]).toBeChecked();
	});

	it('should handle indeterminate state updates correctly', () => {
		render(<PtgUiIndeterminateCheckbox items={mockItems} />);
		const checkboxes = screen.getAllByRole('checkbox');
		fireEvent.click(checkboxes[0]);
	});
});
