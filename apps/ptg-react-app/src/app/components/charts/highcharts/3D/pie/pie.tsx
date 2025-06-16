/**
 * @since March 2022
 * @author Ankit Patidar
 * @uses Reusable Component for Column  3d graph with highchart library
 *
 */

import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

/* eslint-disable-next-line */
export interface PtgUi3dPieProps {
  readonly remainingOptions?: any;
  readonly highcharts?: any;
  readonly title?: any;
  readonly data?: any;
  readonly categories?: any;
  readonly seriesName?: any;
}

const defaultProps: Partial<PtgUi3dPieProps> = {
  title: { text: '' },
  highcharts: Highcharts,
  remainingOptions: {},
  seriesName: '',
};

export function PtgUi3dPie({
  title = defaultProps.title,
  data,
  categories,
  seriesName = defaultProps.seriesName,
  remainingOptions = defaultProps.remainingOptions,
  ...rest
}: Readonly<PtgUi3dPieProps>) {
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
    ...remainingOptions,
  };

  return (
    <div className="pie3DHigh">
      <HighchartsReact options={{ ...graphOptions }} {...rest} />
    </div>
  );
}

PtgUi3dPie.defaultProps = defaultProps;
export default PtgUi3dPie;
