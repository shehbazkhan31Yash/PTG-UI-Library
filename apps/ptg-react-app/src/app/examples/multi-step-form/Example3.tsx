import React, { useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import './Example3.scss';
import { PtgUiGridColumn, PtgUiRow } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import { IUserDetails, IStep, IPtgUiMutliStep} from '../../interfaces/index';
import { PtgUiMultiStep,PtgUiFirstStep, PtgUiSecondStep, PtgUiThirdStep, PtgUiFinalStep  } from '@ptg-ui/react';

const Example3 = () => {
  const { t } = useTranslation();

  const [details, setDetails] = useState<IUserDetails>({
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

  const manageNextStepValidation = (step: number) => {
    let ButtonDisabled = true;
    if (step === 0) {
      ButtonDisabled = !(
        details?.userName?.length > 0 &&
        details?.password?.length > 0 &&
        details?.confirmPassword?.length > 0 &&
        !error?.userName &&
        !error?.password &&
        !error?.confirmPassword
      );
    } else if (step === 1) {
      ButtonDisabled = !(
        details.greeting.length &&
        details.gender.length &&
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
      );
    } else {
      ButtonDisabled = !(
        details.cardType &&
        details.cardNumber &&
        !error.cardNumber &&
        details.cvc &&
        !error.cvc &&
        details.expiration &&
        details.cardHolder
      );
    }
    return ButtonDisabled;
  };
  const ShowExampleCode = () => {
    if (!showCodeOne) {
      setShowCodeOne(true);
    } else {
      setShowCodeOne(false);
    }
  };
  // reset Form
  const resetForm = () => {
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
    console.log({ details });
    resetForm();
  };
  // on blur method
  const handleBlur = (event: any) => {
    const { name, value } = event.target;
    if (!value) {
      setError({ ...error, [name]: true });
    }
    else{
      setError({ ...error, [name]: false });
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
            formError = {...formError, [field]: "Invalid input"}
            console.log('feild', !regexPhone.test(value));
          }
          else{
          formError = { ...formError, [field]: "" };
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
    validate(name, value);
    setDetails({ ...details, [name]: value });
  };

  const componentCode = ` 
   const [details, setDetails] = useState<IUserDetails>({
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

  const stepperSteps: IStep[] = [
    { label: 'Account Info' },
    { label: 'Personal Information' },
    { label: 'Payment Details' },
    { label: 'Confirm Your Details' },
  ];
  
  const allSteps: React.ReactElement<IPtgUiMutliStep>[] = [
    <PtgUiFirstStep
      details={details}
      handleChange={handleChange}
      error={error}
      handleBlur={handleBlur}
    />,
    <PtgUiSecondStep
      details={details}
      handleChange={handleChange}
      error={error}
      handleBlur={handleBlur}
    />,
    <PtgUiThirdStep
      details={details}
      error={error}
      handleBlur={handleBlur}
      handleChange={handleChange}
    />,
    <PtgUiFinalStep
      details={details}
    />,
  ];

  const submitForm = () => {
    resetForm();
  };

  const resetForm = () => {
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
`;

  const htmlCode = ` 
  <PtgUiMultiStep
    allSteps={allSteps}
    stepperSteps={stepperSteps}
    details={details}
    error={error}
    resetForm={resetForm}
    submitForm={submitForm}
  /> `;

  const stepperSteps: IStep[] = [
    { id: 0, label: 'Account Info' },
    { id: 1, label: 'Personal Information' },
    { id: 2, label: 'Payment Details' },
    { id: 3, label: 'Confirm Your Details' },
  ];

  const allSteps: React.ReactElement<IPtgUiMutliStep>[] = [
    <PtgUiFirstStep
      details={details}
      error={error}
      handleBlur={handleBlur}
      handleChange={handleChange}
    />,
    <PtgUiSecondStep
      details={details}
      error={error}
      handleBlur={handleBlur}
      handleChange={handleChange}
    />,
    <PtgUiThirdStep
      details={details}
      error={error}
      handleBlur={handleBlur}
      handleChange={handleChange}
    />,
    <PtgUiFinalStep details={details} />,
  ];

  return (
    <section className="card-section-two bg-white rounded pt-2 mt-2 mb-2 pb-4">
      <PtgUiRow>
        <PtgUiGridColumn xl={10} lg={10} md={10} sm={10} className={'mt-1'}>
          <h5 className="example-heading multi-step-heading">
            {t('MULTI_STEP_FORM')}
          </h5>
        </PtgUiGridColumn>
        <PtgUiGridColumn xl={2} lg={2} md={2} sm={2} className={'mt-1 mb-2'}>
          <CodeIcon
            onClick={ShowExampleCode}
            fontSize="large"
            className="show-code-icon"
          ></CodeIcon>
        </PtgUiGridColumn>
        <hr className="horizontal-line" />
      </PtgUiRow>
      {!showCodeOne ? (
        <PtgUiMultiStep
          allSteps={allSteps}
          stepperSteps={stepperSteps}
          resetForm={resetForm}
          submitForm={submitForm}
          manageNextStepValidation={manageNextStepValidation}
          orientation="horizontal"
        />
      ) : (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
    </section>
  );
};
export default Example3;
