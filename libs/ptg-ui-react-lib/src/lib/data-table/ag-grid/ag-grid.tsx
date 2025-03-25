/**
 * @since Feb 2022
 * @author Harsha Zalawa
 * @uses Reusable Component for ag-grid
 * @Reference https://www.ag-grid.com/react-data-grid/
 *
 */

import './ag-grid.scss';
import { useState, useCallback, useRef, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export interface PtgUiAgGridProps {
	data: {
		id: number;
		athlete: string;
		age: number;
		country: string;
		year: number;
		date: any;
		sport: string;
		gold: number;
		silver: number;
		bronze: number;
		total: number;
	}[];
	autoGroupColumnDef: any;
	columnDefs: any;
	defaultColDef: any;
	rowSelection?: 'single' | 'multiple';
	groupSelectsChildren?: boolean;
	pagination?: boolean;
	paginationPageSize?: number;
	customPagination?: boolean;
	domLayout?: any;
}

export function PtgUiAgGrid({
	data,
	autoGroupColumnDef,
	columnDefs,
	domLayout,
	defaultColDef,
	rowSelection,
	groupSelectsChildren,
	pagination,
	paginationPageSize,
	customPagination,
}: PtgUiAgGridProps) {
	const gridRef = useRef(null);
	const [rowData, setRowData] = useState(data);
	const [currentPage, setcurrentPage] = useState(0);

	useEffect(() => {
		setRowData(data);
	}, [data]);

	const onBtPrevious = useCallback(() => {
		const currentVal: any = gridRef.current;
		setcurrentPage(currentVal.api.paginationGetCurrentPage() - 1);
		currentVal.api.paginationGoToPreviousPage();
	}, []);

	const onBtNext = useCallback(() => {
		const currentVal: any = gridRef.current;
		setcurrentPage(currentVal.api.paginationGetCurrentPage() + 1);
		currentVal.api.paginationGoToNextPage();
	}, []);

	const onSelectedpage = useCallback((selectedPageNo: number) => {
		const currentVal: any = gridRef.current;
		currentVal.api.paginationGoToPage(selectedPageNo - 1);
		setcurrentPage(currentVal.api.paginationGetCurrentPage());
	}, []);
	return (
		<div className="row">
			<div className="col-12">
				<div className="ag-theme-alpine grid-container">
					<AgGridReact
						ref={gridRef}
						autoGroupColumnDef={autoGroupColumnDef}
						rowData={rowData}
						columnDefs={columnDefs}
						rowSelection={rowSelection}
						groupSelectsChildren={groupSelectsChildren}
						defaultColDef={defaultColDef}
						pagination={pagination}
						paginationPageSize={paginationPageSize}
						alwaysShowHorizontalScroll
						alwaysShowVerticalScroll
					></AgGridReact>
				</div>
			</div>
			{customPagination && (
				<ul className="pagination  justify-content-center mt-3">
					<li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
						<a className="page-link" onClick={onBtPrevious}>
							Previous
						</a>
					</li>
					<li className={`page-item ${currentPage === 0 ? 'active' : ''}`}>
						<a className="page-link" onClick={() => onSelectedpage(1)}>
							1
						</a>
					</li>
					<li className={`page-item ${currentPage === 1 ? 'active' : ''}`}>
						<a className="page-link" onClick={() => onSelectedpage(2)}>
							2
						</a>
					</li>
					<li className={`page-item ${currentPage === 2 ? 'active' : ''}`}>
						<a className="page-link" onClick={() => onSelectedpage(3)}>
							3
						</a>
					</li>
					<li className={`page-item ${currentPage >= 3 ? 'active' : ''}`}>
						<a className="page-link" onClick={onBtNext}>
							Next
						</a>
					</li>
				</ul>
			)}
		</div>
	);
}
export default PtgUiAgGrid;
