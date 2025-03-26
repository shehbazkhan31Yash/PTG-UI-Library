import React, { useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import PtgUiToaster from '@ptg-ui/libs/ptg-ui-react-lib/src/lib/toaster/toaster';
import { PtgButton } from '@ptg-ui/libs/ptg-ui-web-components-react/src';

export default function Toaster() {
  const [showCode, setShowCode] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'success' | 'error'>('success');

  const displayToast = (msg: string, messageType: 'success' | 'error') => {
    setMessage(msg);
    setType(messageType);
    setShowToast(!showToast);
  };

  const componentCode = `
  import PtgUiToaster from '@ptg-ui/libs/ptg-ui-react-lib/src/lib/toaster/toaster';
  import { PtgButton } from '@ptg-ui/libs/ptg-ui-web-components-react/src';
  const [showCode, setShowCode] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'success' | 'error'>('success');
  const displayToast = (msg: string, messageType: 'success' | 'error') => {
    setMessage(msg);
    setType(messageType);
    setShowToast(!showToast);
  };
 `;
  const htmlCode = `
  <PtgButton text="Show Success Toast" data-testid="openButton" appearance="primary" onClick={() => displayToast('Success message', 'success')} className='mb-5'></PtgButton>
  <PtgButton text="Show Error Toast" data-testid="openButton" appearance="primary" onClick={() => displayToast('Error message', 'error')}></PtgButton>
  <PtgUiToaster show={showToast} setShow={setShowToast} message={message} type={type}>
  </PtgUiToaster>
 `;

  return (
    <div className="row mt-3">
      <div className="col-md-11">
        <h3 className="font-weight-bold">Toaster Example</h3>
      </div>
      <div className="col-1 ps-5">
        <CodeIcon
          onClick={() => setShowCode((prev) => !prev)}
          fontSize="medium"
          className="show-code-icon"
        ></CodeIcon>
      </div>
      {showCode && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="col-md-12">
        <PtgButton text="Show Success Toast" data-testid="openButton" appearance="primary" onClick={() => displayToast('Success message', 'success')} className='mb-4 mt-2'></PtgButton>
        <PtgButton text="Show Error Toast" data-testid="openButton" appearance="primary" onClick={() => displayToast('Error message', 'error')}></PtgButton>
        <PtgUiToaster show={showToast} setShow={setShowToast} message={message} type={type}>
        </PtgUiToaster>
      </div>
    </div>
  );
}