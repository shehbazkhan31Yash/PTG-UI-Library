import React, { useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import './Example3.scss';
import { useTranslation } from 'react-i18next';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import { IUserDetails, IStep, IPtgUiMultiStep } from '../../interfaces/index';
import {
  PtgUiGridColumn,
  PtgUiRow,
  PtgUiMultiStep,
  PtgUiFirstStep,
  PtgUiSecondStep,
  PtgUiThirdStep,
  PtgUiFinalStep,
} from '@ptg-ui/react';
import {USERDETAILS, USERINPUTERROR} from '../../constants/Constant';
import {MULTISTEPCOMPONENT, MULTISTEPHTMLCODE} from '../stringLiteral/MultiStepsLiteral'

const Example3 = () => {
  const { t } = useTranslation();
  const initialDetailsState: IUserDetails = USERDETAILS;

  const initialErrorState: IUserDetails = USERINPUTERROR;

  const [details, setDetails] = useState(initialDetailsState);
  const [error, setError] = useState(initialErrorState);

  const [showCodeOne, setShowCodeOne] = useState(false);
  const toggleShowCode = () => setShowCodeOne((prev) => !prev);

  const manageNextStepValidation = (step: number) => {
    switch (step) {
      case 0:
        return !(
          details?.userName?.length > 0 &&
          details?.password?.length > 0 &&
          details?.confirmPassword?.length > 0 &&
          !error?.userName &&
          !error?.password &&
          !error?.confirmPassword
        );
      case 1:
        return !(
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
      case 2:
        return !(
          details.cardType &&
          details.cardNumber &&
          !error.cardNumber &&
          details.cvc &&
          !error.cvc &&
          details.expiration &&
          details.cardHolder
        );
      default:
        return true;
    }
  };
  // reset Form
  const resetForm = () => setDetails(initialDetailsState);
  // submit form
  const submitForm = () => {
    resetForm();
  };
  // on blur method
  const handleBlur = (event) => {
    const { name, value } = event.target;
    if (!value) {
      setError({ ...error, [name]: true });
    } else {
      setError({ ...error, [name]: false });
    }
    validate(name, value);
  };
  // validating different fields
  const validate = (field: string, value: string) => {
    const newError = { ...error };

    if (!value) {
      newError[field] = 'Field is required';
    } else {
      newError[field] = '';
      switch (field) {
        case 'email': {
          const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
          newError[field] = regexEmail.test(value) ? '' : 'Invalid email';
          break;
        }
        case 'phone': {
          const regexPhone = /^\d{10}$/;
          newError[field] = regexPhone.test(value) ? '' : 'Invalid input';
          break;
        }
        case 'cardNumber':
          {
            const regexCardNumber = /^\d{16}$/;
            newError[field] = regexCardNumber.test(value)
              ? ''
              : 'Invalid card number';
          }
          break;
        case 'cvc':
          {
            const regexCvc = /^\d{3}$/;
            newError[field] = regexCvc.test(value) ? '' : 'Invalid cvc';
          }
          break;
        case 'zipCode':
          {
            const regexZipCode = /^\d{6}$/;
            newError[field] = regexZipCode.test(value)
              ? ''
              : 'Invalid zip code';
          }
          break;
        case 'confirmPassword':
          newError[field] =
            details.password !== value ? "Passwords don't match" : '';
          break;
        case 'password':
          newError[field] =
            details.confirmPassword && details.confirmPassword !== value
              ? "Passwords don't match"
              : '';
          break;
        default:
          break;
      }
    }
    setError(newError);
  };
  // handleChange
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    validate(name, value);
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const componentCode = MULTISTEPCOMPONENT;
  const htmlCode = MULTISTEPHTMLCODE; 

  const stepperSteps: IStep[] = [
    { id: 0, label: 'Account Info' },
    { id: 1, label: 'Personal Information' },
    { id: 2, label: 'Payment Details' },
    { id: 3, label: 'Confirm Your Details' },
  ];

  const allSteps: React.ReactElement<IPtgUiMultiStep>[] = [
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
            onClick={toggleShowCode}
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
        />
      ) : (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
    </section>
  );
};
export default Example3;
