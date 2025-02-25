/* eslint-disable @typescript-eslint/no-explicit-any */
import './react-table.scss';
import { useEffect, useState } from 'react';
import { useTable, usePagination, TableInstance, UseTableInstanceProps, UsePaginationInstanceProps, UsePaginationState } from 'react-table';
//import "./react-table-config.d.ts";
import './react-table.scss';

export interface PtgUiReactTableProps {
	data?: any;
	columns?: any;
}
export type PaginationTableInstance<T extends object> = TableInstance<T> &
	UsePaginationInstanceProps<T> & UseTableInstanceProps<T> & {
		state: UsePaginationState<T>;
	};
export function PtgUiReactTable({ columns, data }: PtgUiReactTableProps) {
	const [currentPage, setcurrentPage] = useState(0);
	const [totalPages, setTotalPages] = useState([]);
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		//rows,
		prepareRow,
		page, // Instead of using 'rows', we'll use page,
		// which has only the rows for the active page
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize },
	} = useTable<object>({ columns, data, }, usePagination) as PaginationTableInstance<object>;

	useEffect(() => {
		setcurrentPage(pageIndex);
	}, [pageIndex]);

	function range(start: number, end: number) {
		const arr: any = Array(end - start + 1);
		return arr.fill().map((_: any, idx: any) => start + idx);
	}

	useEffect(() => {
		const pageNumbers = range(0, pageCount - 1);
		setTotalPages(pageNumbers);
	}, [data]);

	return (
		<>
			<table className="table table-striped" {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup: any) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column: any) => (
								<th {...column.getHeaderProps()}>{column.render('Header')}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row: any, i: any) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell: any) => {
									return (
										<td style={{ fontSize: '13px' }} {...cell.getCellProps()}>
											{cell.render('Cell')}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<ul className="pagination  justify-content-center mt-3">
				<li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
					<a className="page-link" onClick={() => previousPage()}>
						Previous
					</a>
				</li>
				{totalPages.map((pageNum: number, pIndex: number) => {
					return (
						<>
							{pageNum <= 8 ? (
								<li key={`unique_page_${pIndex}`} className={`page-item ${currentPage === pageNum ? 'active' : ''}`}>
									<a className="page-link" onClick={() => gotoPage(pageNum)}>
										{pageNum + 1}
									</a>
								</li>
							) : null}
						</>
					);
				})}
				<li className={`page-item ${currentPage === pageCount ? 'active' : ''}`}>
					<a className="page-link" onClick={() => nextPage()}>
						Next
					</a>
				</li>
			</ul>
		</>
	);
}

export default PtgUiReactTable;
