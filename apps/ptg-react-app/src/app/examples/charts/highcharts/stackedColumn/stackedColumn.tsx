import { PtguseFetch } from '@ptg-ui/react';
import { useState, useEffect } from 'react';
import PtgUiStackedColumn from '@ptg-react-app/components/charts/highcharts/stackedcolumn/stackedColumn';

/* eslint-disable-next-line */
export interface PtgUiHCStackedColumnProps {}

export function PtgUiHCSColumn(props: PtgUiHCStackedColumnProps) {
  const [high2DStacked, setHigh2DStacked] = useState<any[]>([]);

  const { data: apiHigh2DStacked } = PtguseFetch('stacked-column-lists') as any;

  useEffect(() => {
    const categoryArray =
      apiHigh2DStacked[0]?.attributes?.categories.split(',');

    const StackedChartData: any = {
      title: apiHigh2DStacked[0]?.attributes?.title,
      categories: categoryArray,
      remainingOptions: {
        series: apiHigh2DStacked[0]?.attributes?.series,
      },
    };

    setHigh2DStacked(StackedChartData);
  }, [apiHigh2DStacked]);

  return <PtgUiStackedColumn {...high2DStacked} />;
}

export default PtgUiHCSColumn;
