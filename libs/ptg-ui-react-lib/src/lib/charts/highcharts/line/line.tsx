/**
 * @since Feb 2022
 * @author Ankit Patidar
 * @uses Reusable Component for Line graph with highchart library
 *
 */

import './line.scss';
import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

/* eslint-disable-next-line */
export interface PtgUiLineProps {
	remainingOptions: any;
	highcharts?: any;
	title?: any;
	data?: any;
}

const defaultProps: PtgUiLineProps = {
	title: {},
	highcharts: Highcharts,
	remainingOptions: {},
};

export function PtgUiLine({ title, data, remainingOptions, ...rest }: PtgUiLineProps) {
	let graphOptions: any = {
		title: title,
		series: [
			{
				type: 'line',
				lineWidth: 1,
				data: data,
				color: [
					'#2f7ed8',
					'#0d233a',
					'#8bbc21',
					'#910000',
					'#1aadce',
					'#492970',
					'#f28f43',
					'#77a1e5',
					'#c42525',
					'#a6c96a',
				],
			},
		],
	};
	return (
		<div>
			<HighchartsReact options={{ ...graphOptions, ...remainingOptions }} {...rest} />
		</div>
	);
}

PtgUiLine.defaultProps = defaultProps;
export default PtgUiLine;
