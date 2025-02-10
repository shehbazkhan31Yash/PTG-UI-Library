/**
 * @since Feb 2022
 * @author Ankit Patidar
 * @uses Reusable Component for Column graph with highchart library
 *
 */

import './stackedColumn.scss';
import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

/* eslint-disable-next-line */
export interface PtgUiStackedColumnProps {
	remainingOptions: any;
	highcharts?: any;
	title?: any;
	data?: any;
	yTitle?: any;
	categories?: any;
}

const defaultProps: PtgUiStackedColumnProps = {
	title: {},
	highcharts: Highcharts,
	remainingOptions: {},
	yTitle: '',
	categories: [],
};

export function PtgUiStackedColumn({
	title,
	yTitle,
	data,
	categories,
	remainingOptions,
	...rest
}: PtgUiStackedColumnProps) {
	let graphOptions: any = {
		chart: {
			type: 'column',
		},
		title: title,
		xAxis: {
			categories: categories,
		},
		yAxis: {
			min: 0,
			title: {
				text: yTitle,
			},
			stackLabels: {
				enabled: true,
				style: {
					fontWeight: 'bold',
					color:
						// theme
						(defaultProps.highcharts.defaultOptions.title.style &&
							defaultProps.highcharts.defaultOptions.title.style.color) ||
						'gray',
				},
			},
		},
		plotOptions: {
			column: {
				stacking: 'normal',
				dataLabels: {
					enabled: true,
				},
			},
		},
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

PtgUiStackedColumn.defaultProps = defaultProps;
export default PtgUiStackedColumn;
