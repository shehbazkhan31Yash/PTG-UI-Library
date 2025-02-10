/**
 * @since Feb 2022
 * @author Ankit Patidar
 * @uses Reusable Component for Column graph with highchart library
 *
 */

import './column.scss';
import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

/* eslint-disable-next-line */
export interface PtgUiColumnProps {
	remainingOptions: any;
	highcharts?: any;
	title?: any;
	data?: any;
}

const defaultProps: PtgUiColumnProps = {
	title: {},
	highcharts: Highcharts,
	remainingOptions: {},
};

export function PtgUiColumn({ title, data, remainingOptions, ...rest }: PtgUiColumnProps) {
	let graphOptions: any = {
		title: title,
		series: [
			{
				type: 'column',
				data: data,
			},
		],
	};
	return (
		<div>
			<HighchartsReact options={{ ...graphOptions, ...remainingOptions }} {...rest} />
		</div>
	);
}

PtgUiColumn.defaultProps = defaultProps;
export default PtgUiColumn;
