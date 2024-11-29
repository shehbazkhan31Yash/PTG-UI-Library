/**
 * @since Oct 2024
 * @author Manish patidar
 * @desc Reusable Login Component
 *
 */
import { useState } from 'react';
import './Login.scss';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../../common/showCode/showCodeComponent';
import { PtgUiLogin } from '@ptg-ui/react';

export function PtgLogin() {
  const [showCode, setShowCode] = useState(false);

  const ShowExampleCode = () => {
    if (!showCode) {
      setShowCode(true);
    } else {
      setShowCode(false);
    }
  };

  const componentCode = `
    import {
      PtgUiLogin,
    } from '@ptg-ui/react';
  `;

  const htmlCode = `
    <PtgUiLogin />
  `;

  return (
    <>
      <div className="row">
        <div className="col-10 mt-1">
          <h5 className="font-weight-bold example-heading">Login</h5>
        </div>
        <div className="col-2 mr-5 mb-2">
          <CodeIcon
            onClick={ShowExampleCode}
            fontSize="large"
            className="show-code-icon"
          ></CodeIcon>
        </div>
        <hr className="horizontal-line" />
        {showCode && (
          <ShowCodeComponent
            componentCode={componentCode}
            htmlCode={htmlCode}
          />
        )}
        <PtgUiLogin />
      </div>
    </>
  );
}

export default PtgLogin;
