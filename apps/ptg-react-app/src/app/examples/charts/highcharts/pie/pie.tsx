import './pie.scss';
import {PtgUiPie} from '@ptg-ui/react';
import { highchartsPieData} from '@ptg-react-app/Mock/mocks';

/* eslint-disable-next-line */
export interface PtgUiHCPieProps {}

export function PtgUiHCPie(props: PtgUiHCPieProps) {
  return (
    <PtgUiPie {...highchartsPieData}/>
  );
}

export default PtgUiHCPie;
