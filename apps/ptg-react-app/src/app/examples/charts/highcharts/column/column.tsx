import PtgUiColumn from '@ptg-react-app/components/charts/highcharts/column/column';
import { highchartsColumnData } from '@ptg-react-app/mock/mocks';

/* eslint-disable-next-line */
export interface PtgUiHCColumnProps {}

export function PtgUiHCColumn(props: PtgUiHCColumnProps) {
  return <PtgUiColumn {...highchartsColumnData} />;
}

export default PtgUiHCColumn;
