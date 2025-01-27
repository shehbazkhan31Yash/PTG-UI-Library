import './line.scss';
import {PtgUiD3Line} from '@ptg-ui/react';
import { d3LineData} from '@ptg-react-app/mock/mocks';

/* eslint-disable-next-line */
export interface PtgUId3LineProps {}

export function PtgUid3LineDummy(props: PtgUId3LineProps) {
  return (
    <PtgUiD3Line {...d3LineData}/>
  );
}

export default PtgUid3LineDummy;
