/**
 * @since March 2022
 * @author Anmol Mathur
 * @desc Reset Component
 *
 */
import { PtgUiInput } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import './Reset.scss';

export default function Reset() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [resetDisable, setResetDisable] = useState(true);

  const oldPassword = useFormInput('', '');
  const newPassword = useFormInput('', '');
  const confirmPassword = useFormInput('', newPassword.value);

  useEffect(() => {
    validateForm();
  }, [oldPassword.value, newPassword.value, confirmPassword.value]);

  const validateForm = () => {
    let validFlag = true;
    if (
      oldPassword.value !== '' &&
      newPassword.value !== '' &&
      confirmPassword.value !== '' &&
      newPassword.value === confirmPassword.value
    ) {
      validFlag = false;
    }
    setResetDisable(validFlag);
  };

  return (
    <div>
      <a onClick={handleShow}>{t('RESET_PASSWORD_TEXT')}</a>
      <Modal show={show}>
        <div className="reset-wrapper container-fluid p-0 d-flex justify-content-center align-items-center">
          <div className="reset-container">
            <div className="reset-form-wrapper">
              <div className="form-group">
                {/* <ptg-ui-alert *ngIf="errorMessage" [type]="'danger'" [message]="errorMessage" [isDismissible]='true'
                        (closeAlert)="closeAlert($event)">
                    </ptg-ui-alert> */}
              </div>
              <div className="form-group">
                <div className="text-center mb-3">
                  <h3>{t('RESET_PASSWORD_TEXT')}</h3>
                </div>
              </div>
              <form className="form-forgot">
                <div className="forgot-form">
                  <div className="form-group required mb-2">
                    <label htmlFor="inputOldPass">
                      {t('OLD_PASSWORD_TEXT')}
                    </label>
                    <PtgUiInput
                      {...oldPassword}
                      className={`w-100 form-control bg_0 ${
                        oldPassword.error === 'true' ? 'border-danger' : ''
                      }`}
                      type="password"
                      placeholder={t('OLD_PASSWORD_PLACEHOLDER')}
                    />
                  </div>
                  <div className="form-group required mb-2">
                    <label htmlFor="inputNewPass">
                      {t('NEW_PASSWORD_TEXT')}
                    </label>
                    <PtgUiInput
                      {...newPassword}
                      className={`w-100 form-control bg_0 ${
                        newPassword.error === 'true' ? 'border-danger' : ''
                      }`}
                      name="newPassword"
                      // id='inputNewPass'
                      type="password"
                      placeholder={t('NEW_PASSWORD_PLACEHOLDER')}
                    />
                  </div>
                  <div className="form-group required mb-2">
                    <label htmlFor="inputconfirmPass">
                      {t('CONFIRM_PASSWORD_LABEL')}
                    </label>
                    <PtgUiInput
                      {...confirmPassword}
                      className={`w-100 form-control bg_0 ${
                        confirmPassword.error === 'true' ? 'border-danger' : ''
                      }`}
                      name="confirmPassword"
                      // id='inputconfirmPass'
                      type="password"
                      placeholder={t('CONFIRM_PASSWORD_PLACEHOLDERE')}
                    />
                  </div>
                  <div className="row">
                    <div className="col-7">
                      <button
                        className=""
                        type="submit"
                        disabled={resetDisable}
                      >
                        {t('RESET_PASSWORD_TEXT')}
                      </button>
                    </div>
                    <div className="col-5">
                      <button className="secondary" onClick={handleClose}>
                        {t('CANCEL')}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
const useFormInput = (initialValue: any, passCheck: any) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('false');
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setValue(value);
    if (value === '') setError('true');
    else setError('false');
    if (name === 'confirmPassword' && value !== passCheck) {
      setError('true');
    }
  };
  return {
    value,
    onChange: handleChange,
    error,
  };
};
