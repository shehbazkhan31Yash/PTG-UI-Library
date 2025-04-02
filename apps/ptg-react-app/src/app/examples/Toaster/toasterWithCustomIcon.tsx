import React, { useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import PtgUiToaster from '@ptg-ui/libs/ptg-ui-react-lib/src/lib/toaster/toaster';
import { PtgButton } from '@ptg-ui/libs/ptg-ui-web-components-react/src';
import { useTranslation } from 'react-i18next';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import './toaster.css';
export default function ToasterWithCustomIcon() {
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
  const getIconByType = (type: string) => {
    switch (type.toLowerCase()) {
      case 'success':
        return <CheckCircleIcon className={`toast-icon ${type}`} />;
      case 'error':
        return <ErrorIcon className={`toast-icon ${type}`} />;
      case 'info':
        return <InfoIcon className={`toast-icon ${type}`} />;
      case 'warning':
        return <WarningIcon className={`toast-icon ${type}`} />;
      default:
        return null; // No icon for unknown types
    }
  }

  const componentCode = `
  import React, { useState } from 'react';
  import PtgUiToaster from '@ptg-ui/libs/ptg-ui-react-lib/src/lib/toaster/toaster';
  import { PtgButton } from '@ptg-ui/libs/ptg-ui-web-components-react/src';
  import CheckCircleIcon from '@mui/icons-material/CheckCircle';
  import ErrorIcon from '@mui/icons-material/Error';
  import InfoIcon from '@mui/icons-material/Info';
  import WarningIcon from '@mui/icons-material/Warning';

  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');

  // Function to display the toast
  const displayToast = (msg: string, messageType: string) => {
    setMessage(msg);
    setType(messageType);
    setShowToast(true); // Ensure the toast is shown
  };

  // Function to get the icon based on the type
  const getIconByType = (type: string) => {
    switch (type.toLowerCase()) {
      case 'success':
        return <CheckCircleIcon className="toast-icon success" />;
      case 'error':
        return <ErrorIcon className="toast-icon error" />;
      case 'info':
        return <InfoIcon className="toast-icon info" />;
      case 'warning':
        return <WarningIcon className="toast-icon warning" />;
      default:
        return null; // No icon for unknown types
    }
  };

`;
  const htmlCode = `
          <PtgButton
            text="Show Error Toast"
            data-testid="openButton"
            appearance="primary"
            onClick={() => displayToast('Error message', 'error')}
            className="mb-4 mt-2"
            style={{ width: 'fit-content' }}
          ></PtgButton>
          <PtgButton
            text="Show Success Toast"
            data-testid="openButton"
            appearance="primary"
            onClick={() => displayToast('Success message', 'success')}
            className="mb-4 mt-2"
            style={{ width: 'fit-content' }}
          ></PtgButton>
          <PtgButton
            text="Show Warning Toast"
            data-testid="openButton"
            appearance="primary"
            onClick={() => displayToast('Warning message', 'warning')}
            className="mb-4 mt-2"
            style={{ width: 'fit-content' }}
          ></PtgButton>
          <PtgButton
            text="Show Info Toast"
            data-testid="openButton"
            appearance="primary"
            onClick={() => displayToast('Info message', 'info')}
            className="mb-4 mt-2"
            style={{ width: 'fit-content' }}
          ></PtgButton>
          <PtgUiToaster
            show={showToast}
            setShow={setShowToast}
            message={message}
            type={type}
            alignItem="center"
            justifyContent="center"
            timeToShow={3000}
            icon={getIconByType(type)}
          ></PtgUiToaster>
       `;

  return (
    <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
      <div className="row">
        <div className="col-10 mb-2 mt-2">
          <h5 className="font-weight-bold example-heading">{t('Custom Icon Toaster')}</h5>
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
            text="Show Error Toast"
            data-testid="openButton"
            appearance="primary"
            onClick={() => displayToast('Error message', 'error')}
            className="mb-4 mt-2"
            style={{ width: 'fit-content' }}
          ></PtgButton>
          <PtgButton
            text="Show Success Toast"
            data-testid="openButton"
            appearance="primary"
            onClick={() => displayToast('Success message', 'success')}
            className="mb-4 mt-2"
            style={{ width: 'fit-content' }}
          ></PtgButton>
          <PtgButton
            text="Show Warning Toast"
            data-testid="openButton"
            appearance="primary"
            onClick={() => displayToast('Warning message', 'warning')}
            className="mb-4 mt-2"
            style={{ width: 'fit-content' }}
          ></PtgButton>
          <PtgButton
            text="Show Info Toast"
            data-testid="openButton"
            appearance="primary"
            onClick={() => displayToast('Info message', 'info')}
            className="mb-4 mt-2"
            style={{ width: 'fit-content' }}
          ></PtgButton>
          <PtgUiToaster
            show={showToast}
            setShow={setShowToast}
            message={message}
            type={type}
            alignItem="center"
            justifyContent="center"
            timeToShow={3000}
            icon={getIconByType(type)}
          ></PtgUiToaster>
        </div>
      </div>
    </section>
  );
}
