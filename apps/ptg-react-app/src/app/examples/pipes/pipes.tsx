import { useState } from 'react';
import { PtgUiPipe } from '@ptg-ui/react';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { useTranslation } from 'react-i18next';
import CodeIcon from '@mui/icons-material/Code';

export function Pipes() {
  const { t } = useTranslation();
  const [showCode, setShowCode] = useState<boolean>(false);
  const [capitalizedStringValue, setCapitalizedStringValue] = useState<string>('');
  const [truncateValue, setTruncateValue] = useState<string>('');
  const [currencyValue, setCurrencyValue] = useState<string>('');
  const [phoneNumberValue, setPhoneNumberValue] = useState<string>('');
  const [capitalizedTruncatedValue, setcapitalizedTruncatedValue] =useState<string>('');

  const handleCapitalizedFirstLetterInputChange = (capitalizedStringValue:string) => {
    setCapitalizedStringValue(capitalizedStringValue);
  };

  const handleTruncateStringInputChange = (truncateValue:string) => {
    setTruncateValue(truncateValue);
  };

  const handleCapitalizedAndTruncateInputChange = (
    capitalizedTruncatedValue:string
  ) => {
    setcapitalizedTruncatedValue(capitalizedTruncatedValue);
  };

  const handleFormatINRInputChange = (currencyValue:string) => {
    setCurrencyValue(currencyValue);
  };

  const handlePhoneNumberInputChange = (phoneNumberValue:string) => {
    setPhoneNumberValue(phoneNumberValue);
  };

  const handleShowCode = () => {
    setShowCode(!showCode);
  };

  const componentCode = `
  export function Pipes() {

  const [capitalizedStringValue, setCapitalizedStringValue] = useState('');
  const [truncateValue, setTruncateValue] = useState('');
  const [currencyValue, setCurrencyValue] = useState('');
  const [phoneNumberValue, setPhoneNumberValue] = useState('');
  const [capitalizedTruncatedValue, setcapitalizedTruncatedValue] = useState('');

  const handleCapitalizedFirstLetterInputChange = (capitalizedStringValue) => {
    setCapitalizedStringValue(capitalizedStringValue);
  };

  const handleTruncateStringInputChange = (truncateValue) => {
    setTruncateValue(truncateValue);
  };

  const handleCapitalizedAndTruncateInputChange = (
    capitalizedTruncatedValue
  ) => {
    setcapitalizedTruncatedValue(capitalizedTruncatedValue);
  };

  const handleFormatINRInputChange = (currencyValue) => {
    setCurrencyValue(currencyValue);
  };

  const handlePhoneNumberInputChange = (phoneNumberValue) => {
    setPhoneNumberValue(phoneNumberValue);
  };
}
export default Pipes;
  `;
  const htmlCode = `
  import { PtgUiPipe } from '@ptg-ui/react';
        
  <div> Capitalize First Letter </div>
  <PtgUiPipe
    isCapitalizedFirstLetter={true}
    onChange={handleCapitalizedFirstLetterInputChange}
  />
  <div>Output: {capitalizedStringValue} </div>

  <div> Truncate </div>
  <PtgUiPipe
    isTruncate={true}
    onChange={handleTruncateStringInputChange}
  />
  <div> Output:{truncateValue}</div>

  <div> Capitalize and Truncate </div>
  <PtgUiPipe
    isCapitalizedFirstLetter={true}
    isTruncate={true}
    onChange={handleCapitalizedAndTruncateInputChange}
  />
  <div> Output:{capitalizedTruncatedValue}</div>

  <div> Format INR </div>
  <PtgUiPipe isFormatINR={true} onChange={handleFormatINRInputChange} />
  <div>Output: {currencyValue}</div>

  <div> Phone Number </div>
  <PtgUiPipe
    isFormatPhoneNumber={true}
    onChange={handlePhoneNumberInputChange}
  />
  <div>Output: {phoneNumberValue}</div>      
  `;
  return (
    <section className="card-section-two bg-white rounded pt-2 pb-8 mt-2">
      <div className="row">
        <div className="col-10 mb-2 mt-2">
          <h5 className="font-weight-bold example-heading">{t('PIPE')}</h5>
        </div>
        <div className="col-2 mb-2 mt-1">
          <CodeIcon
            onClick={handleShowCode}
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
        <div className="wrapper col-md-11 col-sm-7 ms-3">
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-xs-12 w-50">
              <div>
                <label
                  htmlFor="firstLetterCapital"
                  aria-labelledby="firstLetterCapital"
                >
                  {t('FIRST_LETTER_CAPITAL_TEXT')}
                </label>
                <PtgUiPipe
                  isCapitalizedFirstLetter={true}
                  onChange={handleCapitalizedFirstLetterInputChange}
                />
              </div>
              <div className="mb-4 mt-1">
                {t('OUTPUT_TEXT')}
                {capitalizedStringValue}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4  col-sm-6 col-xs-12 w-50">
              <label
                htmlFor="truncatePipeText"
                aria-labelledby="truncatePipeText"
              >
                {t('TRUNCATE_PIPE_TEXT')}
              </label>
              <PtgUiPipe
                isTruncate={true}
                onChange={handleTruncateStringInputChange}
              />
              <div className="mb-4 mt-1">
                {t('OUTPUT_TEXT')}
                {truncateValue}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6 col-xs-12 w-50">
              <label
                htmlFor="truncatePipeText"
                aria-labelledby="truncatePipeText"
              >
                {t('FIRST_LETTER_CAPITAL_TEXT')} and
                {t('TRUNCATE_PIPE_TEXT')}
              </label>
              <PtgUiPipe
                isCapitalizedFirstLetter={true}
                isTruncate={true}
                onChange={handleCapitalizedAndTruncateInputChange}
              />
              <div className="mb-4 mt-1">
                {t('OUTPUT_TEXT')}
                {capitalizedTruncatedValue}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6 col-xs-12 w-50">
              <label htmlFor="inrFormatText" aria-labelledby="inrFormatText">
                {t('INR_FORMAT_TEXT')}
              </label>
              <PtgUiPipe
                isFormatINR={true}
                onChange={handleFormatINRInputChange}
              />
            </div>
            <div className="mb-4 mt-1">
              {t('OUTPUT_TEXT')}
              {currencyValue}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6 col-xs-12 w-50">
              <label
                htmlFor="phoneNumberPipes"
                aria-labelledby="phoneNumberPipes"
              >
                {t('PHONE_NUMBER_PIPES_TEXT')}
              </label>
              <PtgUiPipe
                isFormatPhoneNumber={true}
                onChange={handlePhoneNumberInputChange}
              />
              <div className="mb-4 mt-1">
                {t('OUTPUT_TEXT')} {phoneNumberValue}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Pipes;
