/**
 * @since Jan 2025
 * @author Manish Patidar
 * @desc Example using multi select checkbox as reusable component.
 */

import { useState, useEffect } from 'react';
import './select.scss';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { PtgUiSelectbox } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
/* eslint-disable-next-line */

export function MultiSelectCheckbox(props) {
  const [cityList, setCityList] = useState<any>([]);

  useEffect(() => {
    setCityList([
      { value: 'pune', label: 'Pune', name: 'city' },
      { value: 'indore', label: 'Indore', name: 'city' },
      { value: 'gujarat', label: 'Gujarat', name: 'city' },
      { value: 'Karnataka', label: 'Karnataka', name: 'city' },
      { value: 'goa', label: 'Goa', name: 'city' },
    ]);
  }, []);
  /*-----onSelect method -----*/

  const { t } = useTranslation();
  const [showCode, setShowCode] = useState(false);
  const [showSelectCode, setShowSelectCode] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [multiSelectOptions, setMultiSelectOptions] = useState<any>([]);

  const ShowExampleCode = () => {
    if (!showCode) {
      setShowCode(true);
    } else {
      setShowCode(false);
    }
  };

  const ShowSelectExampleCode = () => {
    if (!showSelectCode) {
      setShowSelectCode(true);
    } else {
      setShowSelectCode(false);
    }
  };

  const componentCode = `
    import { PtgUiSelectbox } from '@ptg-ui/react';
    import "@ptg-ui/react/lib/styles/index.css";

    
    const [selectedOption, setSelectedOption] = useState('');

    const cityList = [
      { value: 'pune', label: 'Pune', name:'city' },
      { value: 'indore', label: 'Indore',name:'city' },
      { value: 'gujarat', label: 'Gujarat',name:'city' },
      { value: 'Karnataka', label: 'Karnataka',name:'city' },
      { value: 'goa', label: 'Goa',name:'city' },
    ];

    const handleSelect = (e) => {
      setSelectedOption(e.target.value);
    };
  `;

  const htmlCode = `
    <PtgUiSelectbox
      name="city"
      list={cityList}
      onSelect={handleSelect}
      singleSelect={true}
      selectedOption={selectedOption}
      width={'100%'}
      placeholder={"Select"}
    />
  `;

  const multiSelectComponentCode = `
    import { PtgUiSelectbox } from '@ptg-ui/react';
    import "@ptg-ui/react/lib/styles/index.css";

    
    const [multiSelectOptions, setMultiSelectOptions] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const cityList = [
      { value: 'pune', label: 'Pune', name:'city' },
      { value: 'indore', label: 'Indore',name:'city' },
      { value: 'gujarat', label: 'Gujarat',name:'city' },
      { value: 'Karnataka', label: 'Karnataka',name:'city' },
      { value: 'goa', label: 'Goa',name:'city' },
    ];

    const handleSelectChange = (event) => {
      const value = event.target.value;
      if (multiSelectOptions && multiSelectOptions?.includes(value)) {
        setMultiSelectOptions(
          multiSelectOptions.filter((option) => option !== value)
        );
      } else {
        setMultiSelectOptions([...multiSelectOptions, value]);
      }
    };

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };

    const removeItem = (value) => {
      setMultiSelectOptions(
        multiSelectOptions.filter((option) => option !== value)
      );
    };
  `;

  const multiSelectHtmlCode = `
    <PtgUiSelectbox
      name="city"
      list={cityList}
      onSelect={(e) => handleSelectChange(e)}
      singleSelect={false}
      multiSelectOptions={multiSelectOptions}
      width={'100%'}
      placeholder={"Select"}
      toggleDropdown={toggleDropdown}
      dropdownOpen={dropdownOpen}
      removeItem={removeItem}
    />
  `;

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    if (multiSelectOptions && multiSelectOptions?.includes(value)) {
      setMultiSelectOptions(
        multiSelectOptions.filter((option) => option !== value)
      );
    } else {
      setMultiSelectOptions([...multiSelectOptions, value]);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const removeItem = (value) => {
    setMultiSelectOptions(
      multiSelectOptions.filter((option) => option !== value)
    );
  };

  return (
    <>
      <section className="card-section-two bg-white rounded pt-2 mt-2 mb-2 pb-4">
        <div className="row">
          <div className="col-10 mb-2 mt-2">
            <h5 className="example-heading">{t('SINGLE_SELECT_TEXT')}</h5>
          </div>
          <div className="col-2">
            <CodeIcon
              onClick={ShowExampleCode}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>

            {/*-----Usable component PtgUiSelectbox single select-----*/}
          </div>
          <hr className="horizontal-line" />
        </div>
        {showCode && (
          <ShowCodeComponent
            componentCode={componentCode}
            htmlCode={htmlCode}
          />
        )}
        <div className="col-lg-4 mb-3 col-sm-6 col-xs-12 m-3">
          <PtgUiSelectbox
            name="city"
            list={cityList}
            onSelect={handleSelect}
            singleSelect={true}
            selectedOption={selectedOption}
            width={'100%'}
            placeholder={t('SELECT_PLACEHOLDER')}
          />
        </div>
      </section>

      <section className="card-section-two bg-white rounded pt-2 mt-4 mb-2 pb-4">
        <div className="row">
          <div className="col-10 mb-2 mt-2">
            <h5 className="example-heading">{t('MULTI_SELECT_TEXT')}</h5>
          </div>
          <div className="col-2">
            <CodeIcon
              onClick={ShowSelectExampleCode}
              fontSize="large"
              className="show-code-icon"
            ></CodeIcon>
          </div>
          <hr className="horizontal-line" />
        </div>
        {showSelectCode && (
          <ShowCodeComponent
            componentCode={multiSelectComponentCode}
            htmlCode={multiSelectHtmlCode}
          />
        )}
        <div className="col-lg-4 mb-3 col-sm-6 col-xs-12 m-3 multi-select">
          {/*-----Usable component PtgUiSelectbox multi select-----*/}
          <PtgUiSelectbox
            name="city"
            list={cityList}
            onSelect={(e) => handleSelectChange(e)}
            singleSelect={false}
            multiSelectOptions={multiSelectOptions}
            width={'100%'}
            placeholder={t('SELECT_PLACEHOLDER')}
            toggleDropdown={toggleDropdown}
            dropdownOpen={dropdownOpen}
            removeItem={removeItem}
          />
        </div>
      </section>
    </>
  );
}

export default MultiSelectCheckbox;
