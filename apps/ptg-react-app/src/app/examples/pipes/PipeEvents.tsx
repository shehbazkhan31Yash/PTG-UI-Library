/**
 * @since April 2022
 * @author Ankit patidar
 * @desc Filter Example using filter reusable component
 */

import { useState, FocusEvent, ChangeEvent } from 'react';
import {
  inrFormat,
  capitalizeFirstLetter,
  PtgUiInput,
  convertIntoPhoneNumber,
} from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { PipeEventProps } from './pipes.interface';
/* eslint-disable-next-line */

export function PipeEvent(props: Readonly<PipeEventProps>) {
  const { t } = useTranslation();
  const [value, setValue] = useState({
    cname: '',
    inr: '',
    dollar: '',
    truncateStr: '',
    phoneNumber: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((values) => {
      return { ...values, [name]: value };
    });
  };

  const cFLkeyUpHandler = (e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setValue((values) => {
      return { ...values, [name]: capitalizeFirstLetter(value.cname) };
    });
  };

  const phoneOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;

    setValue((values) => {
      return { ...values, [name]: convertIntoPhoneNumber(value.phoneNumber) };
    });
  };

  const currencyOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;

    let currencyValue = value.inr;
    currencyValue = currencyValue.replace(/,/g, '');
    if (currencyValue.startsWith('₹')) {
      currencyValue = currencyValue.substring(1);
    }

    if (isNaN(parseInt(currencyValue))) {
      setValue((values) => {
        return { ...values, [name]: '' };
      });
    } else {
      setValue((values) => {
        return { ...values, [name]: inrFormat(parseInt(currencyValue)) };
      });
    }
  };

  const componentCode = `

  const [value, setValue] = useState({
    cname: '',
    inr: '',
    dollar: '',
    truncateStr: '',
    phoneNumber: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((values) => {
      return { ...values, [name]: value };
    });
  };

  const cFLkeyUpHandler = (e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setValue((values) => {
      return { ...values, [name]: capitalizeFirstLetter(value.cname) };
    });
  };

  const phoneOnBlur = (e:  FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;

    setValue((values) => {
      return { ...values, [name]: convertIntoPhoneNumber(value.phoneNumber) };
    });
  };

  const currencyOnBlur = (e:  FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;

    let currencyValue = value.inr;
    currencyValue = currencyValue.replace(/,/g, '');
    if (currencyValue.startsWith('₹')) {
      currencyValue = currencyValue.substring(1);
    }

    if (isNaN(parseInt(currencyValue))) {
      setValue((values) => {
        return { ...values, [name]: '' };
      });
    } else {
      setValue((values) => {
        return { ...values, [name]: inrFormat(parseInt(currencyValue)) };
      });
    }
 
 `;

  const htmlCode = `
   import { useState } from 'react';
   import {
    inrFormat,
    capitalizeFirstLetter,
    PtgUiInput,
    convertIntoPhoneNumber,
   } from '@ptg-ui/react';

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
      onBlur={currencyOnBlur}
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
    />`;

  return (
    <>
      {!props.showEventCode ? (
        <>
          <div className="row">
            <div className="col-lg-4 mb-3 col-sm-6 col-xs-12 w-75">
              <label
                htmlFor="firstLetterCapitalTextEvent"
                aria-labelledby="firstLetterCapitalTextEvent"
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
                onBlur={currencyOnBlur}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 mb-3 col-sm-6 col-xs-12 w-75">
              <label
                htmlFor="phoneNumberPipesEvent"
                aria-labelledby="phoneNumberPipesEvent"
              >
                {t('PHONE_NUMBER_PIPES_TEXT')}
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
      ) : (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
    </>
  );
}

export default PipeEvent;
