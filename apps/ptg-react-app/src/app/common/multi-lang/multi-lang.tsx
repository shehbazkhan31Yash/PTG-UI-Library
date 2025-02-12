
import { PtgUiSelect, PtguseFetch } from '@ptg-ui/react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './multi-lang.scss';

export function MultiLang() {

  const [languages, setLanguages] = useState([])
  const [selectedLang, setSelectedLang] = useState('en');

  const {data:apiData} = PtguseFetch('lang-lists') as any

  const { i18n } = useTranslation();

  const changeLanguage = (event:any) => {
    setSelectedLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  }

  useEffect(() => {
    setLanguages(apiData[0]?.attributes?.language)
  },[apiData])
 
  return (
    <div className="form-group me-2">
      <label htmlFor="multiLang" tabIndex={0} aria-label="multi" hidden>Select Lang</label>
      <PtgUiSelect
        name="multiLang"
        list={languages}
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
