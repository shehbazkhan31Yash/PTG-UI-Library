/* eslint-disable-next-line */
/**
 * @since March 2022
 * @author Ankit Patidar
 * @uses Reusable Component for D3 bar graph
 *
 */
import './bar.scss';
import * as React from 'react';
import * as d3 from 'd3';

export interface PtgUiD3BarProps {
	data?: any;
	height?: any;
	width?: any;
	source?: any;
	title?: any;
	x_title: string;
	y_title: string;
	start?: any;
	end?: any;
}

const defaultProps: PtgUiD3BarProps = {
	data: [
		{ Framework: 'Vuee', Stars: '100000', Released: '2014', color: '#454545' },

		{ Framework: 'React', Stars: '120793', Released: '2013', color: 'blue' },

		{ Framework: 'Angular', Stars: '92342', Released: '2016', color: 'green' },

		{
			Framework: 'Backbone',

			Stars: '67647',

			Released: '2010',

			color: 'orange',
		},

		{ Framework: 'Ember', Stars: '121471', Released: '2011', color: 'pink' },
	],
	height: 400,
	width: 600,
	source: ' ',
	title: '',
	x_title: ' ',
	y_title: ' ',
	start: 0,
	end: 200000,
};

export function PtgUiD3Bar({ data, height, width, source, title, x_title, y_title, start, end }: PtgUiD3BarProps) {
	const flag = React.useRef(true);
	const createSvg: any = () => {
		const margin = 60;

		const svg = d3
			.select('.d3_bar')
			//returns a selection object that encapsulates the first element in the DOM with a CSS class of "bar"
			.append('svg') //Appends a new element of this type (tag name) as the last child of each selected element
			.attr('width', width + margin * 2) //Sets the attribute with the specified name to the specified value on the selected elements and returns this selection
			.attr('height', height + margin * 2)
			.attr('viewBox', [0, 0, width + margin * 2, height + margin * 2])
			.attr('style', 'max-width: 100%; height: auto; height: intrinsic;')
			.append('g')
			.attr('transform', 'translate(' + margin + ',' + margin + ')');
		return svg;
	};

	const drawBars: any = (svg: any, data: any[]) => {
		// Create the X-axis band scale
		const x = d3
			.scaleBand()
			.range([0, width])
			.domain(data.map((d: any) => d.Framework))
			.padding(0.2);

		// Draw the X-axis on the DOM
		svg
			.append('g') //g element is used to group SVG shapes together
			.attr('transform', 'translate(0,' + height + ')')
			.call(d3.axisBottom(x))
			.selectAll('text')
			.attr('transform', 'translate(-10,0)rotate(-45)')
			.style('text-anchor', 'end');

		svg
			.append('text')
			.attr('transform', 'translate(' + width / 2 + ' ,' + (height + 60) + ')')
			.style('text-anchor', 'middle')
			.style('font-size', '10px')
			.text('Frameworks');

		// Create the Y-axis band scale
		const y = d3.scaleLinear().domain([start, end]).range([height, 0]);

		// Draw the Y-axis on the DOM
		svg.append('g').call(d3.axisLeft(y));

		svg
			.append('text')
			.attr('transform', 'rotate(-90)')
			.attr('y', 0 - 60) // Adjust as needed for positioning
			.attr('x', 0 - height / 2)
			.attr('dy', '1em') // Adjust as needed for vertical alignment
			.style('text-anchor', 'middle')
			.style('font-size', '10px')
			.text('Value');

		svg
			.selectAll('bars')
			.data(data)
			.enter()
			.append('rect')
			.attr('x', (d: any) => x(d.Framework))
			.attr('y', (d: any) => y(d.Stars))
			.attr('width', x.bandwidth())
			.attr('height', (d: any) => height - y(d.Stars))

			.attr('fill', (d: any, i: any) => {
				console.log('color', d.color);
				return d.color;
			});
	};

	React.useEffect(() => {
		if (flag.current) {
			const svg: any = createSvg();
			drawBars(svg, data);
			flag.current = false;
		}
	}, []);

	return (
		<>
			<div className="d3_bar"></div>
		</>
	);
}
PtgUiD3Bar.defaultProps = defaultProps;
export default PtgUiD3Bar;
