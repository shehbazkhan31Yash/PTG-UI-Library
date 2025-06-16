import PtgUiPie from '@ptg-react-app/components/charts/highcharts/pie/pie';
import { highchartsPieData } from '@ptg-react-app/mock/mocks';

/* eslint-disable-next-line */
export interface PtgUiHCPieProps {}

export function PtgUiHCPie(props: PtgUiHCPieProps) {
  return <PtgUiPie {...highchartsPieData} />;
}

export default PtgUiHCPie;
