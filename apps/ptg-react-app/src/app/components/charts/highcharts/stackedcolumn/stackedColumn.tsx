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
	readonly remainingOptions?: any;
	readonly highcharts?: any;
	readonly title?: any;
	readonly data?: any;
	readonly yTitle?: any;
	readonly categories?: any;
}

const defaultProps: Partial<PtgUiStackedColumnProps> = {
	title: {},
	highcharts: Highcharts,
	remainingOptions: {},
	yTitle: '',
	categories: [],
};

export function PtgUiStackedColumn({
	title = defaultProps.title,
	yTitle = defaultProps.yTitle,
	data,
	categories = defaultProps.categories,
	remainingOptions = defaultProps.remainingOptions,
	...rest
}: Readonly<PtgUiStackedColumnProps>) {
	const graphOptions: any = {
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
						defaultProps.highcharts?.defaultOptions?.title?.style?.color ||
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
