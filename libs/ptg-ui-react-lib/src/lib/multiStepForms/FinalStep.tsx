import PtgUiButton from '@ptg-react-libs/button/button';
import React from 'react';
import { IUserDetails } from '../interfaces/index';

interface IPtgUiFinalStepProps {
  submitForm?: () => void;
  resetForm?: () => void;
  showPrevious?: () => void;
  details?: IUserDetails;
  error?: IUserDetails;
}
export class PtgUiFinalStep extends React.Component<IPtgUiFinalStepProps> {
  constructor(props: IPtgUiFinalStepProps) {
    super(props);
    this.state = {
      isDisabled: true,
    };
  }

  override render() {
    const { details, showPrevious, resetForm, submitForm } = this.props;
    return (
      <div className="border border-2 border-dark pb-2 p-2">
        <h5 className="text-center my-2">Confirm Details</h5>
        <div className="form-group  text-break">
          <div className="row ms-3 text-wrap">
            <div className=" col-5 form-text">{'USER_NAME'} </div>
            <div className=" col-6 form-text mb-2">{details?.userName}</div>
            <div className=" col-5 form-text">{'NAME'} </div>
            <div className=" col-6 form-text mb-2">
              {details?.greeting +
                ' ' +
                details?.firstName +
                ' ' +
                details?.lastName}
            </div>
            <div className=" col-5 form-text">{'GENDER'} </div>
            <div className=" col-6 form-text mb-2">{details?.gender}</div>
            <div className=" col-5 form-text">{'LABEL_EMAIL'}</div>
            <div className=" col-6 mb-2 form-text">{details?.email}</div>
            <div className=" col-5 form-text">{'PHONE'}</div>
            <div className=" col-6 form-text mb-2">{details?.phone}</div>
            <div className=" col-5 form-text">{'CARD_TYPE'}</div>
            <div className=" col-6 form-text mb-2">{details?.cardType}</div>
            <div className=" col-5 form-text">{'CARD_NUMBER'} </div>
            <div className=" col-6 form-text mb-2">{details?.cardNumber}</div>
            <div className=" col-5 form-text">{'Adresse'} </div>
            <div className=" col-6 form-text mb-2">{`${details?.homeAddress},${details?.state},${details?.zipCode}\n ${details?.country}`}</div>
          </div>
        </div>
      </div>
    );
  }
}
