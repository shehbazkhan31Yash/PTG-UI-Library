/**
 * @since Oct 2024
 * @author Manish Patidar
 * @desc Reusable Signup Component
 *
 */
import { useState } from 'react';
import './signup.scss';
import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../../common/showCode/showCodeComponent';
import { PtgUiSignup } from '@ptg-ui/react';
import { IUser, IFormError } from '../../../interfaces';
export function PtgSignup() {
  const [showCode, setShowCode] = useState(false);
  const [date, setDate] = useState<Date | null | string>(null);
  const [selectedCheck, setSelectedCheck] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [user, setUser] = useState<IUser>({
    username: '',
    email: '',
    gender: 'male',
    city: '',
    password: '',
    confirmPassword: '',
    error: '',
    disable: true,
  });
  const [formErr, setFormErr] = useState<IFormError>({
    username: false,
    email: false,
    gender: false,
    city: false,
    password: false,
    confirmPassword: false,
  });

  //handle submit button enable and disable validation
  const isDisabled = (
    user: IUser,
    date: Date | null | string,
    selectedCheck: boolean,
    formErr: IFormError
  ) => {
    if (
      user?.username &&
      user?.email &&
      !formErr?.email &&
      date &&
      user?.city &&
      user?.gender &&
      user?.password &&
      user?.confirmPassword &&
      selectedCheck
    ) {
      setUser({ ...user, disable: false });
    } else {
      setUser({ ...user, disable: true });
    }
  };

  //handle text field change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target;
    validate(name, value);
  };

  //handle field validation
  const validate = (fieldName: string, value: string) => {
    let disabled = false;
    const formValue = value.trim();
    switch (fieldName) {
      case 'username':
        if (formValue === '') {
          disabled = true;
        }
        break;
      case 'email':
        {
          const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (
          formValue === '' || formValue
            ? true
            : false !== regexEmail.test(formValue)
        ) {
          if (!regexEmail.test(formValue)) {
            disabled = true;
          }
        }
        }
        break;
      case 'city':
        if (formValue === '') {
          disabled = true;
        }
        break;
      case 'gender':
        if (formValue === '') {
          disabled = true;
        }
        break;
      case 'password':
        if (formValue === '') {
          disabled = true;
        }
        break;
      case 'confirmPassword':
        if (formValue === '') {
          disabled = true;
        }
        break;
      default: {
        disabled = true;
      }
    }

    setFormErr({
      ...formErr,
      [fieldName]: disabled,
    });

    isDisabled(
      {
        ...user,
        [fieldName]: formValue,
      },
      date,
      selectedCheck,
      {
        ...formErr,
        [fieldName]: disabled,
      }
    );
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateString = event?.target?.value;
    setDate(dateString || null);
    isDisabled(user, dateString, selectedCheck, formErr);
  };

  //handle check box events
  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCheck(event.target.checked);
    isDisabled(user, date, event.target.checked, formErr);
  };

  const onSubmit = () => {
    if (user?.password && user?.confirmPassword) {
      if (user?.password !== user?.confirmPassword) {
        setErrorMessage('Password and Confirm Password should be the same');
      } else {
        const validationError = validatePassword(user?.password);
        setErrorMessage(validationError);
      }
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    }
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*]/.test(password);

    if (password.length < minLength) {
      return 'Password must be at least 8 characters long.';
    }
    if (!hasUpperCase) {
      return 'Password must contain at least one uppercase letter.';
    }
    if (!hasLowerCase) {
      return 'Password must contain at least one lowercase letter.';
    }
    if (!hasDigits) {
      return 'Password must contain at least one digit.';
    }
    if (!hasSpecialChars) {
      return 'Password must contain at least one special character.';
    }

    return ''; // No errors
  };

  const ShowExampleCode = () => {
    setShowCode(!showCode);
  };

  const componentCode = `
    import { PtgUiSignup } from '@ptg-ui/react';
  `;

  const htmlCode = `
    <PtgUiSignup />
  `;

  return (
    <div className="row">
        <div className="col-10 mt-1">
          <h5 className="font-weight-bold example-heading">Signup</h5>
        </div>
        <div className="col-2 mr-5 mb-2">
          <CodeIcon
            onClick={ShowExampleCode}
            fontSize="large"
            className="show-code-icon"
          ></CodeIcon>
        </div>
        <hr className="horizontal-line" />
        {showCode && (
          <ShowCodeComponent
            componentCode={componentCode}
            htmlCode={htmlCode}
          />
        )}
        <PtgUiSignup
          handleCheckChange={handleCheckChange}
          handleDateChange={handleDateChange}
          handleChange={handleChange}
          user={user}
          formErr={formErr}
          isDisabled={isDisabled}
          date={date}
          selectedCheck={selectedCheck}
          onSubmit={onSubmit}
          errorMessage={errorMessage}
          successMessage={''}
        />
      </div>
  );
}
export default PtgSignup;
