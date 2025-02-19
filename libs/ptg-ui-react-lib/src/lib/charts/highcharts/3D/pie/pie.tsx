/**
 * @since March 2022
 * @author Ankit Patidar
 * @uses Reusable Component for Column  3d graph with highchart library
 *
 */

import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

/* eslint-disable-next-line */
export interface PtgUi3dPieProps {
	remainingOptions: any;
	highcharts?: any;
	title?: any;
	data?: any;
	categories?: any;
	seriesName?: any;
}

const defaultProps: PtgUi3dPieProps = {
	title: { text: '' },
	highcharts: Highcharts,
	remainingOptions: {},
	seriesName: '',
};

export function PtgUi3dPie({ title, data, categories, seriesName, remainingOptions, ...rest }: PtgUi3dPieProps) {
	const graphOptions: any = {
		chart: {
			type: 'pie',
			backgroundColor: null,
			options3d: {
				enabled: true,
				alpha: 45,
				beta: 0,
				frame: {
					visible: false,
				},
			},
		},
		title: {
			text: title,
		},
		accessibility: {
			point: {
				valueSuffix: '%',
			},
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				depth: 35,
				dataLabels: {
					enabled: true,
					format: '{point.name}',
				},
			},
		},
		series: [
			{
				name: seriesName,
				data: data,
			},
		],
	};

	return (
		<div className="pie3DHigh">
			<HighchartsReact options={{ ...graphOptions }} {...rest} />
		</div>
	);
}

PtgUi3dPie.defaultProps = defaultProps;
export default PtgUi3dPie;
