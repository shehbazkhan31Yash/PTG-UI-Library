//import './line.scss';
import { useEffect, useState } from 'react';
import { PtguseFetch } from '@ptg-ui/react';
import PtgUiLineBar from '@ptg-react-app/components/charts/highcharts/linebar/linebar';

/* eslint-disable-next-line */
export interface PtgUiHCLineBarProps {}

export function PtgUiHCLineBar(props: PtgUiHCLineBarProps) {
  const [highchartsLineBar, setHighchartsLineBar] = useState<any[]>([]);
  const { data: apiDataLineChart } = PtguseFetch('line-bar-lists') as any;

  useEffect(() => {
    const categoryArray =
      apiDataLineChart[0]?.attributes?.categories.split(',');
    const lineBarChartData: any = {
      title: apiDataLineChart[0]?.attributes?.title,
      subtitle: apiDataLineChart[0]?.attributes?.subtitle,
      categories: categoryArray,
      remainingOptions: {
        series: apiDataLineChart[0]?.attributes?.series,
      },
    };
    setHighchartsLineBar(lineBarChartData);
  }, [apiDataLineChart]);

  return <PtgUiLineBar {...highchartsLineBar} />;
}

export default PtgUiHCLineBar;
