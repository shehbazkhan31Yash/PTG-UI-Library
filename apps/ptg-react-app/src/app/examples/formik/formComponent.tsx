import { Form, Field, ErrorMessage } from 'formik';
import { ICustomeFormProps } from '../../interfaces/index';
import { COUNTRIES } from '../../constants/Constant';
import AutocompleteInput from '../../common/autocomplete/AutoComplete';

const countries = COUNTRIES;

export const CustomFormNested: React.FC<ICustomeFormProps> = () => {
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
          <AutocompleteInput
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

export const CustomForm: React.FC<ICustomeFormProps> = ({ values }) => {
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
