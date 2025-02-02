import React from 'react';
import {
  PtgUiButton,
  PtgUiInput,
  PtgUiSelect,
  PtgUiTextArea,
} from '@ptg-ui/react';
import {SALUTATION_LIST, GENDER_LIST_SELECT, STATE_LIST, COUNTRY_LIST} from '../mock/mock';
import { IUserDetails, PtgUiMultiStepState } from '../interfaces/index';

const salutationList = SALUTATION_LIST;
const genderList = GENDER_LIST_SELECT;
const stateList = STATE_LIST;
const contriesList = COUNTRY_LIST;

interface IPtgUiSecondStepProps {
  showPrevious?: () => void;
  showNext?: () => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  details?: IUserDetails;
  error?: IUserDetails;
}

export class PtgUiSecondStep extends React.Component<IPtgUiSecondStepProps, PtgUiMultiStepState> {
  constructor(props: IPtgUiSecondStepProps) {
    super(props);
    this.state = {
     isDisabled: false,
    };
  }

  // override componentDidMount(): void {
  //   this.updateButtonState();
  // }

  // override componentDidUpdate(prevProps: IPtgUiSecondStepProps) {
  //   if (
  //     prevProps.details !== this.props.details ||
  //     prevProps.error !== this.props.error
  //   ) {
  //     this.updateButtonState();
  //   }
  // }

  // updateButtonState = () => {
  //   const { details, error } = this.props;
  //   if (details && error) {
  //     const ButtonDisabled =
  //       !(details.greeting.length &&
  //           details.gender.length &&
  //           details.firstName &&
  //           details.lastName &&
  //           details.email &&
  //           !error.email &&
  //           details.phone &&
  //           !error.phone &&
  //           details.zipCode &&
  //           !error.zipCode &&
  //           details.state &&
  //           details.homeAddress &&
  //           details.country);
  //     this.setState({isDisabled: ButtonDisabled});
  //   }
  // };
  override render() {
    const { showNext, handleChange, details, error, handleBlur, showPrevious } = this.props;
    const { isDisabled } = this.state;
    return (
      <div className="p-2">
        <div className="row">
          <div className="form-group required col-md-4 mb-2">
            <label htmlFor="inputGreeting">{'GREETING'} </label>
            <PtgUiSelect
              name="greeting"
              list={salutationList}
              id="inputGreeting"
              data-testid="city"
              className={`sel-placeholder w-100 bg_0 ${
                error?.greeting ? 'border-danger' : ''
              }`}
              aria-label="given-name"
              onBlur={handleBlur}
              value={details?.greeting}
              onChange={handleChange}
            />
          </div>
          <div className="form-group required col-md-8 mb-2">
            <label htmlFor="inputGender">{'GENDER'} </label>
            <PtgUiSelect
              name="gender"
              list={genderList}
              id="inputGender"
              data-testid="city"
              className={`sel-placeholder w-100 bg_0 ${
                error?.gender ? 'border-danger' : ''
              }`}
              aria-label="given-name"
              onBlur={handleBlur}
              value={details?.gender}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group required row">
          <div className="col-md-6 mb-2">
            <label htmlFor="inputFirstName">{'FIRST_NAME'} </label>
            <PtgUiInput
              className={`w-100 form-control bg_0 ${
                error?.firstName ? 'border-danger' : ''
              }`}
              type="text"
              name="firstName"
              id="inputFirstName"
              value={details?.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="col-md-6 mb-2">
            <label htmlFor="inputLastName">{'LAST_NAME'} </label>
            <PtgUiInput
              className={`w-100 form-control bg_0 ${
                error?.lastName ? 'border-danger' : ''
              }`}
              type="text"
              name="lastName"
              id="inputLastName"
              value={details?.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="form-group required col-md-12 mb-2">
          <label htmlFor="inputEmail">{'LABEL_EMAIL'} </label>
          <PtgUiInput
            className={`w-100 form-control bg_0 ${
              error?.email ? 'border-danger' : ''
            }`}
            type="text"
            name="email"
            id="inputEmail"
            value={details?.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="form-group required col-md-12 mb-2">
          <label htmlFor="inputPhone">{'PHONE'} </label>
          <PtgUiInput
            className={`w-100 form-control bg_0 ${
              error?.phone ? 'border-danger' : ''
            }`}
            type="phone"
            name="phone"
            id="inputPhone"
            value={details?.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="form-group required vrow">
          <div className="col-md-4 mb-2">
            <label htmlFor="inputZipCode">{'ZIP_CODE'}</label>
            <PtgUiInput
              className={`w-100 form-control bg_0 ${
                error?.zipCode ? 'border-danger' : ''
              }`}
              type="text"
              name="zipCode"
              id="inputZipCode"
              value={details?.zipCode}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="form-group required col-md-8 mb-2">
            <label htmlFor="inputState">{'STATE'} </label>
            <PtgUiSelect
              name="state"
              list={stateList}
              id="inputState"
              data-testid="city"
              className={`sel-placeholder w-100 bg_0 ${
                error?.state ? 'border-danger' : ''
              }`}
              aria-label="given-name"
              onBlur={handleBlur}
              value={details?.state}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group required col-md-12 mb-2">
          <label htmlFor="inputAddress">{'HOME_ADDRESS'} </label>
          <PtgUiTextArea
            className={`w-100 form-control bg_0 ${
              error?.homeAddress ? 'border-danger' : ''
            }`}
            rows="2"
            name="homeAddress"
            id="inputAddress"
            value={details?.homeAddress}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="form-group required col-md-12 mb-2">
          <label htmlFor="inputContry">{'COUNTRY'} </label>
          <PtgUiSelect
            name="country"
            list={contriesList}
            id="inputContry"
            data-testid="city"
            className={`sel-placeholder w-100 bg_0 ${
              error?.country ? 'border-danger' : ''
            }`}
            aria-label="given-name"
            onBlur={handleBlur}
            value={details?.country}
            onChange={handleChange}
          />
        </div>
        {/* <div className="row">
          <div className="col-md-6 col-sm-12 mt-2">
            <PtgUiButton
              className="w-100"
              type="button"
              onClick={showPrevious}
              aria-label="previous"
              data-testid="previous"
            >
              {'PREVIOU'}
            </PtgUiButton>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 mt-2">
            <PtgUiButton
              className="w-100"
              type="button"
              onClick={showNext}
              aria-label="next"
              data-testid="next"
              disabled={isDisabled}
            >
              {'NEXT'}
            </PtgUiButton>
          </div>
        </div> */}
      </div>
    );
  }
}
