/**
 * @since March 2022
 * @author Ankit Patidar
 * @uses Reusable Component for D3 pie chart
 *
 */
import * as React from 'react';
import * as d3 from 'd3';

export interface PtgUiD3PieProps {
  readonly data: Array<{ label: string; value: number; color: string }>;

  readonly height?: number;
  readonly width?: number;
  readonly innerRadius?: number;
  readonly outerRadius?: number;
  readonly colorsArray?: string[];
}

const defaultProps: Partial<PtgUiD3PieProps> = {
  data: [
    { label: 'Rust', value: 78.9, color: '#000000' },
    { label: 'Kotlin', value: 75.1, color: '#00a2ee' },
    { label: 'Python', value: 68.0, color: '#fbcb39' },
    { label: 'TypeScript', value: 67.0, color: '#007bc8' },
    { label: 'Go', value: 65.6, color: '#65cedb' },
    { label: 'Swift', value: 65.1, color: '#ff6e52' },
    { label: 'JavaScript', value: 61.9, color: '#f9de3f' },
    { label: 'C#', value: 60.4, color: '#5d2f8e' },
    { label: 'F#', value: 59.6, color: '#008fc9' },
    { label: 'Clojure', value: 59.6, color: '#507dca' },
  ],
  height: 400,
  width: 400,
  innerRadius: 0,
  outerRadius: 150,
  colorsArray: [
    '#8D8741',
    '#659DBD',
    '#DAAD86',
    '#BC986A',
    '#FBEEC1',
    '#242582',
  ],
};

export function PtgUiD3Pie({
  data = defaultProps.data ?? [],
  height = defaultProps.height,
  width = defaultProps.width,
  innerRadius = defaultProps.innerRadius,
  outerRadius = defaultProps.outerRadius,
  colorsArray = defaultProps.colorsArray,
}: Readonly<PtgUiD3PieProps>) {
  const flag = React.useRef(true);

  const createSvg = React.useCallback(() => {
    return d3
      .select('.d3_pie')
      .append('svg')
      .attr('width', width ?? 400)
      .attr('height', height ?? 400)
      .attr('viewBox', [0, 0, width ?? 400, height ?? 400])
      .attr('style', 'max-width: 100%; height: auto; height: intrinsic;')
      .append('g')
      .attr(
        'transform',
        'translate(' + (width ?? 400) / 2 + ',' + (height ?? 400) / 2 + ')'
      );
  }, [width, height]);

  const createColors = React.useCallback(() => {
    return d3
      .scaleOrdinal<string>()
      .domain(data.map((d) => d.label))
      .range(colorsArray || []);
  }, [data, colorsArray]);

  const drawChart = React.useCallback(
    (svg: any) => {
      const pie = d3
        .pie<{ label: string; value: number }>()
        .value((d) => d.value);
      const colors = createColors();

      svg
        .selectAll('pieces')
        .data(pie(data))
        .enter()
        .append('path')
        .attr(
          'd',
          d3
            .arc<any>()
            .innerRadius(innerRadius ?? 0)
            .outerRadius(outerRadius ?? 150)
        )
        .attr('fill', (_d: any, i: number) => colors(i.toString()))
        .attr('stroke', '#ffffff')
        .style('stroke-width', '1px');

      const labelLocation = d3
        .arc<any>()
        .innerRadius(100)
        .outerRadius(outerRadius ?? 150);

      svg
        .selectAll('pieces')
        .data(pie(data))
        .enter()
        .append('text')
        .text((d: any) => d.data.label)
        .attr(
          'transform',
          (d: any) => 'translate(' + labelLocation.centroid(d) + ')'
        )
        .style('text-anchor', 'middle')
        .style('font-size', 12);
    },
    [data, innerRadius, outerRadius, createColors]
  );

  React.useEffect(() => {
    if (flag.current) {
      const svg: any = createSvg();
      createColors();
      drawChart(svg);
      flag.current = false;
    }
  }, [createSvg, createColors, drawChart]);

  return <div className="d3_pie"></div>;
}

PtgUiD3Pie.defaultProps = defaultProps;
export default PtgUiD3Pie;
