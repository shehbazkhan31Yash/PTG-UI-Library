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

export interface PtgSignupProps {}

interface IUser {
  username?: string;
  email?: string;
  gender?: string;
  city?: string;
  password?: string;
  error?: string | undefined | null;
  disable?: boolean;
}

interface IFormErr {
  username?: boolean;
  email?: boolean;
  gender?: boolean;
  city?: boolean;
  password?: boolean;
}

export function PtgSignup(props: PtgSignupProps) {
  const [showCode, setShowCode] = useState(false);
  const [date, setDate] = useState<Date | null | string>(null);
  const [selectedCheck, setSelectedCheck] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({
    username: '',
    email: '',
    gender: 'male',
    city: '',
    password: '',
    error: '',
    disable: true,
  });
  const [formErr, setFormErr] = useState<IFormErr>({
    username: false,
    email: false,
    gender: false,
    city: false,
    password: false,
  });

  //handle submit button enable and disable validation
  const isDisabled = (
    user: IUser,
    date: Date | null | string,
    selectedCheck: boolean
  ) => {
    if (
      user.username &&
      user.email &&
      date &&
      user.city &&
      user.gender &&
      user.password &&
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
    isDisabled(
      {
        ...user,
        [name]: value,
      },
      date,
      selectedCheck
    );
  };

  //handle field validation
  const validate = (fieldName: string, value: string) => {
    let disabled = false;
    let formErr = false;
    switch (fieldName) {
      case 'username':
        if (value !== '') {
          disabled = true;
        }
        break;
      case 'email':
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (value === '' || value ? true : false !== regexEmail.test(value)) {
          disabled = true;
          if (!regexEmail.test(value)) {
            formErr = true;
          }
        }
        break;
      case 'city':
        if (value !== '') {
          disabled = true;
        }
        break;
      case 'gender':
        if (value !== '') {
          disabled = true;
        }
        break;
      case 'password':
        if (value !== '') {
          disabled = true;
        }
        break;
      default: {
        disabled = true;
      }
    }
    setFormErr({
      [fieldName]: formErr,
    });
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateString = event?.target?.value;
    setDate(dateString || null);
    isDisabled(user, dateString, selectedCheck);
  };

  //handle check box events
  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCheck(event.target.checked);
    isDisabled(user, date, event.target.checked);
  };

  const onSubmit = () => {};

  const ShowExampleCode = () => {
    if (!showCode) {
      setShowCode(true);
    } else {
      setShowCode(false);
    }
  };

  const componentCode = `
    import { PtgUiSignup } from '@ptg-ui/react';
  `;

  const htmlCode = `
    <PtgUiSignup />
  `;

  return (
    <React.Fragment>
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
        />
      </div>
    </React.Fragment>
  );
}
export default PtgSignup;
