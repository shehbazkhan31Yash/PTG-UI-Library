/**
 * @since Feb 2022
 * @author Ankit Patidar
 * @uses Reusable Component for Alert
 *
 */

import './alert.module.scss';
import { useEffect, useState } from 'react';
/* eslint-disable-next-line */
export interface AlertProps {
  message?: any;
  type?: any
}

const defaultProps: AlertProps = {
  type: 'danger'
}
export function PtgUiAlert({ type, message }: AlertProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 4000);
  }, []);

  return (
    <div>
      {
        show &&
        <div className={`alert alert-${type}`} role="alert">
          {message}
        </div>
      }

    </div>
  );
}

PtgUiAlert.defaultProps = defaultProps;
export default PtgUiAlert;
