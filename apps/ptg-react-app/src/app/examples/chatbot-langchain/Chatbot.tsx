import { useState } from 'react';
import { PtgLangChainChatbot } from '@ptg-ui/libs/ptg-ui-react-lib/src/lib/chatbot-langchain/Chatbot';
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
import './Chatbot.css';
import './modal.css';
import { environment } from '../../../environments/environment';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { ChatTogetherAI } from '@langchain/community/chat_models/togetherai';
import { ChatGroq } from '@langchain/groq';

export default function LangchainChatbot() {
  const [showCode, setShowCode] = useState<boolean>(false);
  const [genAIKey, setGenAIKey] = useState<string>(
    environment.LANG_CHAIN_GENAI_KEY
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
  const AI_PROVIDERS = {
    'google-ai': () =>
      new ChatGoogleGenerativeAI({
        model: 'gemini-2.0-flash',
        apiKey: genAIKey,
      }),
    'chat-together-ai': () =>
      new ChatTogetherAI({
        model: 'meta-llama/Llama-3-70b-chat-hf',
        apiKey: environment.LANG_CHAIN_CHAT_TOGETHER_KEY,
      }),
    'chat-groq-ai': () =>
      new ChatGroq({
        model: 'llama-3.1-8b-instant',
        apiKey: environment.LANG_CHAIN_CHAT_GROQ_KEY,
      }),
    'chat-upstage-ai': () => {},
    'chat-bedrock-ai': () => {},
    'chat-anthropic': () => {},
    'chat-aistral-ai': () => {},
    'azure-chatOpen-ai': () => {},
    'chat-vertex-ai': () => {},
    'chat-mistral-ai': () => {},
  };
  const componentCode = `
import { PtgLangChainChatbot } from '@ptg-ui/libs/ptg-ui-react-lib/src/lib/chatbot-langchain/Chatbot';
  `;
  const htmlCode = `
  <IFrame>
          <PtgLangChainChatbot Ai_Providers={AI_PROVIDERS} genAIKey={genAIKey} />
        </IFrame>
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
          <h5 className="font-weight-bold example-heading">AI Chatbot Using LangChain</h5>
        </div>

        <div className="col-4 d-flex ml-10">
          <div className="tooltip-container mb-2 mt-3 mr-3">
            <button
              onClick={() =>
                openInNewTab('ai-langchain-chatbot-yash', {
                  genAIKey: genAIKey,
                  AI_PROVIDERS: AI_PROVIDERS
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
              appearance={BUTTON_VARIANT.DARK}
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
          <PtgLangChainChatbot Ai_Providers={AI_PROVIDERS} genAIKey={genAIKey} />
        </IFrame>
      </div>
    </section>
  );
}
