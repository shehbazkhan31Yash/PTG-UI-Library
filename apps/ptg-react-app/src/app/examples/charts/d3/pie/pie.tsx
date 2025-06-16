import PtgUiD3Pie from '@ptg-react-app/components/charts/d3/pie/pie';
import { d3PieData } from '@ptg-react-app/mock/mocks';

/* eslint-disable-next-line */
export interface PtgUId3PieProps {}

export function PtgUId3Pie(props: PtgUId3PieProps) {
  return <PtgUiD3Pie {...d3PieData} />;
}

export default PtgUId3Pie;
