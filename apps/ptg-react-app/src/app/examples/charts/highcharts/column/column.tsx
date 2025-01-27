import './column.scss';
import {PtgUiColumn} from '@ptg-ui/react';
import { highchartsColumnData} from '@ptg-react-app/Mock/mocks';

/* eslint-disable-next-line */
export interface PtgUiHCColumnProps {}

export function PtgUiHCColumn(props: PtgUiHCColumnProps) {
  return (
    <PtgUiColumn {...highchartsColumnData}/>
  );
}

export default PtgUiHCColumn;
