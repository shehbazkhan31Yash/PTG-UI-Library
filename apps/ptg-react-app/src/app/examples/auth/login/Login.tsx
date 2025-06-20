/**
 * @since Oct 2024
 * @author Manish patidar
 * @desc Reusable Login Component
 *
 */
import { useState } from 'react';
import './Login.scss';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../../common/showCode/showCodeComponent';
import { PtgUiLogin } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
import { ILogin } from '../../../interfaces';

export function PtgLogin() {
  const { t } = useTranslation();

  const initialValue = {
    email: '',
    password: '',
  };
  const [showCode, setShowCode] = useState<boolean>(false);
  const [user, setUser] = useState<ILogin>(initialValue);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  const ShowExampleCode = () => {
    if (!showCode) {
      setShowCode(true);
    } else {
      setShowCode(false);
    }
  };

  //handle validate
  const validate = (value: string) => {
    let formErr = true;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (value === '' || value ? true : false !== regexEmail.test(value)) {
      if (!regexEmail.test(value)) {
        formErr = false;
      }
    }
    setIsEmailValid(formErr);
  };

  //handle field change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    name === 'email' && validate(value);
    setUser({ ...user, [name]: value });
  };

  const onLoginClick = () => {
    //your code
    //get email and passwords from user state
  };
  const onMsalClick = () => {
    //your code
  };
  const onForgotPasswordSubmit = () => {
    //your code
    //get forgot email from
  };
  const getForgetEmail = () => {
    //your code
  };

  const componentCode = `
    import {PtgUiLogin} from '@ptg-ui/react';
    import "@ptg-ui/react/lib/styles/index.css";

    interface ILogin {
      email: string;
      password: string;
    }

    const initialValue = {
      email: '',
      password: '',
    };
    
    const [user, setUser] = useState<ILogin>(initialValue);
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

    //handle validate
    const validate = (value: string) => {
      let formErr = true;
      const regexEmail = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/i;
      if (value === '' || value ? true : false !== regexEmail.test(value)) {
        if (!regexEmail.test(value)) {
          formErr = false;
        }
      }
      setIsEmailValid(formErr);
    };

    //handle field change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      name === 'email' && validate(value);
      setUser({ ...user, [name]: value });
    };

    const onLoginClick = () => {
      //your code
      //get email and passwords from user state
    };
    const onMsalClick = () => {
      //your code
    };
    const onForgotPasswordSubmit = () => {
      //your code
      //get forgot email from
    };
    const getForgetEmail = (email: string) => {
      //your code
    };
  `;

  const htmlCode = `
    <PtgUiLogin
      emailLabel={t('LABEL_EMAIL')} //email field label email or username
      passwordLabel={t('LABEL_PASSWORD')} // password field label password
      emailPlaceholder={t('ENTER_EMAIL_PLACEHOLDER')} //placeholder email field
      passwordPlaceholder={t('ENTER_PASSWORD_PLACEHOLDER')} //placeholder password field
      loginButtonName={t('LOG_IN')} // login button name
      signupMsg={t('LABEL_INFO_MSG')} //
      signupButtonName={t('SIGN_UP')} // Signup button name
      msalButtonName={'MSAL'} // MSAL button name
      forgotPasswordLabel={t('FORGOT_PASSWORD')} // forgot password field label
      imgPath={
        'https://www.yash.com/wp-content/themes/html5blank-stable/images/yash-logo-new.svg'
      } // login page image
      handleChange={(e) => handleChange(e)} // handle change for login email and password
      user={user} // pass login email and password as object {email, password}
      emailType={'email'} // email type
      passwordType={'password'} // password type
      isEmailValid={isEmailValid} // email validation true or false
      onLoginClick={() => onLoginClick()} //on login click
      onMsalClick={() => onMsalClick()} // on msal click
      isForgotPassword={true} // if you want to forgot password functionality
      onForgotPasswordSubmit={onForgotPasswordSubmit} //on click on forgot password button
      getForgetEmail={getForgetEmail} // get forgot email from forgot password modal
      errorMessage={''}
      successMessage={''}
    />
  `;

  return (
    <div className="row">
      <div className="col-10 mt-1">
        <h5 className="font-weight-bold example-heading">{t('LOGIN')}</h5>
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
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} />
      )}
      <PtgUiLogin
        emailLabel={t('LABEL_EMAIL')} //email field label email or username
        passwordLabel={t('LABEL_PASSWORD')} // password field label password
        emailPlaceholder={t('ENTER_EMAIL_PLACEHOLDER')} //placeholder email field
        passwordPlaceholder={t('ENTER_PASSWORD_PLACEHOLDER')} //placeholder password field
        loginButtonName={t('LOG_IN')} // login button name
        signupMsg={t('LABEL_INFO_MSG')} //
        signupButtonName={t('SIGN_UP')} // Signup button name
        msalButtonName={'MSAL'} // MSAL button name
        forgotPasswordLabel={t('FORGOT_PASSWORD')} // forgot password field label
        imgPath={
          'https://www.yash.com/wp-content/themes/html5blank-stable/images/yash-logo-new.svg'
        } // login page image
        handleChange={handleChange} // handle change for login email and password
        user={user} // pass login email and password as object {email, password}
        emailType={'email'} // email type
        passwordType={'password'} // password type
        isEmailValid={isEmailValid} // email validation true or false
        onLoginClick={() => onLoginClick()} //on login click
        onMsalClick={() => onMsalClick()} // on msal click
        isForgotPassword={true} // if you want to forgot password functionality
        onForgotPasswordSubmit={onForgotPasswordSubmit} //on click on forgot password button
        getForgetEmail={getForgetEmail} // get forgot email from forgot password modal
        errorMessage={''}
        successMessage={''}
        oktaButtonName={t('OKTA_SIGN_IN')} // Okta button name
        onOktaClick={() => console.log('Okta Sign In')}
      />
    </div>
  );
}

export default PtgLogin;
