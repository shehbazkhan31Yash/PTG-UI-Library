/**
 * @since March 2022
 * @author Ankit patidar
 * @desc Reusable Login Component
 *
 */

import './Login.scss';
import { useState, useEffect } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { authClass } from '../services/auth.service';
import ForgotPassword from '../forgotpassword/ForgotPassword';
import {
  //PtgUiButton,
  PtgUiInput,
  PtgUiLoading,
  PtgUiAlert,
} from '@ptg-ui/react';
import msalInstance from '../msal';
import { acquireToken } from '../msal';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PtgUiLoginProps {}

export function PtgUiLogin(__props: PtgUiLoginProps) {
  const loginMsal = async () => {
    const loginRequest = {
      scopes: ['user.read', 'https://management.azure.com/user_impersonation'],
    };
    const response = await msalInstance.loginPopup(loginRequest);
    const [, tokenResponse] = await acquireToken(loginRequest);
    console.log("Hello i'm in msal", tokenResponse);
    authClass.setToken(JSON.stringify(response));
    navigate('/calendar');
  };

  const { t } = useTranslation();
  const [user, setUser]: any = useState({
    isLoading: false,
    isAlert: false,
    email: '',
    password: '',
    error: null,
    disable: true,
  });

  const [formErr, setFormErr] = useState({
    email: false,
    password: false,
  });

  const navigate = useNavigate();

  const setState: any = (field: string, value: any) => {
    setUser((preState: any) => {
      return {
        ...preState,
        [field]: value,
      };
    });
  };

  const setErrState: any = (field: string, value: any) => {
    setFormErr((preState: any) => {
      return {
        ...preState,
        [field]: value,
      };
    });
  };

  const isDisabled: any = () => {
    setState(
      'disable',
      !(
        user.email.length > 0 &&
        user.password.length > 0 &&
        !formErr.email &&
        !formErr.password
      )
    );
  };
  //validate email and password
  const validate = (fieldName: string, value: any) => {
    let formErr = false;
    switch (fieldName) {
      case 'email':
        {
          const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (value === '' || value ? true : false !== regexEmail.test(value)) {
          if (!regexEmail.test(value)) {
            formErr = true;
          }
        }
        }
        break;
      case 'password':
        if (value === '') {
          formErr = true;
        }
        break;
      default: {
      }
    }

    setErrState(fieldName, formErr);
  };

  //generic function for all input field
  const handleChange: any = (e: any) => {
    const { name, value } = e.target;
    validate(name, value);
    setUser((preState: any) => {
      return {
        ...preState,
        [name]: value,
      };
    });
  };

  const handleLogin = (event: any) => {
    event.preventDefault();
    setState('error', null);
    //console.log(error);
    setState('isLoading', true);
    authClass
      .login({
        identifier: user.email,
        password: user.password,
      })
      .then((response: any) => {
        setState('isLoading', false);
        if (response.statusCode && response.statusCode !== 200) {
          throw new Error('Function not implemented.');
        } else if (response.jwt !== '') {
          navigate('/calendar');
          authClass.setToken(JSON.stringify(response));
          authClass.setRole(response.user.role.type);
          if (response.user.role.type.trim() === 'admin') {
            navigate('/admin-home');
          } else {
            navigate('/calendar');
          }
        }
      })
      .catch((_error: any) => {
        setState('isAlert', true);
      });
  };

  //validate on focus out or blur input
  const handleBlur: any = (e: any) => {
    const { name } = e.target;
    setFormErr((preState: any) => {
      return {
        ...preState,
        [name]: true,
      };
    });
  };

  useEffect(() => {
    isDisabled();
  }, [user.email, user.password]);

  return (
    <React.Fragment>
      {user.isLoading && <PtgUiLoading />}
      <div className="login-wrapper container-fluid p-0 d-flex justify-content-center align-items-center">
        <div className="login-container">
          <div className="login-form-wrapper">
            <div className="form-group">
              {user.isAlert && <PtgUiAlert message={t('ERROR_MSG')} />}
            </div>
            <div className="form-group">
              <div className="login-logo text-center mb-3">
                <img
                  className="login-logo"
                  src="assets/images/YashLogo.png"
                  alt={t('IMG_WebsiteLOGO')}
                />
              </div>
            </div>
            <form className="form-login">
              <div className="login-form">
                <div className="form-group mb-4 required">
                  <label
                    htmlFor="inputEmail"
                    aria-labelledby="inputEmail"
                    tabIndex={0}
                  >
                    {t('LABEL_EMAIL')}
                  </label>
                  <div className="userid input-group flex-nowrap">
                    <div className="input-group-prepend">
                      <i className="login-user-icon"></i>
                    </div>
                    <PtgUiInput
                      type="email"
                      id="inputEmail"
                      value={user.email}
                      onChange={handleChange}
                      className={`"w-100 form-control bg_0 ${
                        formErr.email === true ? 'border-danger' : ''
                      }`}
                      name="email"
                      placeholder={t('INPUT_PLACEHOLDER_EMAIL')}
                      onBlur={user.email === '' ? handleBlur : null}
                    />
                  </div>
                </div>
                <div className="form-group mb-4 required">
                  <label
                    htmlFor="inputPassword"
                    aria-labelledby="inputPassword"
                    tabIndex={0}
                  >
                    {t('LABEL_PASSWORD')}
                  </label>
                  <div className="forgot-password float-end" tabIndex={0}>
                    <ForgotPassword />
                  </div>
                  <div className="userid input-group flex-nowrap">
                    <div className="input-group-prepend">
                      <i className="login-password-icon"></i>
                    </div>
                    <PtgUiInput
                      type="password"
                      id="inputPassword"
                      onChange={handleChange}
                      value={user.password}
                      className={`"w-100 form-control bg_0 ${
                        formErr.password === true ? 'border-danger' : ''
                      }`}
                      name="password"
                      placeholder={t('INPUT_PLACEHOLDER_PASSWORD')}
                      onBlur={user.password === '' ? handleBlur : null}
                    />
                  </div>
                </div>
              </div>
              <div className="new_label text-center mb-3">
                <label tabIndex={0}>
                  {t('LABEL_INFO_MSG')}{' '}
                  <Link to="/signup" className="signup-btn">
                    {t('SIGN_UP')}
                  </Link>
                  .
                </label>
              </div>
              <button
                className="w-100"
                onClick={handleLogin}
                tabIndex={0}
                disabled={user.disable}
                data-testid="login"
                // accessKey="s"
              >
                {t('LOG_IN')}
              </button>
              <p className="text-center mx-3 mb-0">{t('OR')}</p>
              <button
                className="w-100"
                onClick={loginMsal}
                tabIndex={0}
                // accessKey="s"
              >
                {t('Msal')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PtgUiLogin;
