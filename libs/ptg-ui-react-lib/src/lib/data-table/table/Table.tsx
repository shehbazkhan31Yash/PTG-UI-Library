import React, { useState } from 'react';
import './Table.css';
import { TableProps } from '@ptg-react-libs/interfaces';

/**
 * PtgUiTable - A customizable table component with filtering, sorting, and styling options.
 *
 * This component provides a flexible table with features like column-based filtering, sorting,
 * sticky headers, and alternate row coloring. It is designed to handle dynamic data and column configurations.
 *
 * @param {TableProps} props - The properties for the PtgUiTable component.
 * @param {Array<{ Header: string; accessor: string; columnWidth?: string }>} props.columns - The column definitions for the table.
 * @param {Array<Record<string, any>>} props.data - The data to display in the table.
 * @param {boolean} [props.stickyHeader=false] - Whether the table header should stick to the top while scrolling.
 * @param {boolean} [props.alternateRowColor=false] - Whether to apply alternate row coloring for better readability.
 *
 * @returns {JSX.Element} The rendered table component.
 */
export const PtgUiTable: React.FC<TableProps> = ({
	columns,
	data,
	stickyHeader = false,
	alternateRowColor = false,
}) => {
	const [filterValue, setFilterValue] = useState('');
	const [sortConfig, setSortConfig] = useState<{
		key: string;
		direction: 'ascending' | 'descending' | null;
	}>({
		key: '',
		direction: null,
	});
	const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);

	const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilterValue(e.target.value);
	};

	const handleSort = (accessor: string) => {
		let direction: 'ascending' | 'descending' | null = 'ascending';
		if (sortConfig.key === accessor && sortConfig.direction === 'ascending') {
			direction = 'descending';
		}
		setSortConfig({ key: accessor, direction });
	};

	const resetFilter = () => {
		setFilterValue(''); // Reset the filter value to an empty string
	};

	const filteredData = data.filter((row) =>
		columns.some((column) => String(row[column.accessor]).toLowerCase().includes(filterValue.toLowerCase()))
	);

	const sortedData = filteredData.sort((a, b) => {
		if (sortConfig.key) {
			const aValue = a[sortConfig.key];
			const bValue = b[sortConfig.key];

			if (typeof aValue === 'number' && typeof bValue === 'number') {
				return sortConfig.direction === 'ascending' ? aValue - bValue : bValue - aValue;
			} else {
				return sortConfig.direction === 'ascending' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
			}
		}
		return 0;
	});

	return (
		<div>
			<div className="search-bar-container">
				<div className="input-container">
					<input
						type="text"
						placeholder="Filter all columns"
						value={filterValue}
						onChange={handleFilterChange}
						className="ptg-ui-input" // Use a CSS class for styling
					/>
					{filterValue && (
						<button onClick={resetFilter} className="reset-button">
							&times; {/* This represents the "X" character */}
						</button>
					)}
				</div>
			</div>
			<div className="ptg-ui-table-container">
				<table className="ptg-ui-table">
					<thead className={stickyHeader ? 'sticky-header' : ''}>
						<tr>
							{columns.map((column) => (
								<th
									key={column.accessor}
									style={{
										width: column.columnWidth || 'auto',
									}}
									onMouseEnter={() => setHoveredColumn(column.accessor)}
									onMouseLeave={() => setHoveredColumn(null)}
									onClick={() => handleSort(column.accessor)}
								>
									{column.Header}
									<span style={{ marginLeft: '5px', float: 'right' }}>
										{hoveredColumn === column.accessor
											? sortConfig.key === column.accessor
												? sortConfig.direction === 'ascending'
													? '↑'
													: '↓'
												: '⇅' // Vertical arrow for non-sorted columns
											: null}
									</span>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{sortedData.length ? (
							sortedData.map((row, rowIndex) => (
								<tr key={rowIndex} className={alternateRowColor && rowIndex % 2 === 0 ? 'alternate-row' : ''}>
									{columns.map((column) => (
										<td
											key={column.accessor}
											style={{
												width: column.columnWidth || 'auto',
											}}
										>
											{row[column.accessor]}
										</td>
									))}
								</tr>
							))
						) : (
							<tr>
								<td colSpan={columns.length} className="no-data">
									No data available
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};
