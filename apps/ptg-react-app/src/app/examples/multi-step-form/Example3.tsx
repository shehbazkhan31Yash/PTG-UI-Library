import React, { useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import './Example3.scss';
import { PtgUiGridColumn, PtgUiRow } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import { IUserDetails, IUserErrors } from '../../interfaces/index';
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

  const componentCode = ` `;

  const htmlCode = `  `;

  return (
    <section className="card-section-two bg-white rounded pt-2 mt-2 mb-2 pb-4">
      <PtgUiRow>
        <PtgUiGridColumn xl={10} lg={10} md={10} sm={10} className={'mt-1'}>
          <h5 className="example-heading multi-step-heading">
            {t('MULTI_STEP_FORM')}
          </h5>
        </PtgUiGridColumn>
        <PtgUiGridColumn xl={2} lg={2} md={2} sm={2}  className={'mt-1 mb-2'}>
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
          details={details}
          error={error}
          handleChange={handleChange}
          handleBlur={handleBlur}
          resetForm={resetForm}
          submitForm={submitForm}
        />
      ) : (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
    </section>
  );
};
export default Example3;
