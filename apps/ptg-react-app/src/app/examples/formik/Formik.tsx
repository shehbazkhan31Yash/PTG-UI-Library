import { PtgUiGridColumn, PtgUiFormik } from '@ptg-ui/react';
import CodeIcon from '@mui/icons-material/Code';
import { useState } from 'react';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import './formik.scss';
import { IFormValues, IFormValuesNested } from '../../interfaces/index';
import { IMAGE_PATH, EMAIL_REGEX } from '../../constants/Constant';
import {
  FORMIK_HTML_CODE,
  FORMIK_COMPONENET,
} from '../stringLiteral/FormikLiteral';
import { CustomFormNested, CustomForm } from './formComponent';
import {
  required,
  lengthCheck,
} from '../../common/formValidation/FormValidation';

const Formik = () => {
  const [showCode, setShowCode] = useState<boolean>(false);
  const toggleShowCode = () => setShowCode((prev) => !prev);
  const componentCode = FORMIK_COMPONENET;
  const htmlCode = FORMIK_HTML_CODE;

  const initialValues: IFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    subscribe: false,
    hobbies: '',
    notificationsPreferences: '',
  };
  const initialValuesNested: IFormValuesNested = {
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  };
  const validateNested = (values: IFormValuesNested) => {
    const errors: IFormValuesNested = {};
    required(values?.address, 'address', errors);
    values?.city
      ? lengthCheck(values.city, 'city', 0, 20, errors)
      : required(values?.city, 'city', errors);
    required(values?.state, 'state', errors);
    required(values?.zip, 'zip', errors);
    if (values?.zip) {
      if (!/^\d+$/.test(values?.zip)) {
        errors.zip = 'Only numbers are allowed';
      } else if (!/^\d{6}$/.test(values.zip)) {
        errors.zip = 'ZIP code must be exactly 6 digits';
      }
    }
    required(values?.country, 'country', errors);
    return errors;
  };
  const validate = (values: IFormValues) => {
    const errors: IFormValues = {};
    required(values?.firstName, 'firstName', errors);
    if (values?.firstName) {
      lengthCheck(values.firstName, 'firstName', 2, 15, errors);
    }
    required(values?.lastName, 'lastName', errors);
    if (values?.lastName) {
      lengthCheck(values.lastName, 'lastName', 0, 20, errors);
    }
    required(values?.email, 'email', errors);
    if (values?.email && !EMAIL_REGEX.test(values.email)) {
      errors.email = 'Email is invalid';
    }
    required(values?.password, 'password', errors);
    if (values?.password) {
      lengthCheck(values.password, 'password', 6, 50, errors);
    }
    required(values?.confirmPassword, 'confirmPassword', errors);
    if (values?.confirmPassword && values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords must match';
    }
    required(values?.birthDate, 'birthDate', errors);
    required(values?.hobbies, 'hobbies', errors);
    return errors;
  };
  const onSubmit = (values: IFormValues) => {
    return;
  };

  return (
    <div className="row">
      <PtgUiGridColumn md={10} className={'mt-1 mb-2'}>
        <h5 className="font-weight-bold example-heading">{'Formik'}</h5>
      </PtgUiGridColumn>
      <div className="col-2 mr-5 mb-2">
        <CodeIcon
          onClick={toggleShowCode}
          fontSize="large"
          className="show-code-icon"
        />
      </div>
      <hr className="horizontal-line" />
      {showCode && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <div className="container">
        <PtgUiFormik
          initialValues={initialValues}
          validate={validate}
          CustomForm={CustomForm}
          image={IMAGE_PATH}
          onSubmit={onSubmit}
        >
          <PtgUiFormik
            initialValues={initialValuesNested}
            validate={validateNested}
            CustomForm={CustomFormNested}
            onSubmit={onSubmit}
          ></PtgUiFormik>
        </PtgUiFormik>
      </div>
    </div>
  );
};

export default Formik;
