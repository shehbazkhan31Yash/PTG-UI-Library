import './ResetPassword.scss';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FormGroup, FormLabel } from 'react-bootstrap';
import {
  //PtgUiButton,
  PtgUiInput,
  PtgUiLoading,
  PtgUiAlert,
} from '@ptg-ui/react';
import { authClass } from '../services/auth.service';
/* eslint-disable-next-line */
export interface PtgUiResetPasswordProps {}

export function PtgUiResetPassword(props: PtgUiResetPasswordProps) {
  const { t } = useTranslation();
  const [fields, handleFieldChange] = useState({
    code: '',
    password: '',
    confirmPassword: '',
    isLoading: false,
    disable: false,
    showMessage: { show: false, type: '', message: '' },
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const [formErr, setFormErr] = useState({
    password: false,
    confirmPassword: false,
  });

  const navigate = useNavigate();
  const handleConfirmClick: any = (e: any) => {
    e.preventDefault();

    console.log('fields:', fields);
    authClass
      .resetPassword({
        code: fields.code,
        password: fields.password,
        passwordConfirmation: fields.confirmPassword,
      })
      .then((response: any) => {
        setState('isLoading', false);
        console.log('response', response);
        if (response.statusCode && response.statusCode !== 200) {
          throw new Error('Function not implemented.');
        } else if (response.jwt !== '') {
          setState('showMessage', {
            show: true,
            type: 'success',
            message: 'Password changed successfully.',
          });
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        }
      })
      .catch((error: any) => {
        setState('isAlert', true);
        console.log(error);
      });
  };

  const handleChange: any = (e: any) => {
    const { name, value } = e.target;
    validate(name, value);
    handleFieldChange((preState: any) => {
      return {
        ...preState,
        [name]: value,
      };
    });
  };

  const setState: any = (field: string, value: any) => {
    handleFieldChange((preState: any) => {
      return {
        ...preState,
        [field]: value,
      };
    });
  };
  const isDisabled: any = () => {
    setState(
      'disable',
      fields.password.length === 0 ||
        fields.confirmPassword.length === 0 ||
        fields.code?.length === 0 ||
        fields.password !== fields.confirmPassword
    );
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

  const setErrState: any = (field: string, value: any) => {
    setFormErr((preState: any) => {
      return {
        ...preState,
        [field]: value,
      };
    });
  };

  const validate = (fieldName: string, value: any) => {
    let disabled = true;
    let formErr = false;
    switch (fieldName) {
      case 'password':
        if (value === '') {
          disabled = true;
          formErr = true;
        }
        break;
      case 'confirmPassword':
        if (value !== fields.password) {
          disabled = true;
          formErr = true;
        }
        break;
      default: {
        disabled = true;
      }
    }

    setErrState(fieldName, formErr);
    setState('disable', disabled);
  };

  useEffect(() => {
    setState('code', searchParams.get('code'));
  }, []);

  useEffect(() => {
    isDisabled();
  }, [fields.password, fields.confirmPassword]);

  return (
    <>
      {fields.isLoading && <PtgUiLoading />}
      {fields.showMessage.show && (
        <PtgUiAlert
          type={fields?.showMessage?.type}
          message={fields?.showMessage?.message}
        />
      )}
      <div className="login-wrapper container-fluid p-0 d-flex justify-content-center align-items-center">
        <div className="login-container">
          <div className="login-form-wrapper">
            <div className="form-group">
              {/* {user.isAlert && <PtgUiAlert message="Invalid email or password" />} */}
            </div>
            <div className="form-group">
              <div className="login-logo text-center mb-3">
                <h2>{t('RESET_PASSWORD_TEXT')}</h2>
              </div>
            </div>
            <form
              onSubmit={handleConfirmClick}
              className="form-login"
              data-testid="resetConfirmClick"
            >
              <div className="login-form">
                <div className="form-group mb-4 required">
                  <label htmlFor="inputEmail">{t('LABEL_PASSWORD')}</label>
                  <div className="userid input-group flex-nowrap">
                    <div className="input-group-prepend">
                      <i className="login-user-icon"></i>
                    </div>
                    <PtgUiInput
                      type="password"
                      value={fields.password}
                      onChange={handleChange}
                      className={`"w-100 form-control bg_0 ${
                        formErr.password === true ? 'border-danger' : ''
                      }`}
                      name="password"
                      id="password"
                      placeholder={t('NEW_PASSWORD_PLACEHOLDER')}
                      onBlur={fields.password === '' ? handleBlur : null}
                    />
                  </div>
                </div>
                <div className="form-group mb-4 required">
                  <label htmlFor="inputPassword">
                    {t('CONFIRM_PASSWORD_LABEL')}
                  </label>
                  <div className="userid input-group flex-nowrap">
                    <div className="input-group-prepend">
                      <i className="login-password-icon"></i>
                    </div>
                    <PtgUiInput
                      type="password"
                      onChange={handleChange}
                      value={fields.confirmPassword}
                      className={`"w-100 form-control bg_0 ${
                        formErr.confirmPassword === true ? 'border-danger' : ''
                      }`}
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder={t('CONFIRM_PASSWORD_PLACEHOLDER')}
                      onBlur={fields.confirmPassword === '' ? handleBlur : null}
                    />
                  </div>
                </div>
              </div>
              <button
                className="w-100"
                type="submit"
                disabled={fields.disable}
                data-testid="submitPassword"
              >
                {t('SUBMIT')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PtgUiResetPassword;
