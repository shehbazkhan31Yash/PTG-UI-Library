import './pie.scss';
import {PtgUi3dPie} from '@ptg-ui/react';
import { pie3dData} from '@ptg-react-app/mock/mocks';

/* eslint-disable-next-line */
export interface PtgUiHC3dPieProps {}

export function PtgUiHC3dPie(props: PtgUiHC3dPieProps) {
  return (
    <PtgUi3dPie {...pie3dData}/>
  );
}

export default PtgUiHC3dPie;
