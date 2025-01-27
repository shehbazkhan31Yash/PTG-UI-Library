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
  truncateString,
  phoneNumber,
} from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';

/* eslint-disable-next-line */
interface PipesProps {
  showPipeCode : boolean
}

export function Pipes(props: PipesProps) {
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

  //  const cFLkeyUpHandler = (e:any)=> {
  //     const {name} = e.target;
  //     setOldValues((values)=>{
  // return {...oldValue,[name]:oldValue.cname};
  //     });
  //     setValue((values)=> {
  //       return {...values, [name]:capitalizeFirstLetter(value.cname)}
  //     });
  // }
  
  const componentCode = `
import './pipes.module.scss';
import { useState } from 'react';
import {
  inrFormat,
  capitalizeFirstLetter,
  PtgUiInput,
  truncateString,
  phoneNumber,
} from '@ptg-ui/react';


/* eslint-disable-next-line */
interface PipesProps {}

export function Pipes(props: PipesProps) {


  const [value, setValue] = useState({
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
export default Pipes;`

const htmlCode = `
    <PtgUiInput
      type="text"
      id="firstLetterCapital"
      name="cname"
      value={value.cname}
      className={'form-control bg_0'}
      onChange={handleChange}
    />
    
 
    <PtgUiInput
      type="number"
      name="inr"
      id="inrFormatText"
      className={'form-control bg_0'}
      value={value.inr}
      onChange={handleChange}
    />
    <PtgUiInput
      type="text"
      name="truncateStr"
      id="truncatePipeText"
      className={'form-control bg_0'}
      value={value.truncateStr}
      onChange={handleChange}
    />
  
    <PtgUiInput
      type="text"
      name="phoneNumber"
      id="phoneNumberPipes"
      className={'form-control bg_0'}
      value={value.phoneNumber}
      onChange={handleChange}
      maxlength="10"
    />

    <div>Output: {phoneNumber(value.phoneNumber)}</div>

`
  return (
    <>
    {!props.showPipeCode ? (
      <div className="wrapper">
          <div className="row">
            <div className="col-lg-4 mb-3 col-sm-6 col-xs-12 w-50">
              <label
                htmlFor="firstLetterCapital"
                aria-labelledby="firstLetterCapital"
                tabIndex={0}
              >
                {t('FIRST_LETTER_CAPITAL_TEXT')}
              </label>
              <PtgUiInput
                type="text"
                id="firstLetterCapital"
                name="cname"
                value={value.cname}
                className={'form-control bg_0'}
                onChange={handleChange}
              />
            </div>
            <div className='mb-4'>
              {t('OUTPUT_TEXT')}
              {capitalizeFirstLetter(value.cname)}
            </div>
          </div>
      
          <div className="row">
            <div className="col-lg-4 mb-3 col-sm-6 col-xs-12 w-50">
              <label
                htmlFor="inrFormatText"
                aria-labelledby="inrFormatText"
                tabIndex={0}
              >
                {t('INR_FORMAT_TEXT')}
              </label>
              <PtgUiInput
                type="number"
                name="inr"
                id="inrFormatText"
                className={'form-control bg_0'}
                value={value.inr}
                onChange={handleChange}
              />
            </div>
            <div className='mb-4'>
              {t('OUTPUT_TEXT')}
              {inrFormat(value.inr)}
            </div>
          </div>
       
          <div className="row">
            <div className="col-lg-4 mb-3 col-sm-6 col-xs-12 w-50">
              <label
                htmlFor="truncatePipeText"
                aria-labelledby="truncatePipeText"
                tabIndex={0}
              >
                {t('TRUNCATE_PIPE_TEXT')}
              </label>
              <PtgUiInput
                type="text"
                name="truncateStr"
                id="truncatePipeText"
                className={'form-control bg_0'}
                value={value.truncateStr}
                onChange={handleChange}
              />
              <div className='mt-3 mb-4'>
                {t('OUTPUT_TEXT')}
                {truncateString(value.truncateStr)}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 mb-3 col-sm-6 col-xs-12 w-50">
              <label
                htmlFor="phoneNumberPipes"
                aria-labelledby="phoneNumberPipes"
                tabIndex={0}
              >
                Phone Number Pipes
              </label>
              <PtgUiInput
                type="text"
                name="phoneNumber"
                id="phoneNumberPipes"
                className={'form-control bg_0'}
                value={value.phoneNumber}
                onChange={handleChange}
                maxlength="10"
              />
              <div className='mt-3 mb-4'>Output: {phoneNumber(value.phoneNumber)}</div>
            </div>
          </div>
      </div>
    ) : (
      <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
    )}
    </>
  );
}

export default Pipes;
