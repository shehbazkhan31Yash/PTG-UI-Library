import PtgUiButton from '../button/button';
import {PtgUiInput} from '@ptg-react-libs/input/input';
import React from 'react';
import { IUserDetails, PtgUiMultiStepState, IPtgUiMutliStepProps } from '../interfaces/index';

interface PtgUiFirstStepProps {
  showNext?: () => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  details?: IUserDetails;
  error?: IUserDetails;
}

export class PtgUiFirstStep extends React.Component<
  PtgUiFirstStepProps,
  PtgUiMultiStepState
> {
  constructor(props: PtgUiFirstStepProps) {
    super(props);
    this.state = {
      isDisabled: true,
    };
  }

  // override componentDidMount(): void {
  //   this.updateButtonState();
  // }

  // override componentDidUpdate(prevProps: PtgUiFirstStepProps) {
  //   if (
  //     prevProps.details !== this.props.details ||
  //     prevProps.error !== this.props.error
  //   ) {
  //     // this.updateButtonState();
  //   }
  // }

  // updateButtonState = () => {
  //   const { details, error } = this.props;
  //   if (details) {
  //     const ButtonDisabled =
  //       !(details?.userName?.length > 0 &&
  //       details?.password?.length > 0 &&
  //       details?.confirmPassword?.length > 0 &&
  //       !error?.userName &&
  //       !error?.password &&
  //       !error?.confirmPassword);
  //     this.setState({isDisabled: ButtonDisabled});
  //   }
  // };

  override render() {
    const { showNext, handleChange, details, error, handleBlur } = this.props;
    const { isDisabled } = this.state;
    return (
      <div className="p-2">
        <div className="form-group required col-md-12 mb-2">
          <label htmlFor="inputUsername">{'USER_NAME'} </label>
          <PtgUiInput
            className={`w-100 form-control bg_0 ${
              error?.userName ? 'border-danger' : ''
            }`}
            type="text"
            name="userName"
            id="inputUsername"
            value={details?.userName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="form-group required col-md-12 mb-2">
          <label htmlFor="password">{'LABEL_PASSWORD'} </label>
          <PtgUiInput
            className={`w-100 form-control bg_0 ${
              error?.password ? 'border-danger' : ''
            }`}
            type="password"
            name="password"
            id="password"
            value={details?.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="form-group required col-md-12 mb-2">
          <label htmlFor="confirmPassword">{'CONFIRM_PASSWORD_LABEL'} </label>
          <PtgUiInput
            className={`w-100 form-control bg_0 ${
              error?.confirmPassword ? 'border-danger' : ''
            }`}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={details?.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {error?.confirmPassword && (
            <span className="form-text text-danger">
              {error.confirmPassword}
            </span>
          )}
        </div>
      </div>
    );
  }
}
