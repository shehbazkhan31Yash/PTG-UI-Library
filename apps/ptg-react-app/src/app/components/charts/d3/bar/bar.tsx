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
  readonly data: Array<{
    Framework: string;
    Stars: number;
    Released: string;
    color: string;
  }>;
  readonly height: number;
  readonly width: number;
  readonly source?: string;
  readonly title?: string;
  readonly x_title: string;
  readonly y_title: string;
  readonly start?: number;
  readonly end?: number;
}

const defaultProps = {
  source: '',
  title: '',
  start: 0,
  end: 200000,
};

export function PtgUiD3Bar({
  data,
  height,
  width,
  source = defaultProps.source,
  title = defaultProps.title,
  x_title,
  y_title,
  start = defaultProps.start,
  end = defaultProps.end,
}: Readonly<PtgUiD3BarProps>) {
  const flag = React.useRef(true);

  const createSvg = React.useCallback(() => {
    const margin = 60;
    return d3
      .select('.d3_bar')
      .append('svg')
      .attr('width', width + margin * 2)
      .attr('height', height + margin * 2)
      .attr('viewBox', [0, 0, width + margin * 2, height + margin * 2])
      .attr('style', 'max-width: 100%; height: auto; height: intrinsic;')
      .append('g')
      .attr('transform', 'translate(' + margin + ',' + margin + ')');
  }, [width, height]);

  const drawBars = React.useCallback(
    (svg: any, data: any[]) => {
      if (!data || data.length === 0) return;
      const x = d3
        .scaleBand()
        .range([0, width])
        .domain(data.map((d: any) => d.Framework))
        .padding(0.2);

      svg
        .append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x))
        .selectAll('text')
        .attr('transform', 'translate(-10,0)rotate(-45)')
        .style('text-anchor', 'end');

      svg
        .append('text')
        .attr(
          'transform',
          'translate(' + width / 2 + ' ,' + (height + 60) + ')'
        )
        .style('text-anchor', 'middle')
        .style('font-size', '10px')
        .text(x_title);

      const y = d3.scaleLinear().domain([start, end]).range([height, 0]);
      svg.append('g').call(d3.axisLeft(y));

      svg
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 0 - 60)
        .attr('x', 0 - height / 2)
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .style('font-size', '10px')
        .text(y_title);

      svg
        .selectAll('bars')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (d: any) => x(d.Framework))
        .attr('y', (d: any) => y(Number(d.Stars)))
        .attr('width', x.bandwidth())
        .attr('height', (d: any) => height - y(Number(d.Stars)))
        .attr('fill', (d: any) => d.color);
    },
    [width, height, x_title, y_title, start, end]
  );

  React.useEffect(() => {
    if (flag.current && data && data.length > 0) {
      const svg: any = createSvg();
      drawBars(svg, data);
      flag.current = false;
    }
  }, [createSvg, drawBars, data]);

  return <div className="d3_bar"></div>;
}

PtgUiD3Bar.defaultProps = defaultProps;
export default PtgUiD3Bar;
