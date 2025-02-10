/**
 * @since March 2022
 * @author Ankit Patidar
 * @uses Reusable Component for Line 3d graph with highchart library
 *
 */

import './line.scss';
import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

/* eslint-disable-next-line */
export interface PtgUi3dLineProps {
	remainingOptions: any;
	highcharts?: any;
	title?: any;
	data?: any;
	categories?: any;
	xTitle?: any;
	yTitle?: any;
}

const defaultProps: PtgUi3dLineProps = {
	title: null,
	highcharts: Highcharts,
	remainingOptions: {},
	xTitle: null,
	yTitle: null,
};

export function PtgUi3dLine({ title, xTitle, yTitle, data, categories, remainingOptions, ...rest }: PtgUi3dLineProps) {
	let graphOptions: any = {
		title: {
			text: title,
		},
		chart: {
			type: 'line',
			options3d: {
				enabled: true,
				alpha: 15,
				beta: 15,
				depth: 50,
				viewDistance: 100,
			},
		},
		plotOptions: {
			column: {
				depth: 5,
			},
		},
		xAxis: {
			categories: categories,
			title: {
				text: xTitle,
			},
		},
		yAxis: {
			title: {
				text: yTitle,
			},
		},
		series: data,
		...remainingOptions,
	};
	return (
		<div>
			<HighchartsReact options={{ ...graphOptions }} {...rest} />
		</div>
	);
}

PtgUi3dLine.defaultProps = defaultProps;
export default PtgUi3dLine;
