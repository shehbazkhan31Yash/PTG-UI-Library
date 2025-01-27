/**
 * @since March 2022
 * @author Harsha Zalawa
 * @desc Reusable Loading component
 * 
*/
import './loading.scss';
import { Loading } from 'react-loading-dot';
/* eslint-disable-next-line */
export interface LoadingProps {}

export function PtgUiLoading(props: LoadingProps) {
  return (
    <div>
      <Loading background="#000" />
    </div>
  );
}

export default PtgUiLoading;
