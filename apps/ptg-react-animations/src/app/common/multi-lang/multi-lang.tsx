import { PtgUiSelect } from 'libs/ptg-ui-react-lib/src/index';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Lang_LIST } from '../../mock/mocks';
import './multi-lang.scss';

export interface MultiLangProps {}
export function MultiLang({}: MultiLangProps) {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState('en');

  const changeLanguage = (event: any) => {
    setSelectedLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="form-group me-2">
      <label htmlFor="multiLang" tabIndex={0} aria-label="multi" hidden>
        Select Lang
      </label>
      <PtgUiSelect
        name="multiLang"
        list={Lang_LIST}
        id="multiLang"
        data-testid="lang"
        // className={`sel-placeholder w-100`}
        className="sel-placeholder w-100"
        onChange={changeLanguage}
        value={selectedLang}
        aria-label="multiLang"
      />
    </div>
  );
}

export default MultiLang;
