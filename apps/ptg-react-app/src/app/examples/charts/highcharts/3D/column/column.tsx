import PtgUi3dColumn from '@ptg-react-app/components/charts/highcharts/3D/column/column';
import { column3DOptions } from '@ptg-react-app/mock/mocks';

/* eslint-disable-next-line */
export interface PtgUiHC3dColumnProps {}

export function PtgUiHC3dColumn(props: PtgUiHC3dColumnProps) {
  return <PtgUi3dColumn {...column3DOptions} />;
}

export default PtgUiHC3dColumn;
