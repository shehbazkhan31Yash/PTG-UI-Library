import { PtgUiGridColumn, PtgUiFormik } from '@ptg-ui/react';
import CodeIcon from '@mui/icons-material/Code';
import { useState } from 'react';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';
import './formik.scss';
import { Form, Field, ErrorMessage } from 'formik';
import {
  required,
  lengthCheck,
} from '../../common/formValidation/FormValidation';
import {
  IFormValues,
  ICustomeFormProps,
  IFormValuesNested,
} from '../../interfaces/index';
import { IMAGE_PATH, COUNTRIES, EMAIL_REGEX } from '../../constants/Constant';
import Autocomplete from '../../common/autocomplete/AutoComplete';
import {FORMIK_HTML_CODE, FORMIK_COMPONENET} from '../stringLiteral/FormikLiteral';

const countries = COUNTRIES; 

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
  const CustomFormNested: React.FC<ICustomeFormProps> = () => {
    return (
      <div>
        <Form>
          <div className="address-container">
            <CustomAddressField label="Address" name="address" />
            <CustomAddressField label="City" name="city" />
            <CustomAddressField label="State" name="state" />
            <CustomAddressField label="Zip" name="zip" />
          </div>
          <AutocompleteFeild label="Country" name="country" />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            Add Addres
          </button>
        </Form>
      </div>
    );
  };
  const AutocompleteFeild = ({ label, name }) => {
    return (
      <div className="form-group required">
        <label htmlFor="item" className="form-label">
          {label}
        </label>
        <Field name={name}>
          {({ field, form }) => (
            <Autocomplete
              field={field}
              form={form}
              items={countries}
              inputClassName={'form-input'}
            />
          )}
        </Field>
        <ErrorMessage name={name} component="div" className="error" />
      </div>
    );
  };
  const CustomAddressField = ({ label, name, type = 'text' }) => {
    return (
      <span className="address-input form-group required">
        <label htmlFor={name} className={'form-label'}>
          {label}
        </label>
        <Field name={name} type={type} className="form-input" />
        <ErrorMessage name={name} component="div" className="error" />
      </span>
    );
  };
  const CustomField = ({ label, name, type = 'text' }) => {
    return (
      <div className="form-group required">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <Field name={name} type={type} className="form-input" />
        <ErrorMessage name={name} component="div" className="error" />
      </div>
    );
  };

  const CustomCheckbox = ({ label, name }) => {
    return (
      <div className="form-group">
        <Field name={name}>
          {({ field }) => (
            <>
              <input type="checkbox" {...field} checked={field.value} />
              <label className={'custome-label'}>{label}</label>
            </>
          )}
        </Field>
      </div>
    );
  };

  const CustomRadioGroup = ({ label, options, name }) => (
    <div className="form-group">
      <label className={'form-label '}>{label}</label>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => (
            <label key={option.value} className={'form-label'}>
              <input type="radio" {...field} value={option.value} />
              {option.label}
            </label>
          ));
        }}
      </Field>
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );

  const CustomSelect = ({ label, options, name }) => (
    <div className="form-group required">
      <label htmlFor={name} className={'form-label'}>
        {label}
      </label>
      <Field as="select" name={name} className="form-input">
        <option value="">{'Select an option'}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component="div" className="error" />
    </div>
  );

  const CustomForm: React.FC<ICustomeFormProps> = ({ values }) => {
    return (
      <Form>
        <CustomField label="First Name" name="firstName" />
        <CustomField label="Last Name" name="lastName" />
        <CustomField label="Email" name="email" />
        <CustomField label="Password" name="password" />
        <CustomField label="Confirm Password" name="confirmPassword" />
        <CustomField label="Birth Date" name="birthDate" type="date" />
        <CustomCheckbox label="Subscribe for Notification" name={'subscribe'} />
        {values && values.subscribe && (
          <CustomRadioGroup
            label="Notification Preference"
            name="notificationsPreferences"
            options={[
              { value: 'email', label: 'Email' },
              { value: 'sms', label: 'SMS' },
            ]}
          />
        )}
        <CustomSelect
          label="Hobbies"
          name="hobbies"
          options={[
            { value: 'reading', label: 'Reading' },
            { value: 'traveling', label: 'Traveling' },
            { value: 'gaming', label: 'Gaming' },
          ]}
        />
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%' }}
        >
          Register
        </button>
      </Form>
    );
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
