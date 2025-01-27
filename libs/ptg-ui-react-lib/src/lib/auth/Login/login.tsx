/**
 * @since Oct 2024
 * @author Manish patidar
 * @desc Reusable Login Component
 *
 */

import React from 'react';
import './login.scss';
// import { Link } from 'react-router-dom';
//import ForgotPassword from '../ForgotPassword/forgotPassword';
import PtgUiButton from '../../button/button';
import PtgUiInput from '../../input/input';

interface PtgUiLoginProps {
  emailLabel?: string;
  passwordLabel?: string;
  emailPlaceolder?: string;
  passwordPlaceolder?: string;
  loginButtonName?: string;
  signupMsg?: string;
  signupButtonName?: string;
  msalButtonName?: string;
  forgotPasswordLabel?: string;
  imgPath?: string;
  handleChange?: any;
  user?: any;
  emailType?: string;
  passwordType?: string;
  isEmailValid?: boolean;
  onLoginClick?: any;
  onMsalClick?: any;
}

export function PtgUiLogin(props: PtgUiLoginProps) {
  const {
    emailLabel,
    passwordLabel,
    emailPlaceolder,
    passwordPlaceolder,
    loginButtonName,
    signupMsg,
    signupButtonName,
    msalButtonName,
    forgotPasswordLabel,
    imgPath,
    handleChange,
    user,
    emailType,
    passwordType,
    isEmailValid,
    onLoginClick,
    onMsalClick,
  } = props;

  return (
    <>
      <div className="login-wrapper container-fluid p-0 d-flex justify-content-center">
        <div className="login-container">
          <div className="login-form-wrapper">
            <div className="form-group">
              {/* {user.isAlert && <PtgUiAlert message={t('ERROR_MSG')} />} */}
            </div>
            <div className="form-group">
              <div className="login-logo text-center mb-3">
                <img className="login-logo" src={imgPath} />
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
                    {emailLabel}
                  </label>
                  <div className="userid flex-nowrap">
                    {/* <div className="input-group-prepend">
                      <i className="login-user-icon"></i>
                    </div> */}
                    <PtgUiInput
                      type={emailType || 'email'}
                      id="inputEmail"
                      value={user?.email}
                      onChange={handleChange}
                      className={`"w-100 form-control bg_0 ${
                        isEmailValid === false ? 'border-danger' : ''
                      }`}
                      name="email"
                      placeholder={emailPlaceolder}
                      //onBlur={user?.email === '' ? handleBlur : null}
                    />
                  </div>
                </div>
                <div className="form-group mb-4 required">
                  <label
                    htmlFor="inputPassword"
                    aria-labelledby="inputPassword"
                    tabIndex={0}
                  >
                    {passwordLabel}
                  </label>
                  <div className="forgot-password float-end" tabIndex={0}>
                    {/* <ForgotPassword /> */}
                  </div>
                  <div className="userid flex-nowrap">
                    {/* <div className="input-group-prepend">
                      <i className="login-password-icon"></i>
                    </div> */}
                    <PtgUiInput
                      type={passwordType || 'password'}
                      id="inputPassword"
                      value={user?.password}
                      onChange={handleChange}
                      // className={`"w-100 form-control bg_0 ${
                      //   formErr.password === true ? 'border-danger' : ''
                      // }`}
                      className={'w-100 form-control bg_0'}
                      name="password"
                      placeholder={passwordPlaceolder}
                      //onBlur={user.password === '' ? handleBlur : null}
                    />
                  </div>
                </div>
              </div>
              {/* <div className="new_label text-center mb-3">
                <label tabIndex={0}>
                  {signupMsg}{' '}
                  <Link to="/auth-signup" className="signup-btn">
                    {signupButtonName}
                  </Link>
                  .
                </label>
              </div> */}
              <PtgUiButton
                className="w-100"
                disabled={
                  user?.email && user?.password && isEmailValid ? false : true
                }
                data-testid="login"
                width="100%"
                border={'1px solid #000'}
                backgroundColor="#ddd"
                onClick={onLoginClick}
              >
                {loginButtonName}
              </PtgUiButton>
              <p className="text-center mx-3 mb-0">{'OR'}</p>
              <PtgUiButton
                className="w-100"
                width="100%"
                border={'1px solid #000'}
                backgroundColor="#ddd"
                onClick={onMsalClick}
              >
                {msalButtonName}
              </PtgUiButton>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PtgUiLogin;
