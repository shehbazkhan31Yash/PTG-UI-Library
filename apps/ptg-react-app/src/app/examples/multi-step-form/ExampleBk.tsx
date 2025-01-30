import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Typography } from '@material-ui/core';
import CodeIcon from '@mui/icons-material/Code';
import { StepOne } from './stepOne';
import { StepTwo } from './stepTwo';
import './Example3.scss';

import { PtgUiButton } from '@ptg-ui/react';
import { StepThree } from './stepThree';
import { useTranslation } from 'react-i18next';
import { StepFour } from './stepFour';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { PtgUiMultiStep } from '@ptg-ui/react';
import {
  SALUTATION_LIST,
  GENDER_LIST_SELECT,
  STATE_LIST,
  COUNTRY_LIST,
} from '../../mock/mocks';
const Example3 = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    greeting: '',
    gender: '',
    phone: '',
    zipCode: '',
    state: '',
    homeAddress: '',
    country: '',
    cardType: '',
    cardNumber: '',
    cvc: '',
    expiration: '',
    cardHolder: '',
  });
  const [error, setError] = useState<any>({
    firstName: false,
    lastName: false,
    userName: false,
    email: false,
    password: false,
    confirmPassword: false,
    greeting: false,
    gender: false,
    phone: false,
    zipCode: false,
    state: false,
    homeAddress: false,
    country: false,
    cardType: false,
    cardNumber: false,
    cvc: false,
    expiration: false,
    cardHolder: false,
  });

  const [showCodeOne, setShowCodeOne] = useState(false);

  const ShowExampleCode = () => {
    if (!showCodeOne) {
      setShowCodeOne(true);
    } else {
      setShowCodeOne(false);
    }
  };

  // reset Form
  const resetForm = () => {
    setStep(0);
    setDetails({
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      greeting: '',
      gender: '',
      phone: '',
      zipCode: '',
      state: '',
      homeAddress: '',
      country: '',
      cardType: '',
      cardNumber: '',
      cvc: '',
      expiration: '',
      cardHolder: '',
    });
  };

  // submit form
  const submitForm = () => {
    console.log('key')
    console.log({ details });
    resetForm();
  };

  // on blur method
  const handleBlur = (event: any) => {
    const { name, value } = event.target;
    if (!value) {
      setError({ ...error, [name]: true });
    }
    validate(name, value);
  };

  // validating different fields
  const validate = (field: any, value: any) => {
    let formError = error;
    if (!value) {
      formError = { ...formError, [field]: 'field is required' };
    } else {
      formError = { ...formError, [field]: false };

      // password validation
      if (
        (field === 'confirmPassword' && details.password !== value) ||
        (field === 'password' &&
          details.confirmPassword !== value &&
          details.confirmPassword)
      ) {
        formError = {
          ...formError,
          password: true,
          confirmPassword: "passwords don't match",
        };
      } else if (
        (field === 'confirmPassword' && details.password === value) ||
        (field === 'password' && details.confirmPassword === value)
      ) {
        formError = { ...formError, password: false, confirmPassword: false };
      }

      // email validation
      else if (field === 'email') {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (value === '' || value ? true : false !== regexEmail.test(value)) {
          if (!regexEmail.test(value)) {
            formError = { ...formError, [field]: true };
          }
        }
      }

      // phone validation
      else if (field === 'phone') {
        const regexPhone = /^\d{10}$/;
        if (value === '' || value ? true : false !== regexPhone.test(value)) {
          if (!regexPhone.test(value)) {
            formError = { ...formError, [field]: true };
          }
        }
      }

      // card validaion
      else if (field === 'cardNumber') {
        const regexCardNumber = /^\d{16}$/;
        if (
          value === '' || value ? true : false !== regexCardNumber.test(value)
        ) {
          if (!regexCardNumber.test(value)) {
            formError = { ...formError, [field]: true };
          }
        }
      }
      // cvc validation
      else if (field === 'cvc') {
        const regexCvc = /^\d{3}$/;
        if (value === '' || value ? true : false !== regexCvc.test(value)) {
          if (!regexCvc.test(value)) {
            formError = { ...formError, [field]: true };
          }
        }
      }
      // pincode validation
      else if (field === 'zipCode') {
        const regexZipCode = /^\d{6}$/;
        if (value === '' || value ? true : false !== regexZipCode.test(value)) {
          if (!regexZipCode.test(value)) {
            formError = { ...formError, [field]: true };
          }
        }
      }
    }
    setError(formError);
  };

  // handleChange
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  function showNext() {
    setStep(+step + 1);
  }
  const showPrevious = () => {
    setStep(+step - 1);
  };
  const showStep = (step: number) => {
    switch (step) {
      case 0:
        return (
          <StepOne
            showNext={showNext}
            details={details}
            handleChange={handleChange}
            error={error}
            handleBlur={handleBlur}
          />
        );
      case 1:
        return (
          <StepTwo
            showNext={showNext}
            showPrevious={showPrevious}
            details={details}
            error={error}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        );
      case 2:
        return (
          <StepThree
            showNext={showNext}
            showPrevious={showPrevious}
            details={details}
            error={error}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        );
      case 3:
        return (
          <StepFour
            details={details}
            showPrevious={showPrevious}
            resetForm={resetForm}
            submitForm={submitForm}
          />
        );
      default:
        return <StepOne showNext={showNext} />;
    }
  };

  const componentCode = `

  //Account Info

  import React, { useEffect, useState } from 'react';
  import { PtgUiButton, PtgUiInput } from '@ptg-ui/react';

  export const StepOne = ({ showNext, handleChange, details, error }: any) => {
  const [isDisabled, setIsDisabled] = useState(true);
  
  useEffect(() => {
    setIsDisabled(
      !(
        details.userName.length > 0 &&
        details.password.length > 0 &&
        details.confirmPassword.length > 0 &&
        !error.userName &&
        !error.password &&
        !error.confirmPassword
      )
    );
  }, [
    details.userName,
    details.password,
    details.confirmPassword,
    error.userName,
    error.password,
    error.confirmPassword,
  ]);

 
  //Personal Information 


  import React, { useEffect, useState } from 'react';
  import {
    PtgUiButton,
    PtgUiInput,
    PtgUiSelect,
    PtgUiCheckbox,
    PtgUiRadio,
    PtgUiDatePicker,
    PtgUiTextArea,
  } from '@ptg-ui/react';
  
  import { COUNTRY_LIST, GENDER_LIST_SELECT, SALUTATION_LIST, STATE_LIST 
  } from '@ptg-react-app/mock/mocks';
  
  export const StepTwo = ({
    showNext,
    showPrevious,
    details,
    handleChange,
    error,
    handleBlur,
  }: any) => {
    const [isDisabled, setIsDisabled] = useState(true);
    
    useEffect(() => {
      setIsDisabled(
        !(
          details.Greeting.length &&
          details.Gender.length &&
          details.firstName &&
          details.lastName &&
          details.email &&
          !error.email &&
          details.phone &&
          !error.phone &&
          details.zipCode &&
          !error.zipCode &&
          details.state &&
          details.homeAddress &&
          details.country
        )
      );
    }, [details, error]);

  //Payment Details

  export const CARD_LIST = [
      // { value: '', label: 'Select' },
      { value: 'Visa', label: 'Visa', name: 'card' },
      { value: 'Master Card', label: 'Master Card', name: 'card' },
      { value: 'Rupay Card', label: 'Rupay Card', name: 'card' },
    ];
  
  import { PtgUiButton, PtgUiInput, PtgUiSelect } from '@ptg-ui/react';
  import { CARD_LIST } from '@ptg-react-app/mock/mocks';
  import React, { useEffect, useState } from 'react';
  
  export const StepThree = ({
    showNext,
    showPrevious,
    details,
    handleChange,
    error,
    handleBlur,
    }: any) => {

  const [isDisabled, setIsDisabled] = useState(true)
      
  useEffect(()=>{
    setIsDisabled(!(details.cardType && details.cardNumber && !error.cardNumber
       && details.cvc && !error.cvc && details.expiration && details.cardHolder))
  },[details,error])

  //Confirm Your Details
  
  import { PtgUiButton } from '@ptg-ui/react';
  import React from 'react';
  
  export const StepFour = ({ resetForm, details, submitForm, showPrevious }: any) => {
  `;

  const htmlCode = `

  //Account Info

  <label htmlFor="inputUsername"> USER_NAME </label>
  <PtgUiInput
    className={"w-100 form-control bg_0 ${
      error.userName ? 'border-danger' : ''
    }"}
    type="text"
    name="userName"
    id="inputUsername"
    value={details.userName}
    onChange={handleChange}
  />

  <label htmlFor="password"> LABEL_PASSWORD </label>
  <PtgUiInput
    className={"w-100 form-control bg_0 ${
      error.password ? 'border-danger' : ''
    }"}
    type="password"
    name="password"
    id="password"
    value={details.password}
    onChange={handleChange}
  />

  <label htmlFor="confirmPassword"> CONFIRM_PASSWORD_LABEL </label>
  <PtgUiInput
    className={"w-100 form-control bg_0 ${
      error.confirmPassword ? 'border-danger' : ''
    }"}
    type="password"
    name="confirmPassword"
    id="confirmPassword"
    value={details.confirmPassword}
    onChange={handleChange}
  />
  {error.confirmPassword && (
    <span className="form-text text-danger">{error.confirmPassword}</span>
  )}


  //Personal Information 

  <PtgUiButton
    className="w-100 mt-2"
    type="button"
    onClick={showNext}
    disabled={isDisabled}
    // accessKey="s"
    aria-label="next"
    data-testid="next"
  > NEXT </PtgUiButton>

  <label htmlFor="inputGreeting">GREETING</label>
  <PtgUiSelect
    name="Greeting"
    list={SALUTATION_LIST}
    id="inputGreeting"
    data-testid="city"
    className={"sel-placeholder w-100 bg_0 ${
      error.greeting ? 'border-danger' : ''
    }"}
    aria-label="given-name"
    onBlur={handleBlur}
    value={details.Greeting}
    onChange={handleChange}
  />

  <label htmlFor="inputGender">GENDER</label>
  <PtgUiSelect
    name="Gender"
    list={GENDER_LIST_SELECT}
    id="inputGender"
    data-testid="city"
    className={"sel-placeholder w-100 bg_0 ${
      error.Gender ? 'border-danger' : ''
    }"}
    aria-label="given-name"
    onBlur={handleBlur}
    value={details.Gender}
    onChange={handleChange}
  />

  <label htmlFor="inputFirstName">FIRST_NAME</label>
  <PtgUiInput
    className={"w-100 form-control bg_0 ${
      error.firstName ? 'border-danger' : ''
    }"}
    type="text"
    name="firstName"
    id="inputFirstName"
    value={details.firstName}
    onChange={handleChange}
  />

  <label htmlFor="inputLastName">LAST_NAME</label>
  <PtgUiInput
    className={"w-100 form-control bg_0 ${
      error.lastName ? 'border-danger' : ''
    }"}
    type="text"
    name="lastName"
    id="inputLastName"
    value={details.lastName}
    onChange={handleChange}
  />

  <label htmlFor="inputEmail">LABEL_EMAIL</label>
  <PtgUiInput
    className={"w-100 form-control bg_0 ${error.email ? 'border-danger' : ''}"}
    type="text"
    name="email"
    id="inputEmail"
    value={details.email}
    onChange={handleChange}
  />

  <label htmlFor="inputPhone">PHONE</label>
  <PtgUiInput
    className={"w-100 form-control bg_0 ${error.phone ? 'border-danger' : ''}"}
    type="phone"
    name="phone"
    id="inputPhone"
    value={details.phone}
    onChange={handleChange}
  />

  <label htmlFor="inputZipCode">ZIP_CODE</label>
  <PtgUiInput
    className={"w-100 form-control bg_0 ${
      error.zipCode ? 'border-danger' : ''
    }"}
    type="text"
    name="zipCode"
    id="inputZipCode"
    value={details.zipCode}
    onChange={handleChange}
  />

  <label htmlFor="inputState">STATE</label>
  <PtgUiSelect
    name="state"
    list={STATE_LIST}
    id="inputState"
    data-testid="city"
    className={"sel-placeholder w-100 bg_0 ${
      error.state ? 'border-danger' : ''
    }"}
    aria-label="given-name"
    onBlur={handleBlur}
    value={details.state}
    onChange={handleChange}
  />

  <label htmlFor="inputAddress">HOME_ADDRESS</label>
  <PtgUiTextArea
    className={"w-100 form-control bg_0 ${
      error.homeAddress ? 'border-danger' : ''
    }"}
    rows="2"
    name="homeAddress"
    id="inputAddress"
    value={details.homeAddress}
    onChange={handleChange}
  />

  <label htmlFor="inputContry">COUNTRY</label>
  <PtgUiSelect
    name="country"
    list={COUNTRY_LIST}
    id="inputContry"
    data-testid="city"
    className={"sel-placeholder w-100 bg_0 ${
      error.country ? 'border-danger' : ''
    }"}
    aria-label="given-name"
    onBlur={handleBlur}
    value={details.country}
    onChange={handleChange}
  />

  <PtgUiButton
    className="w-100"
    type="button"
    onClick={showPrevious}
    aria-label="previous"
    data-testid="previous"
  >PREVIOUS</PtgUiButton>

  <PtgUiButton
    className="w-100"
    type="button"
    onClick={showNext}
    aria-label="next"
    data-testid="next"
    disabled={isDisabled}
  >NEXT</PtgUiButton>

  //Payment Details

  <label htmlFor="inputCardType">CARD_TYPE</label>
      <PtgUiSelect
        name="cardType"
        list={CARD_LIST}
        id="inputCardType"
        data-testid="city"
        className={"sel-placeholder w-100 bg_0 ${
          error.cardType ? 'border-danger' : ''
        }"}
        aria-label="given-name"
        onBlur={handleBlur}
        value={details.cardType}
        onChange={handleChange}
      />

    <label htmlFor="inputCardNumber">CARD_NUMBER</label>
      <PtgUiInput
        className={"w-100 form-control bg_0 ${
          error.cardNumber ? 'border-danger' : ''
        }"}
        type="text"
        name="cardNumber"
        id="inputCardNumber"
        value={details.cardNumber}
        onChange={handleChange}
      />

      <label htmlFor="inputCvc">CVC</label>
        <PtgUiInput
          className={"w-100 form-control bg_0 ${
            error.cvc ? 'border-danger' : ''
          }"}
          type="text"
          name="cvc"
          id="inputCvc"
          value={details.cvc}
          onChange={handleChange}
        />
   
      <label htmlFor="inputexpirationDate">EXPIRATION_DATE</label>
        <PtgUiInput
          className={"w-100 form-control bg_0 ${
            error.expiration ? 'border-danger' : ''
          }"}
          type="text"
          name="expiration"
          id="inputexpirationDate"
          placeholder="MM/YY"
          value={details.expiration}
          onChange={handleChange}
        />
  
    <label htmlFor="inputCardHolderName">CARD_HOLDER_NAME</label>
      <PtgUiInput
        className={"w-100 form-control bg_0 ${
          error.cardHolder ? 'border-danger' : ''
        }"}
        type="text"
        name="cardHolder"
        id="inputCardHolderName"
        value={details.cardHolder}
        onChange={handleChange}
      />
 
      <PtgUiButton
        className="w-100"
        type="button"
        onClick={showPrevious}
        aria-label="previous"
        data-testid="previous"
      >
        PREVIOUS
      </PtgUiButton>
    
      <PtgUiButton
        className="w-100"
        type="button"
        onClick={showNext}
        disabled={isDisabled}
        aria-label="next"
        data-testid="next"
      >
        NEXT
      </PtgUiButton>

    //Confirm Your Details

    <h4 className="text-center my-2">Confirm Details</h4>
    <div className=" col-5 form-text">USER_NAME</div>
    <div className=" col-6 form-text mb-2">{details.userName}</div>
    <div className=" col-5 form-text">NAME</div>
    <div className=" col-6 form-text mb-2">
      {details.Greeting +
        ' ' +
        details.firstName +
        ' ' +
        details.lastName}
    </div>
    <div className=" col-5 form-text">GENDER</div>
    <div className=" col-6 form-text mb-2">{details.Gender}</div>
    <div className=" col-5 form-text">LABEL_EMAIL</div>
    <div className=" col-6 mb-2 form-text">{details.email}</div>
    <div className=" col-5 form-text">PHONE</div>
    <div className=" col-6 form-text mb-2">{details.phone}</div>
    <div className=" col-5 form-text">CARD_TYPE</div>
    <div className=" col-6 form-text mb-2">{details.cardType}</div>
    <div className=" col-5 form-text">CARD_NUMBER</div>
    <div className=" col-6 form-text mb-2">{details.cardNumber}</div>
    <div className=" col-5 form-text">Address</div>
    <div className=" col-6 form-text mb-2">{"${details.homeAddress},${
    details.state
  },${details.zipCode}\n 
    ${details.country}"}</div>
  

    <PtgUiButton
      className="w-100"
      type="button"
      onClick={showPrevious}
      aria-label="submit"
      data-testid="submit"
    >
      PREVIOUS
    </PtgUiButton>

    <PtgUiButton
      className="w-100"
      type="button"
      onClick={resetForm}
      aria-label="reset"
      data-testid="reset"
    >
      RESET
    </PtgUiButton>
 
    <PtgUiButton
      className="w-100"
      type="button"
      onClick={submitForm}
      aria-label="submit"
      data-testid="submit"
    >
      SUBMIT
    </PtgUiButton>
  `;

  return (
    <section className="card-section-two bg-white rounded pt-2 mt-2 mb-2 pb-4">
      <div className="row">
        <div className="col-10 mt-1">
          <h5 className="example-heading multi-step-heading">
            {t('MULTI_STEP_FORM')}
          </h5>
        </div>
        <div className="col-2 mt-1 mb-2">
          <CodeIcon
            onClick={ShowExampleCode}
            fontSize="large"
            className="show-code-icon"
          ></CodeIcon>
        </div>
        <hr className="horizontal-line" />
      </div>
      {!showCodeOne ? (
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12 mr-5">
          <Stepper activeStep={step} orientation="vertical">
            <Step>
              <StepLabel
                error={
                  error.password || error.confirmPassword || error.userName
                }
              >
                {t('ACCOUNT_INFO')}
              </StepLabel>
            </Step>
            <Step>
              <StepLabel
                error={
                  error.email ||
                  error.firstName ||
                  error.lastName ||
                  error.phone ||
                  error.zipCode ||
                  error.homeAddress ||
                  error.Greeting ||
                  error.Gender ||
                  error.state ||
                  error.country
                }
              >
                {t('PERSONAL_INFO')}
              </StepLabel>
            </Step>
            <Step>
              <StepLabel
                error={
                  error.cardType ||
                  error.cardNumber ||
                  error.cvc ||
                  error.expiration ||
                  error.cardHolder
                }
              >
                {t('PAYMENT_DETAILS')}
              </StepLabel>
            </Step>
            <Step>
              <StepLabel>{t('CONFIRM_DETAILS')}</StepLabel>
            </Step>
          </Stepper>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          {showStep(step)}
        </div>
      </div>
      ):(
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode}/>
      )} 
    </section>
  );
};
export default Example3;
