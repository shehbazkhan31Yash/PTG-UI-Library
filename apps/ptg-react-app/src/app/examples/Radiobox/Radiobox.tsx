/**
 * @since Nov 2025
 * @author Anil Chougala
 * @desc Example using radio box as reusable component.
 */

import { useState, useEffect } from 'react';
import './Radiobox.scss';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { useTranslation } from 'react-i18next';
import { PtgUiRadio } from '@ptg-ui/react';

export default function Radiobox() {
  const { t } = useTranslation();
  const [showBasicCode, setShowBasicCode] = useState(false);
  const [showGroupCode, setShowGroupCode] = useState(false);
  
  // Types for radio options
  type RadioOption = {
    id: string;
    name: string;
    value: string;
  };

  const [singleOption, setSingleOption] = useState<string>('');
  const [groupOption, setGroupOption] = useState<string>('');
  const [singleRadioList, setSingleRadioList] = useState<RadioOption[]>([]);
  const [groupRadioList, setGroupRadioList] = useState<RadioOption[]>([]);

  useEffect(() => {
    setSingleRadioList([
      { id: 'yes', name: 'Yes', value: 'yes' },
      { id: 'no', name: 'No', value: 'no' },
    ]);
    setSingleOption('yes');

    setGroupRadioList([
      { id: 'male', name: 'Male', value: 'male' },
      { id: 'female', name: 'Female', value: 'female' },
      { id: 'other', name: 'Other', value: 'other' },
    ]);
    setGroupOption('male');
  }, []);

  const toggleBasicCode = () => {
    setShowBasicCode(!showBasicCode);
  };

  const toggleGroupCode = () => {
    setShowGroupCode(!showGroupCode);
  };

  const handleSingleSelect = (e) => {
    setSingleOption(e.target.value);
  };

  const handleGroupSelect = (e) => {
    setGroupOption(e.target.value);
  };

  const basicComponentCode = `
    import { PtgUiRadio } from '@ptg-ui/react';
    import "@ptg-ui/react/lib/styles/index.css";

    type RadioOption = {
      id: string;
      name: string;
      value: string;
    };

    const [singleOption, setSingleOption] = useState<string>('');
    const [singleRadioList, setSingleRadioList] = useState<RadioOption[]>([]);
    
    useEffect(() => {
      setSingleRadioList([
        { id: 'yes', name: 'Yes', value: 'yes' },
        { id: 'no', name: 'No', value: 'no' },
      ]);
      setSingleOption('yes'); // Set default value after options are loaded
    }, []);

    const handleSingleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSingleOption(e.target.value);
    };
  `;

  const basicHtmlCode = `
    <PtgUiRadio
      name="agreement"
      id="agreement"
      list={singleRadioList}
      value={singleOption}
      onChange={handleSingleSelect}
    />
  `;

  const groupComponentCode = `
    import { PtgUiRadio } from '@ptg-ui/react';
    import "@ptg-ui/react/lib/styles/index.css";

    type RadioOption = {
      id: string;
      name: string;
      value: string;
    };

    const [groupOption, setGroupOption] = useState<string>('');
    const [groupRadioList, setGroupRadioList] = useState<RadioOption[]>([]);
    
    useEffect(() => {
      setGroupRadioList([
        { id: 'male', name: 'Male', value: 'male' },
        { id: 'female', name: 'Female', value: 'female' },
        { id: 'other', name: 'Other', value: 'other' },
      ]);
      setGroupOption('male'); // Set default value after options are loaded
    }, []);

    const handleGroupSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      setGroupOption(e.target.value);
    };
  `;

  const groupHtmlCode = `
    <PtgUiRadio
      name="gender"
      id="gender"
      list={groupRadioList}
      value={groupOption}
      onChange={handleGroupSelect}
    />
  `;

  return (
    <>
      {/* Single Radio Button Example */}
      <section className="card-section-two bg-white rounded pt-2 mt-2 mb-2 pb-4">
        <div className="row">
          <div className="col-10 mb-2 mt-2">
            <h5 className="example-heading">{t('SINGLE_RADIO_BUTTON')}</h5>
          </div>
          <div className="col-2">
            <CodeIcon
              onClick={toggleBasicCode}
              fontSize="large"
              className="show-code-icon"
            />
          </div>
          <hr className="horizontal-line" />
        </div>
        {showBasicCode && (
          <ShowCodeComponent
            componentCode={basicComponentCode}
            htmlCode={basicHtmlCode}
          />
        )}
        <div className="col-lg-4 mb-3 col-sm-6 col-xs-12 m-3 single-radio-section">
          <PtgUiRadio
            name="agreement"
            id="agreement"
            list={singleRadioList}
            value={singleOption}
            onChange={handleSingleSelect}
          />
          {singleOption && (
            <p className="mt-2">{t('SELECTED')}: {singleOption}</p>
          )}
        </div>
      </section>

      {/* Radio Group Example */}
      <section className="card-section-two bg-white rounded pt-2 mt-2 mb-2 pb-4">
        <div className="row">
          <div className="col-10 mb-2 mt-2">
            <h5 className="example-heading">{t('RADIO_GROUP')}</h5>
          </div>
          <div className="col-2">
            <CodeIcon
              onClick={toggleGroupCode}
              fontSize="large"
              className="show-code-icon"
            />
          </div>
          <hr className="horizontal-line" />
        </div>
        {showGroupCode && (
          <ShowCodeComponent
            componentCode={groupComponentCode}
            htmlCode={groupHtmlCode}
          />
        )}
        <div className="col-lg-4 mb-3 col-sm-6 col-xs-12 m-3">
          <PtgUiRadio
            name="gender"
            id="gender"
            list={groupRadioList}
            value={groupOption}
            onChange={handleGroupSelect}
          />
          {groupOption && (
            <p className="mt-2">{t('SELECTED')}: {groupOption}</p>
          )}
        </div>
      </section>
    </>
  );
}