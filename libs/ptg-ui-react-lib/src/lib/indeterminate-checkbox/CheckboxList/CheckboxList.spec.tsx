import { render, screen, fireEvent } from '@testing-library/react';
import { CheckboxList } from './CheckboxList';
import { CheckboxState } from './checkbox.interface';
import { CheckboxListProps } from '@ptg-react-libs/interfaces';
import '@testing-library/jest-dom';

describe('CheckboxList Component', () => {
	const mockItems = [
		{ id: 1, name: 'Parent 1', parentId: 0 },
		{ id: 2, name: 'Child 1.1', parentId: 1 },
		{ id: 3, name: 'Child 1.2', parentId: 1 },
		{ id: 4, name: 'Parent 2', parentId: 2 },
	];

	const mockGetStateForId = (id: number) => {
		if (id === 1) return CheckboxState.CHECKED;
		if (id === 2) return CheckboxState.INDETERMINATE;
		return CheckboxState.UNCHECKED;
	};

	const mockOnClick = jest.fn();

	const defaultProps: CheckboxListProps = {
		items: mockItems,
		getStateForId: mockGetStateForId,
		onClick: mockOnClick,
	};

	it('renders the CheckboxList component', () => {
		render(<CheckboxList {...defaultProps} />);
		expect(screen.getByText('Parent 1')).toBeInTheDocument();
		expect(screen.getByText('Child 1.1')).toBeInTheDocument();
		expect(screen.getByText('Child 1.2')).toBeInTheDocument();
		expect(screen.getByText('Parent 2')).toBeInTheDocument();
	});

	it('applies correct checkbox states', () => {
		render(<CheckboxList {...defaultProps} />);
		const parentCheckbox = screen.getByText('Parent 1').closest('label')?.previousElementSibling as HTMLInputElement;
		const childCheckbox = screen.getByText('Child 1.1').closest('label')?.previousElementSibling as HTMLInputElement;

		expect(parentCheckbox).toBeChecked();
		expect(childCheckbox).toHaveClass('isIndeterminate');
	});

	it('calls onClick handler when a checkbox is clicked', () => {
		render(<CheckboxList {...defaultProps} />);
		const parentCheckbox = screen.getByLabelText('Parent 1', { selector: 'input' });
		fireEvent.click(parentCheckbox);

		expect(mockOnClick).toHaveBeenCalledWith(1);
	});

	it('renders child nodes correctly', () => {
		render(<CheckboxList {...defaultProps} />);
		const childCheckbox = screen.getByLabelText('Child 1.1');
		expect(childCheckbox).toBeInTheDocument();
	});
});
