/**
 * @since Feb 2022
 * @author Ankit Patidar
 * @uses Reusable Component for Linebar graph with highchart library
 *
 */

import './linebar.scss';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

/* eslint-disable-next-line */
export interface PtgUiLineBarProps {
  readonly remainingOptions?: any;
  readonly highcharts?: any;
  readonly title?: any;
  readonly subtitle?: any;
  readonly categories?: any;
}

const defaultProps: Partial<PtgUiLineBarProps> = {
  title: {},
  subtitle: {},
  highcharts: Highcharts,
  remainingOptions: {},
  categories: [],
};

export function PtgUiLineBar({
  title = defaultProps.title,
  subtitle = defaultProps.subtitle,
  categories = defaultProps.categories,
  remainingOptions = defaultProps.remainingOptions,
  ...rest
}: Readonly<PtgUiLineBarProps>) {
  const graphOptions: any = {
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
      <HighchartsReact
        options={{ ...graphOptions, ...remainingOptions }}
        {...rest}
      />
    </div>
  );
}

PtgUiLineBar.defaultProps = defaultProps;
export default PtgUiLineBar;
