/**
 * @since Feb 2022
 * @author Ankit Patidar
 * @uses Reusable Component for Linebar graph with highchart library
 *
 */

import './linebar.scss';
import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

/* eslint-disable-next-line */
export interface PtgUiLineBarProps {
	remainingOptions: any;
	highcharts?: any;
	title?: any;
	subtitle?: any;
	categories?: any;
}

const defaultProps: PtgUiLineBarProps = {
	title: {},
	subtitle: {},
	highcharts: Highcharts,
	remainingOptions: {},
	categories: [],
};

export function PtgUiLineBar({ title, subtitle, categories, remainingOptions, ...rest }: PtgUiLineBarProps) {
	let graphOptions: any = {
		chart: {
			zoomType: 'xy',
		},

		subtitle: {
			text: subtitle,
		},
		title: {
			text: title,
		},
		xAxis: [
			{
				categories: categories,
				crosshair: true,
			},
		],
	};
	return (
		<div>
			<HighchartsReact options={{ ...graphOptions, ...remainingOptions }} {...rest} />
		</div>
	);
}

PtgUiLineBar.defaultProps = defaultProps;
export default PtgUiLineBar;
