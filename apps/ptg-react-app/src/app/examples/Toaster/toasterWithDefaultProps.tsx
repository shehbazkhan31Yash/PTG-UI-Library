import React, { useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import PtgUiToaster from '@ptg-ui/libs/ptg-ui-react-lib/src/lib/toaster/toaster';
import { PtgButton } from '@ptg-ui/libs/ptg-ui-web-components-react/src';
import { useTranslation } from 'react-i18next';
import CheckIcon from '@mui/icons-material/Check';
import './toaster.css';
export default function ToasterWithDefaultProps() {
  const [showCode, setShowCode] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');
  const { t } = useTranslation();
  const displayToast = (msg: string, messageType: string) => {
    setMessage(msg);
    setType(messageType);
    setShowToast(!showToast);
  };

  const componentCode = `
  import PtgUiToaster from '@ptg-ui/libs/ptg-ui-react-lib/src/lib/toaster/toaster';
  import { PtgButton } from '@ptg-ui/libs/ptg-ui-web-components-react/src';
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');
   const displayToast = (msg: string, messageType: string) => {
    setMessage(msg);
    setType(messageType);
    setShowToast(!showToast);
  };
 `;
  const htmlCode = `
    <PtgButton
          text="Show Toast"
          data-testid="openButton"
          appearance="primary"
          onClick={() => displayToast('Success message', 'success')}
          className="mb-4 mt-2"
          style={{ width: 'fit-content' }}
        ></PtgButton>
        <PtgUiToaster
          show={showToast}
          setShow={setShowToast}
          message={message}
          type={type}
          alignItem='center'
          justifyContent= 'center'
          icon={<CheckIcon className={toast-icon success}/>}
          timeToShow= {3000}
        ></PtgUiToaster>
 `;

  return (
    <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
   <div className="row">
          <div className="col-10 mb-2 mt-2">
            <h5 className="font-weight-bold example-heading">{t('BASIC-TOASTER')}</h5>
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
          text="Show Toast"
          data-testid="openButton"
          appearance="primary"
          onClick={() => displayToast('Success message', 'success')}
          className="mb-4 mt-2"
          style={{ width: 'fit-content' }}
        ></PtgButton>
        <PtgUiToaster
          show={showToast}
          setShow={setShowToast}
          message={message}
          type={type}
          alignItem='center'
          justifyContent= 'center'
          icon={<CheckIcon className={`toast-icon ${type}`}/>}
          timeToShow= {3000}
        ></PtgUiToaster>
      </div>
    </div>
    </section>    
  );
}