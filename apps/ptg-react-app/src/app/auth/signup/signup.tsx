/**
 * @since March 2022
 * @author Harsha Zalawa
 * @desc Reusable Signup Component
 *
 */
import { useState, useEffect } from 'react';
import './signup.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { authClass } from '../services/auth.service';
import { CITY_LIST, GENDER_LIST } from '../../mock/mocks';
import {
  //PtgUiButton,
  PtgUiInput,
  PtgUiLoading,
  PtgUiSelect,
  PtgUiCalendar,
  PtgUiCheckbox,
  PtgUiRadio,
} from '@ptg-ui/react';

export function PtgUiSignup() {
  const { t } = useTranslation();
  const [user, setUser]: any = useState({
    isLoading: false,
    username: '',
    email: '',
    gender: 'male',
    city: '',
    password: '',
    selectedCheck: '',
    error: null,
    disable: true,
  });
  const [formErr, setFormErr] = useState({
    username: false,
    email: false,
    gender: false,
    city: false,
    password: false,
  });
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
  const [date, setDate] = useState(null);
  const dateChange = (date: any) => {
    setDate(date.target.value);
  };
  const [selectedCheck, setSelectedCheck] = useState<boolean>(false);
  const checkHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCheck(event.target.checked);
  };

  const isDisabled: any = () => {
    setState(
      'disable',
      !(
        user.email.length > 0 &&
        user.password.length > 0 &&
        !formErr.email &&
        !formErr.password &&
        user.username.length > 0 &&
        user.city.length > 0 &&
        user.gender.length > 0 &&
        selectedCheck &&
        date
      )
    );
  };
  const validate = (fieldName: string, value: any) => {
    let disabled = false;
    let formErr = false;
    console.log(fieldName);
    switch (fieldName) {
      case 'username':
        if (value !== '') {
          disabled = true;
        }
        break;
      case 'email':
        {
          const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
          if (value === '' || value ? true : false !== regexEmail.test(value)) {
            disabled = true;
            if (!regexEmail.test(value)) {
              formErr = true;
            }
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
    setErrState(fieldName, formErr);
  };
  useEffect(() => {
    isDisabled();
  }, [
    user.username,
    user.email,
    date,
    user.city,
    user.gender,
    user.password,
    selectedCheck,
  ]);

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

  const navigate = useNavigate();
  const handleRegister = (event: any) => {
    event.preventDefault();
    setState('error', null);
    setState('isLoading', true);
    authClass
      .signUp({
        username: user.username,
        email: user.email,
        DOB: date,
        city: user.city,
        gender: user.gender,
        password: user.password,
      })
      .then((response: any) => {
        if (response) {
          setState('isLoading', false);
          localStorage.setItem('token', response);
          navigate('/login');
        }
      })
      .catch((error: any) => {
        console.log(error);
        setState('isLoading', false);
      });
  };
  return (
    <React.Fragment>
      <div>{user.isLoading && <PtgUiLoading type='circular' />}</div>
      <div className="signup-wrapper container-fluid p-0 d-flex justify-content-center align-items-center">
        <div className="signup-container">
          <div className="signup-form-wrapper">
            <div className="form-group">
              <div className="text-center mb-3">
                <h3>{t('REGISTRATION_TEXT')}</h3>
              </div>
            </div>
            <form className="form-login">
              <div className="login-form">
                <div className="form-container">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group required mb-2">
                        <label
                          htmlFor="inputUsername"
                          tabIndex={0}
                          aria-label="User Name"
                        >
                          {t('USER_NAME')}
                        </label>
                        <PtgUiInput
                          type="text"
                          id="inputUsername"
                          value={user.username}
                          onChange={handleChange}
                          className={`w-100 form-control bg_0 ${formErr.username ? 'border-danger' : ''
                            }`}
                          name="username"
                          placeholder={t('USER_NAME_PLACEHOLDER')}
                          onBlur={user.username === '' ? handleBlur : null}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group required mb-2">
                        <label
                          htmlFor="inputEmail"
                          tabIndex={0}
                          aria-label="Email"
                        >
                          {t('LABEL_EMAIL')}
                        </label>
                        <PtgUiInput
                          type="email"
                          id="inputEmail"
                          value={user.email}
                          onChange={handleChange}
                          className={`w-100 form-control bg_0 ${formErr.email ? 'border-danger' : ''
                            }`}
                          name="email"
                          placeholder={t('INPUT_PLACEHOLDER_EMAIL')}
                          onBlur={user.email === '' ? handleBlur : null}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group required mb-2" id="dob">
                        <label htmlFor="inputDOB" tabIndex={0} aria-label="DOB">
                          {t('DOB')}
                        </label>
                        <PtgUiCalendar
                          selected={date}
                          className={`form-control w-100`}
                          onChange={dateChange}
                          startDate={null}
                          endDate={new Date()}
                        // id="inputDOB"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group required mb-2">
                        <label
                          htmlFor="city"
                          tabIndex={0}
                          aria-label="cityList"
                        >
                          {t('CITY')}
                        </label>
                        <PtgUiSelect
                          name="city"
                          id="city"
                          list={CITY_LIST}
                          className={`sel-placeholder w-100 ${formErr.city ? 'border-danger' : ''
                            }`}
                          onChange={handleChange}
                          value={user.city}
                          onBlur={user.city === '' ? handleBlur : null}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group required mb-2">
                          <label
                            htmlFor="inputGender"
                            tabIndex={0}
                            aria-label="gender"
                          >
                            {t('GENDER')}
                          </label>
                          <div className="d-flex">
                            <PtgUiRadio
                              name="gender"
                              onChange={handleChange}
                              id="inputGender"
                              list={GENDER_LIST}
                              value={user.gender}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group required mb-2">
                          <label
                            htmlFor="password"
                            tabIndex={0}
                            aria-label="password"
                          >
                            {t('LABEL_PASSWORD')}
                          </label>
                          <PtgUiInput
                            type="password"
                            onChange={handleChange}
                            value={user.password}
                            className={`w-100 form-control bg_0 ${formErr.password ? 'border-danger' : ''
                              }`}
                            id="password"
                            name="password"
                            placeholder={t('ENTER_PASSWORD_PLACEHOLDER')}
                            onBlur={user.password === '' ? handleBlur : null}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group required mb-2">
                          <PtgUiCheckbox
                            label={t('DECLARATION_REGISTRATION_TEXT')}
                            htmlFor="confirm"
                            checked={selectedCheck}
                            onChange={checkHandler}
                            className={`form-check-input `}
                            name="confirm-registration"
                            id="confirm"
                            aria-label="confirm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="new_label text-center mt-3 mb-2">
                    <label>
                      {t('REGISTRATION_LABEL_INFO_MSG')}{' '}
                      <Link to="/login" className="signup-btn">
                        {t('LOG_IN')}
                      </Link>
                      .
                    </label>
                  </div>
                  <button
                    className="w-100"
                    type="button"
                    onClick={handleRegister}
                    disabled={user.disable}
                    data-testid="register"
                  >
                    {t('SUBMIT')}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default PtgUiSignup;
