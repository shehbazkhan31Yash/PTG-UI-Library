/**
 * @since April 2022
 * @author Ankit patidar
 * @desc Filter Example using filter reusable component
 */

import './pipes.module.scss';
import { useState } from 'react';
import {
  inrFormat,
  capitalizeFirstLetter,
  PtgUiInput,
  convertIntoPhoneNumber,
} from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
/* eslint-disable-next-line */
interface PipeEventProps {
  showEventCode : boolean
}

export function PipeEvent(props: PipeEventProps) {
  const { t } = useTranslation();
  const [value, setValue] = useState({
    cname: '',
    inr: '',
    dollar: '',
    truncateStr: '',
    phoneNumber: '',
  });

  const [oldValue, setOldValues] = useState({
    cname: '',
    inr: '',
    dollar: '',
    truncateStr: '',
    phoneNumber: '',
  });
  const handleChange: any = (e: any) => {
    const { name, value } = e.target;
    setValue((values) => {
      return { ...values, [name]: value };
    });
  };

  const cFLkeyUpHandler = (e: any) => {
    const { name } = e.target;
    setOldValues((values) => {
      return { ...oldValue, [name]: oldValue.cname };
    });
    setValue((values) => {
      return { ...values, [name]: capitalizeFirstLetter(value.cname) };
    });
  };

  const phoneOnBlur = (e: any) => {
    const { name } = e.target;

    setValue((values) => {
      return { ...values, [name]: convertIntoPhoneNumber(value.phoneNumber) };
    });
  };

  const currentyOnBlur = (e: any) => {
    const { name } = e.target;

    let currencyValue = value.inr;
    currencyValue = currencyValue.replace(/[,]/g, '');
    if (currencyValue.slice(0, 1) === '₹') {
      currencyValue = currencyValue.substring(1);
    }

    if (isNaN(parseInt(currencyValue))) {
      console.log(currencyValue, parseInt(currencyValue));
      setValue((values) => {
        return { ...values, [name]: '' };
      });
    } else {
      console.log(currencyValue, parseInt(currencyValue));
      setValue((values) => {
        return { ...values, [name]: inrFormat(parseInt(currencyValue)) };
      });
    }
  };

  const componentCode = `
  
import { useState } from 'react';
import {
  inrFormat,
  capitalizeFirstLetter,
  PtgUiInput,
  convertIntoPhoneNumber,
} from '@ptg-ui/react';


interface PipeEventProps {}

export function PipeEvent(props: PipeEventProps) {

  const [value, setValue] = useState({
    cname: '',
    inr: '',
    dollar: '',
    truncateStr: '',
    phoneNumber: '',
  });

  const [oldValue, setOldValues] = useState({
    cname: '',
    inr: '',
    dollar: '',
    truncateStr: '',
    phoneNumber: '',
  });
  const handleChange: any = (e: any) => {
    const { name, value } = e.target;
    setValue((values) => {
      return { ...values, [name]: value };
    });
  };

  const cFLkeyUpHandler = (e: any) => {
    const { name } = e.target;
    setOldValues((values) => {
      return { ...oldValue, [name]: oldValue.cname };
    });
    setValue((values) => {
      return { ...values, [name]: capitalizeFirstLetter(value.cname) };
    });
  };

  const phoneOnBlur = (e: any) => {
    const { name } = e.target;

    setValue((values) => {
      return { ...values, [name]: convertIntoPhoneNumber(value.phoneNumber) };
    });
  };

  const currentyOnBlur = (e: any) => {
    const { name } = e.target;

    let currencyValue = value.inr;
    currencyValue = currencyValue.replace(/[,]/g, '');
    if (currencyValue.slice(0, 1) === '₹') {
      currencyValue = currencyValue.substring(1);
    }

    if (isNaN(parseInt(currencyValue))) {
      console.log(currencyValue, parseInt(currencyValue));
      setValue((values) => {
        return { ...values, [name]: '' };
      });
    } else {
      console.log(currencyValue, parseInt(currencyValue));
      setValue((values) => {
        return { ...values, [name]: inrFormat(parseInt(currencyValue)) };
      });
    }
  };
export default PipeEvent; `

const htmlCode = `
    <PtgUiInput
      type="text"
      name="cname"
      id="firstLetterCapitalTextEvent"
      value={value.cname}
      className={'form-control bg_0'}
      onBlur={cFLkeyUpHandler}
      onChange={handleChange}
    />

    <PtgUiInput
      type="text"
      name="inr"
      id="inrFormatTextEvent"
      className={'form-control bg_0'}
      value={value.inr}
      onChange={handleChange}
      onBlur={currentyOnBlur}
    />

    <PtgUiInput
      type="text"
      name="phoneNumber"
      id="phoneNumberPipesEvent"
      className={'form-control bg_0'}
      value={value.phoneNumber}
      onChange={handleChange}
      maxlength="14"
      onBlur={phoneOnBlur}
    />`

  return (
    <>
    {!props.showEventCode ? (
        <>
          <div className="row">
            <div className="col-lg-4 mb-3 col-sm-6 col-xs-12 w-75">
              <label
                htmlFor="firstLetterCapitalTextEvent"
                aria-labelledby="firstLetterCapitalTextEvent"
                tabIndex={0}
              >
                {t('FIRST_LETTER_CAPITAL_TEXT')}
              </label>
              <PtgUiInput
                type="text"
                name="cname"
                id="firstLetterCapitalTextEvent"
                value={value.cname}
                className={'form-control bg_0'}
                onBlur={cFLkeyUpHandler}
                onChange={handleChange}
              />
            </div>
          </div>
  
          <div className="row">
            <div className="col-lg-4 mb-3 col-sm-6 col-xs-12 w-75">
              <label
                htmlFor="inrFormatTextEvent"
                aria-labelledby="inrFormatTextEvent"
                tabIndex={0}
              >
                {t('INR_FORMAT_TEXT')}
              </label>
              <PtgUiInput
                type="text"
                name="inr"
                id="inrFormatTextEvent"
                className={'form-control bg_0'}
                value={value.inr}
                onChange={handleChange}
                onBlur={currentyOnBlur}
              />
            </div>
          </div>
  
          <div className="row">
            <div className="col-lg-4 mb-3 col-sm-6 col-xs-12 w-75">
              <label
                htmlFor="phoneNumberPipesEvent"
                aria-labelledby="phoneNumberPipesEvent"
                tabIndex={0}
              >
                Phone Number Pipes
              </label>
              <PtgUiInput
                type="text"
                name="phoneNumber"
                id="phoneNumberPipesEvent"
                className={'form-control bg_0'}
                value={value.phoneNumber}
                onChange={handleChange}
                maxlength="14"
                onBlur={phoneOnBlur}
              />
            </div>
          </div>
        </>
    ):(
      <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
    )}
    </>
  );
}

export default PipeEvent;
