import PtgUiTextArea from '@ptg-react-libs/textarea/textarea';
import { useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import { useTranslation } from 'react-i18next';

export default function Textarea() {
  const [showCode, setShowCode] = useState(false);
  const [textValue, setTextValue] = useState(''); // State to manage textarea value
const { t } = useTranslation();
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(event.target.value); // Update state on change
  };
  const componentCode = `
 import PtgUiTextArea from '@ptg-react-libs/textarea/textarea';
 const [textValue, setTextValue] = useState(''); // State to manage textarea value
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(event.target.value); // Update state on change
  };
 `;
  const htmlCode = `
<PtgUiTextArea
          placeholder="Enter text here"
          className="form-control"
          rows={4}
          name="textarea"
          id="textarea"
          value={textValue} // Bind state to value
          onChange={handleTextChange} // Update state on change
          onBlur={() => {}}
        ></PtgUiTextArea>
 `;

  return (
    <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
   <div className="row">
          <div className="col-10 mb-2 mt-2">
            <h5 className="font-weight-bold example-heading">{t('TEXTAREA')}</h5>
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
        <PtgUiTextArea
          placeholder="Enter text here"
          className="form-control"
          rows={4}
          name="textarea"
          id="textarea"
          value={textValue} // Bind state to value
          onChange={handleTextChange} // Update state on change
          onBlur={() => {}}
        ></PtgUiTextArea>
      </div>
    </div>
    </section>
  );
}
