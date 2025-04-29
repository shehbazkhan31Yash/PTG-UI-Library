import { useState } from 'react';
import { PtgChatBot } from '@ptg-ui/libs/ptg-ui-react-lib/src/lib/chatbot/Chat';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import './Chat.css';

export default function Chatbot() {
  const [showCode, setShowCode] = useState<boolean>(false);
  const [genAIKey, setGenAIKey] = useState<string>(
    'AIzaSyD9Gd9nbIhFQbo2QQENyfZiOXqETv2pbmo'
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenAIKey(event.target.value);
  };
  const componentCode = `
  import { PtgChatBot } from "@ptg-react-libs/chatbot/Chat";
  `;
  const htmlCode = `
  <PtgChatBot />
  `;

  return (
    <section className="card-section-two bg-white rounded">
      <div className="row">
        <div className="col-10 mb-2 mt-3">
          <h5 className="font-weight-bold example-heading">Chatbot</h5>
        </div>
        <div className="col-2 mb-2 mt-2">
          <CodeIcon
            onClick={() => setShowCode((prev) => !prev)}
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
        <div className="col-md-5 col-sm-5 card-component m-3">
          <div className="genAIHeader">
            <input
              placeholder="Enter genAI key"
              type="password"
              value={genAIKey}
              onChange={handleChange}
            />
            <a
              href="https://aistudio.google.com/app/apikey"
              className="ml-4"
              target="_blank"
            >
              Get genAI key
            </a>
          </div>
          <PtgChatBot genAIKey={genAIKey} />
        </div>
      </div>
    </section>
  );
}
