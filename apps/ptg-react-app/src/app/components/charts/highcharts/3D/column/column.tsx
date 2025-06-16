/**
 * @since March 2022
 * @author Ankit Patidar
 * @uses Reusable Component for Column  3d graph with highchart library
 *
 */

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

/* eslint-disable-next-line */
export interface PtgUi3dColumnProps {
  readonly remainingOptions?: any;
  readonly highcharts?: any;
  readonly title?: any;
  readonly data?: any;
  readonly categories?: any;
  readonly xTitle?: any;
  readonly yTitle?: any;
}

const defaultProps: Partial<PtgUi3dColumnProps> = {
  title: null,
  highcharts: Highcharts,
  remainingOptions: {},
  xTitle: null,
  yTitle: null,
};

export function PtgUi3dColumn({
  title = defaultProps.title,
  xTitle = defaultProps.xTitle,
  yTitle = defaultProps.yTitle,
  data,
  categories,
  remainingOptions = defaultProps.remainingOptions,
  ...rest
}: Readonly<PtgUi3dColumnProps>) {
  const graphOptions: any = {
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
