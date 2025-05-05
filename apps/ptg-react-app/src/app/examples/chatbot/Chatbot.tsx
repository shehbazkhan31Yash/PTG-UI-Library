import { useState } from 'react';
import { PtgChatBot } from '@ptg-ui/libs/ptg-ui-react-lib/src/lib/chatbot/Chat';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import IFrame from '../appbar/IFrame';
import { PtgUiModal } from '@ptg-react-libs/modal/modal';
import {
  BUTTON_VARIANT,
  FONT_SIZE_10,
  MODAL_CANCEL_BUTTON_COLOR,
  POSITIONS,
  WIDTH_110,
} from '@ptg-react-app/constants/Constant';
import { PtgUiButton } from '@ptg-react-libs/button/button';
import './Chat.css';
import './modal.css';

export default function Chatbot() {
  const [showCode, setShowCode] = useState<boolean>(false);
  const [genAIKey, setGenAIKey] = useState<string>(
    'AIzaSyD9Gd9nbIhFQbo2QQENyfZiOXqETv2pbmo'
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenAIKey(event.target.value);
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const confirmClicked = () => setIsOpen(false);
  const modalClosed = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const ModalProps = {
    isOpen: isOpen,
    onConfirmed: confirmClicked,
    modalSize: 'md' as const,
    header: 'Generate GenAI Key',
    cancelButton: 'Close',
    onModalClose: modalClosed,
    cancelButtonColor: MODAL_CANCEL_BUTTON_COLOR,
    backdropClick: true,
    showHeader: true,
    showFooter: true,
  };
  const componentCode = `
  import { PtgChatBot } from "@ptg-react-libs/chatbot/Chat";
  `;
  const htmlCode = `
  <PtgChatBot />
  `;

  const openInNewTab = (target, options) => {
    if (options.state) {
      localStorage.setItem('state', JSON.stringify(options.state));
    }
    window.open(target, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="card-section-two bg-white rounded">
      <div className="row">
        <div className="col-8 mb-2 mt-3">
          <h5 className="font-weight-bold example-heading">AI Chatbot</h5>
        </div>

        <div className="col-4 d-flex ml-10">
          <div className="tooltip-container mb-2 mt-3 mr-3">
            <button
              onClick={() =>
                openInNewTab('aichatbot-yash', {
                  state: genAIKey,
                })
              }
              style={{
                border: 'none',
                background: 'none',
                marginRight: '0px',
                marginLeft: '0px',
              }}
            >
              <span>🔗</span> {/* Unicode character for link */}
            </button>
            <span className="tooltip">Open in new tab</span>
          </div>
          <div
            className="mb-2 mt-2 mr-3 ml-2"
            style={{ marginRight: '15px', marginLeft: '15px' }}
          >
            <PtgUiButton
              text="GenAI Key"
              data-testid="open-button"
              appearance={BUTTON_VARIANT.LIGHT}
              btnIconAlignment={POSITIONS.RIGHT}
              onClick={openModal}
              width={WIDTH_110}
              fontSize={FONT_SIZE_10}
            ></PtgUiButton>
          </div>

          <div className="mb-2 mt-2 mr-3 ml-2" style={{ marginLeft: '15px' }}>
            <CodeIcon
              onClick={() => setShowCode((prev) => !prev)}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
        </div>

        <hr className="horizontal-line" />

        {showCode && (
          <ShowCodeComponent
            componentCode={componentCode}
            htmlCode={htmlCode}
          />
        )}

        <PtgUiModal {...ModalProps}>
          <div>
            <div className="genAIHeader">
              <input
                placeholder="Enter genAI key"
                type="password"
                value={genAIKey}
                onChange={handleChange}
              />
              <a
                href="https://aistudio.google.com/app/apikey"
                className="ptg-ui-aichatbot-link-app"
                target="_blank"
              >
                Get genAI key
              </a>
            </div>
          </div>
        </PtgUiModal>

        <IFrame>
          <PtgChatBot genAIKey={genAIKey} />
        </IFrame>
      </div>
    </section>
  );
}
