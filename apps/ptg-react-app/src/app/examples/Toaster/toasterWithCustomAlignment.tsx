import React, { useState } from 'react';
import PtgUiToaster from '@ptg-ui/libs/ptg-ui-react-lib/src/lib/toaster/toaster';
import { PtgButton } from '@ptg-ui/libs/ptg-ui-web-components-react/src';
import { useTranslation } from 'react-i18next';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import './toaster.css';

export default function ToasterWithCustomAlignment() {
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');
  const [alignItem, setAlignItem] = useState('center');
  const [justifyContent, setJustifyContent] = useState('center');
  const { t } = useTranslation();
  const [showCode, setShowCode] = useState(false);
  const displayToast = (msg: string, messageType: string, align: string, justify: string) => {
    setMessage(msg);
    setType(messageType);
    setAlignItem(align);
    setJustifyContent(justify);
    setShowToast(true);
  };

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
  const [alignItem, setAlignItem] = useState('center');
  const [justifyContent, setJustifyContent] = useState('center');
  const displayToast = (msg: string, messageType: string, align: string, justify: string) => {
    setMessage(msg);
    setType(messageType);
    setAlignItem(align);
    setJustifyContent(justify);
    setShowToast(true);
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
          <h5 className="font-weight-bold example-heading">{t('TOASTER-WITH-CUSTOM-ALIGNMENT')}</h5>
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
            text="Top-Left Toast"
            appearance="primary"
            onClick={() => displayToast('Success message', 'success', 'flex-start', 'flex-start')}
            className="mb-4 mt-2"
            style={{ width: 'fit-content' }}
          ></PtgButton>
          <PtgButton
            text="Top-Center Toast"
            appearance="primary"
            onClick={() => displayToast('Success message', 'success', 'flex-start', 'center')}
            className="mb-4 mt-2"
            style={{ width: 'fit-content' }}
          ></PtgButton>
          <PtgButton
            text="Bottom-Right Toast"
            appearance="primary"
            onClick={() => displayToast('Success message', 'success', 'flex-end', 'flex-end')}
            className="mb-4 mt-2"
            style={{ width: 'fit-content' }}
          ></PtgButton>
          <PtgButton
            text="Center Toast"
            appearance="primary"
            onClick={() => displayToast('Success message', 'success', 'center', 'center')}
            className="mb-4 mt-2"
            style={{ width: 'fit-content' }}
          ></PtgButton>
          <PtgUiToaster
            show={showToast}
            setShow={setShowToast}
            message={message}
            type={type}
            alignItem={alignItem}
            justifyContent={justifyContent}
            timeToShow={3000}
            icon={<CheckCircleIcon className={`toast-icon ${type}`}/>}
          ></PtgUiToaster>
        </div>
      </div>
    </section>
  );
}