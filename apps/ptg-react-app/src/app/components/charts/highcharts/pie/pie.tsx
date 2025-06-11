/**
 * @since Feb 2022
 * @author Ankit Patidar
 * @uses Reusable Component for Pie graph with highchart library
 *
 */

import './pie.scss';
import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
/* eslint-disable-next-line */
export interface PtgUiPieProps {
	remainingOptions: any;
	highcharts?: any;
	title?: any;
	data?: any;
}

const defaultProps: PtgUiPieProps = {
	title: {},
	highcharts: Highcharts,
	remainingOptions: {},
};

export function PtgUiPie({ title, data, remainingOptions, ...rest }: PtgUiPieProps) {
	const graphOptions: any = {
		title: title,
		chart: {
			type: 'pie',
		},
		series: [
			{
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

PtgUiPie.defaultProps = defaultProps;
export default PtgUiPie;
