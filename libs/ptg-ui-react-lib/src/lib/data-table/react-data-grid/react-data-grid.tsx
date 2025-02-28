/**
 * @since Feb 2022
 * @author Harsha Zalawa
 * @uses Reusable Component for React Data Grid
 * @Reference https://reactdatagrid.io/docs/getting-started
 *
 */
import '@inovua/reactdatagrid-community/index.css';
import './react-data-grid.scss';
import { useCallback, useEffect, useState } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import { TypeEditInfo } from '@inovua/reactdatagrid-community/types';

export interface PtgUiReactDataGridProps {
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
	// data : any ;
	columns: any;
	filterValue: any;
	minHeight: number;
	idProperty: string;
	pagination: boolean;
	defaultLimit?: number;
	editable?: boolean;
	nativeScroll?: boolean;
	checkboxColumn?: any;
}

export function PtgUiReactDataGrid({
	data,
	columns,
	nativeScroll,
	filterValue,
	minHeight,
	idProperty,
	pagination,
	defaultLimit,
	editable,
	checkboxColumn,
}: PtgUiReactDataGridProps) {
	const [rowData, setRowData] = useState(data);

	/* istanbul ignore next */
	const onEditComplete = useCallback(
		({ value, columnId, rowId }: TypeEditInfo) => {
			const data: any = [...rowData];
			data[+rowId - 1][columnId] = value;
			setRowData(data);
		},
		[rowData]
	);

	useEffect(() => {
		setRowData(data);
	}, [data]);

	const enableSelection = true;
	const [selected, setSelected] = useState(null);
	/* istanbul ignore next */
	const onSelectionChange = useCallback(({ selected }: { selected: any }) => {
		setSelected(selected);
		//  alert("Row Selected");
	}, []);

	return (
		<ReactDataGrid
			onEditComplete={onEditComplete}
			idProperty={idProperty}
			columns={columns}
			nativeScroll={nativeScroll}
			dataSource={rowData}
			style={{ minHeight: minHeight }}
			pagination={pagination}
			// checkboxColumn={checkboxColumn}
			// checkboxColumn={true}
			defaultLimit={defaultLimit}
			editable={editable}
			defaultFilterValue={filterValue}
			enableSelection={enableSelection}
			onSelectionChange={onSelectionChange}
		/>
	);
}

export default PtgUiReactDataGrid;
