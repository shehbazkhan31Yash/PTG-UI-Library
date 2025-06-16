import PtgUi3dPie from '@ptg-react-app/components/charts/highcharts/3D/pie/pie';
import { pie3dData } from '@ptg-react-app/mock/mocks';

/* eslint-disable-next-line */
export interface PtgUiHC3dPieProps {}

export function PtgUiHC3dPie(props: PtgUiHC3dPieProps) {
  return <PtgUi3dPie {...pie3dData} />;
}

export default PtgUiHC3dPie;
