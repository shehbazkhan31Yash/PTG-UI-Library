import React, { useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import PtgUiToaster from '@ptg-ui/libs/ptg-ui-react-lib/src/lib/toaster/toaster';
import { PtgButton } from '@ptg-ui/libs/ptg-ui-web-components-react/src';
import { useTranslation } from 'react-i18next';

export default function Toaster() {
  const [showCode, setShowCode] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'success' | 'error'>('success');
  const { t } = useTranslation();
  const displayToast = (msg: string, messageType: 'success' | 'error') => {
    setMessage(msg);
    setType(messageType);
    setShowToast(!showToast);
  };

  const componentCode = `
  import PtgUiToaster from '@ptg-ui/libs/ptg-ui-react-lib/src/lib/toaster/toaster';
  import { PtgButton } from '@ptg-ui/libs/ptg-ui-web-components-react/src';
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
    <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
   <div className="row">
          <div className="col-10 mb-2 mt-2">
            <h5 className="font-weight-bold example-heading">{t('TOASTER')}</h5>
          </div>
          <div className="col-2">
        <CodeIcon
          onClick={() => setShowCode((prev) => !prev)}
          fontSize="medium"
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
      <div className="col-md-12 px-4">
        <PtgButton
          text="Show Success Toast"
          data-testid="openButton"
          appearance="primary"
          onClick={() => displayToast('Success message', 'success')}
          className="mb-4 mt-2"
        ></PtgButton>
        <PtgButton
          text="Show Error Toast"
          data-testid="openButton"
          appearance="primary"
          onClick={() => displayToast('Error message', 'error')}
        ></PtgButton>
        <PtgUiToaster
          show={showToast}
          setShow={setShowToast}
          message={message}
          type={type}
        ></PtgUiToaster>
      </div>
    </div>
    </section>
  );
}