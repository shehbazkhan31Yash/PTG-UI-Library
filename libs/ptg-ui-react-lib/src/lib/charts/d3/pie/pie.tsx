/**
 * @since March 2022
 * @author Ankit Patidar
 * @uses Reusable Component for D3 pie chart
 *
 */

import './pie.scss';
import * as React from 'react';
import * as d3 from 'd3';

export interface PtgUiD3PieProps {
	data: any;
	height?: any;
	width?: any;
	innerRadius?: any;
	outerRadius?: any;
	colorsArray?: any;
}

const defaultProps: PtgUiD3PieProps = {
	data: [
		{
			label: 'Rust',
			value: 78.9,
			color: '#000000',
		},
		{
			label: 'Kotlin',
			value: 75.1,
			color: '#00a2ee',
		},
		{
			label: 'Python',
			value: 68.0,
			color: '#fbcb39',
		},
		{
			label: 'TypeScript',
			value: 67.0,
			color: '#007bc8',
		},
		{
			label: 'Go',
			value: 65.6,
			color: '#65cedb',
		},
		{
			label: 'Swift',
			value: 65.1,
			color: '#ff6e52',
		},
		{
			label: 'JavaScript',
			value: 61.9,
			color: '#f9de3f',
		},
		{
			label: 'C#',
			value: 60.4,
			color: '#5d2f8e',
		},
		{
			label: 'F#',
			value: 59.6,
			color: '#008fc9',
		},
		{
			label: 'Clojure',
			value: 59.6,
			color: '#507dca',
		},
	],
	height: 400,
	width: 400,
	innerRadius: 0,
	outerRadius: 150,
	colorsArray: ['#8D8741', '#659DBD', '#DAAD86', '#BC986A', '#FBEEC1', '#242582'],
};

export function PtgUiD3Pie({ data, height, width, innerRadius, outerRadius, colorsArray }: PtgUiD3PieProps) {
	const flag = React.useRef(true);
	const createSvg: any = () => {
		const svg = d3
			.select('.d3_pie')
			.append('svg')
			.attr('width', width)
			.attr('height', height)
			.attr('viewBox', [0, 0, width, height])
			.attr('style', 'max-width: 100%; height: auto; height: intrinsic;')

			.append('g')
			.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

		return svg;
	};

	const createColors: any = () => {
		const colors = d3
			.scaleOrdinal()
			.domain(data?.map((d: any) => d.Stars.toString()))
			.range(colorsArray);
		return colors;
	};

	const drawChart = (svg: any) => {
		// Compute the position of each group on the pie:
		const pie = d3.pie<any>().value((d: any) => Number(d.Stars));

		const colors: any = createColors();

		// Build the pie chart
		svg
			.selectAll('pieces')
			.data(pie(data))
			.enter()
			.append('path')
			.attr('d', d3.arc().innerRadius(0).outerRadius(outerRadius))
			.attr('fill', (d: any, i: any) => colors(i))
			.attr('stroke', '#ffffff')
			.style('stroke-width', '1px');

		// Add labels
		const labelLocation = d3.arc().innerRadius(100).outerRadius(outerRadius);

		svg
			.selectAll('pieces')
			.data(pie(data))
			.enter()
			.append('text')
			.text((d: any) => d.data.Framework)
			.attr('transform', (d: any) => 'translate(' + labelLocation.centroid(d) + ')')
			.style('text-anchor', 'middle')
			.style('font-size', 12);
	};

	React.useEffect(() => {
		if (flag.current) {
			const svg: any = createSvg();
			createColors();
			drawChart(svg);
			flag.current = false;
		}
	}, []);

	return (
		<div className="d3_pie"></div>
	);
}

PtgUiD3Pie.defaultProps = defaultProps;
export default PtgUiD3Pie;
