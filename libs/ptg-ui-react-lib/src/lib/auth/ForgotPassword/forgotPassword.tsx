/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * @since March 2022
 * @author Anmol Mathur
 * @Updatedby Ankit Patidar
 * @Updatedby Harsha Zalawa
 * @desc Forgot Password Component
 *
 */
import { useEffect, useState } from 'react';
import './forgotPassword.scss';
import { useTranslation } from 'react-i18next';

import { Modal } from 'react-bootstrap';
import PtgUiAlert from '../../Alert/Alert';
import PtgUiButton from '../../Button/Button';
import PtgUiInput from '../../Input/Input';

export default function PtgUiForgotPassword() {
  const { t } = useTranslation();
  const intialState = {
    show: false,
    email: '',
    btnDisable: false,
    showMessage: { show: false, type: '', message: '' },
  };
  const [values, setValues] = useState(intialState);
  const [formErr, setFormErr] = useState({
    email: false,
    password: false,
  });

  //common function to set specific state variable
  const setState: any = (field: string, value: any) => {
    setValues((preState: any) => {
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

  const handleClose = () => {
    setState('show', false);
  };

  const handleShow = () => {
    setValues({ ...values, btnDisable: true, email: '' });
    setState('show', true);
  };

  //validate email and password
  const validate = (fieldName: string, value: any) => {
    let disabled = false;
    let formErr = false;
    switch (fieldName) {
      case 'email':
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (value === '' || value ? true : false !== regexEmail.test(value)) {
          disabled = true;
          if (!regexEmail.test(value)) {
            formErr = true;
          }
        }
        break;
    }

    setState('disable', disabled);
    setErrState(fieldName, formErr);
  };

  //generic function for all input field
  const handleChange: any = (e: any) => {
    const { name, value } = e.target;
    validate(name, value);
    setValues((preState: any) => {
      return {
        ...preState,
        [name]: value,
      };
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
    let btn = true;
    if (formErr.email == false && values.email !== '') btn = false;
    setState('btnDisable', btn);
  }, [values.email]);

  return (
    <div>
      <a
        className="forgot-password float-end"
        onClick={handleShow}
        data-testid="linkForgotPassword"
      >
        Forgot Password?
      </a>
      <Modal show={values.show}>
        {values.showMessage.show && (
          <PtgUiAlert
            type={values?.showMessage?.type}
            message={values?.showMessage?.message}
          />
        )}
        <div className="forgot-wrapper container-fluid p-0 d-flex justify-content-center align-items-center">
          <div className="forgot-container">
            <div className="forgot-form-wrapper">
              <div className="form-group">
                <div className="text-center mb-3">
                  <h3>{t('FORGOT_PASSWORD')}</h3>
                </div>
              </div>
              <div className="forgot-form">
                <div className="form-group required mb-4">
                  <label htmlFor="inputEmail">{t('LABEL_EMAIL')}</label>
                  <PtgUiInput
                    type="email"
                    className={`w-100 form-control bg_0 ${
                      formErr.email === true ? 'border-danger' : ''
                    }`}
                    name="email"
                    data-testid="email"
                    placeholder={t('INPUT_PLACEHOLDER_EMAIL')}
                    onChange={handleChange}
                    value={values.email}
                    onBlur={values.email === '' ? handleBlur : null}
                  />
                </div>
                <div className="row">
                  <div className="col-9 col-lg-8 col-md-8 col-sm-9 col-xs-9">
                    <PtgUiButton
                      type="submit"
                      variant="primary"
                      data-testid="handleSubmit"
                      disabled={values.btnDisable}
                    >
                      {t('FORGOT_PASSWORD')}
                    </PtgUiButton>
                  </div>
                  <div className="col-3 col-lg-4 col-md-4 col-sm-3 col-xs-3 text-md-end">
                    <PtgUiButton
                      type="submit"
                      variant="secondary"
                      data-testid="handleClose"
                      onClick={handleClose}
                    >
                      {t('CANCEL')}
                    </PtgUiButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
