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
  readonly remainingOptions?: any;
  readonly highcharts?: any;
  readonly title?: any;
  readonly data?: any;
}

const defaultProps: Partial<PtgUiPieProps> = {
  title: {},
  highcharts: Highcharts,
  remainingOptions: {},
};

export function PtgUiPie({
  title = defaultProps.title,
  data,
  remainingOptions = defaultProps.remainingOptions,
  ...rest
}: Readonly<PtgUiPieProps>) {
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
      <HighchartsReact
        options={{ ...graphOptions, ...remainingOptions }}
        {...rest}
      />
    </div>
  );
}

PtgUiPie.defaultProps = defaultProps;
export default PtgUiPie;
