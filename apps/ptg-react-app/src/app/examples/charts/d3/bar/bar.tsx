import PtgUiD3Bar from '@ptg-react-app/components/charts/d3/bar/bar';

import { d3BarData } from '@ptg-react-app/mock/mocks';

/* eslint-disable-next-line */
export interface PtgUId3BarProps {}

export function PtgUId3Bar(props: PtgUId3BarProps) {
  return <PtgUiD3Bar {...d3BarData} />;
}

export default PtgUId3Bar;
