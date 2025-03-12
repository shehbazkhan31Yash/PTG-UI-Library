import React, { useEffect, useState } from 'react';
import {
  PtgUiButton,
  PtgUiInput,
} from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';


export const StepOne = ({ showNext, handleChange, details, error, handleBlur }: any) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { t } = useTranslation();
  useEffect(() => {
    setIsDisabled(
      !(
        details.userName.length > 0 &&
        details.password.length > 0 &&
        details.confirmPassword.length > 0 &&
        !error.userName &&
        !error.password &&
        !error.confirmPassword
      )
    );
  }, [
    details.userName,
    details.password,
    details.confirmPassword,
    error.userName,
    error.password,
    error.confirmPassword,
  ]);
  return (
    <div className="p-2">
      <div className="form-group required col-md-12 mb-2">
        <label htmlFor="inputUsername">{t('USER_NAME')} </label>
        <PtgUiInput
          className={`w-100 form-control bg_0 ${
            error.userName ? 'border-danger' : ''
          }`}
          type="text"
          name="userName"
          id="inputUsername"
          value={details.userName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div className="form-group required col-md-12 mb-2">
        <label htmlFor="password">{t('LABEL_PASSWORD')} </label>
        <PtgUiInput
          className={`w-100 form-control bg_0 ${
            error.password ? 'border-danger' : ''
          }`}
          type="password"
          name="password"
          id="password"
          value={details.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div className="form-group required col-md-12 mb-2">
        <label htmlFor="confirmPassword">{t('CONFIRM_PASSWORD_LABEL')} </label>
        <PtgUiInput
          className={`w-100 form-control bg_0 ${
            error.confirmPassword ? 'border-danger' : ''
          }`}
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={details.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {error.confirmPassword && (
          <span className="form-text text-danger">{error.confirmPassword}</span>
        )}
      </div>
      <PtgUiButton
        className="w-100 mt-2"
        type="button"
        onClick={showNext}
        disabled={isDisabled}
        // accessKey="s"
        aria-label="next"
        data-testid="next"
      >
        {t('NEXT')}
      </PtgUiButton>
    </div>
  );
};
