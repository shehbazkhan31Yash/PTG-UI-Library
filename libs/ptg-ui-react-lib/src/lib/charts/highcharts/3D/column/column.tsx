/**
 * @since March 2022
 * @author Ankit Patidar
 * @uses Reusable Component for Column  3d graph with highchart library
 *
 */

import './column.scss';
import * as React from 'react';
import { useState, useEffect } from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import PtguseFetch from '../../../../hooks/useFetch';

/* eslint-disable-next-line */
export interface PtgUi3dColumnProps {
	remainingOptions: any;
	highcharts?: any;
	title?: any;
	data?: any;
	categories?: any;
	xTitle?: any;
	yTitle?: any;
}

const defaultProps: PtgUi3dColumnProps = {
	title: null,
	highcharts: Highcharts,
	remainingOptions: {},
	xTitle: null,
	yTitle: null,
};

export function PtgUi3dColumn({
	title,
	xTitle,
	yTitle,
	data,
	categories,
	remainingOptions,
	...rest
}: PtgUi3dColumnProps) {
	let graphOptions: any = {
		title: {
			text: title,
		},
		chart: {
			type: 'bar',
			options3d: {
				enabled: true,
				alpha: 15,
				beta: 15,
				depth: 50,
				viewDistance: 50,
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

PtgUi3dColumn.defaultProps = defaultProps;
export default PtgUi3dColumn;
