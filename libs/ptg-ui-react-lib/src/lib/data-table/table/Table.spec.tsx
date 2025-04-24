import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PtgUiTable } from './Table';

describe('PtgUiTable', () => {
	const columns = [
		{ Header: 'Name', accessor: 'name', columnWidth: '150px' },
		{ Header: 'Age', accessor: 'age', columnWidth: '100px' },
		{ Header: 'Country', accessor: 'country', columnWidth: '150px' },
	];

	const data = [
		{ name: 'John Doe', age: 30, country: 'USA' },
		{ name: 'Jane Smith', age: 25, country: 'Canada' },
		{ name: 'Sam Brown', age: 35, country: 'UK' },
	];

	it('renders the table with columns and data', () => {
		render(<PtgUiTable columns={columns} data={data} />);
		columns.forEach((column) => {
			expect(screen.getByText(column.Header)).toBeInTheDocument();
		});
		data.forEach((row) => {
			expect(screen.getByText(row.name)).toBeInTheDocument();
			expect(screen.getByText(row.age.toString())).toBeInTheDocument();
			expect(screen.getByText(row.country)).toBeInTheDocument();
		});
	});

	it('filters data based on input value', () => {
		render(<PtgUiTable columns={columns} data={data} />);
		const input = screen.getByPlaceholderText('Filter all columns');
		fireEvent.change(input, { target: { value: 'Jane' } });
		expect(screen.getByText('Jane Smith')).toBeInTheDocument();
		expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
	});

	it('resets the filter when reset button is clicked', () => {
		render(<PtgUiTable columns={columns} data={data} />);
		const input = screen.getByPlaceholderText('Filter all columns');
		fireEvent.change(input, { target: { value: 'Jane' } });
		const resetButton = screen.getByText('×');
		fireEvent.click(resetButton);
		data.forEach((row) => {
			expect(screen.getByText(row.name)).toBeInTheDocument();
		});
	});

	it('sorts data in ascending and descending order when column header is clicked', () => {
		render(<PtgUiTable columns={columns} data={data} />);
		const ageHeader = screen.getByText('Age');
		fireEvent.click(ageHeader); // Sort ascending
		const rows = screen.getAllByRole('row');
		expect(rows[1]).toHaveTextContent('25');
		expect(rows[2]).toHaveTextContent('30');
		expect(rows[3]).toHaveTextContent('35');
		fireEvent.click(ageHeader); // Sort descending
		expect(rows[1]).toHaveTextContent('35');
		expect(rows[2]).toHaveTextContent('30');
		expect(rows[3]).toHaveTextContent('25');
	});

	it('displays "No data available" when no data matches the filter', () => {
		render(<PtgUiTable columns={columns} data={data} />);
		const input = screen.getByPlaceholderText('Filter all columns');
		fireEvent.change(input, { target: { value: 'Nonexistent' } });
		expect(screen.getByText('No data available')).toBeInTheDocument();
	});

	it('applies alternate row color when alternateRowColor is true', () => {
		render(<PtgUiTable columns={columns} data={data} alternateRowColor={true} />);
		const rows = screen.getAllByRole('row');
		expect(rows[1]).toHaveClass('alternate-row');
		expect(rows[2]).not.toHaveClass('alternate-row');
	});
});
