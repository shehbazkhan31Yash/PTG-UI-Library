import React from 'react';
import { PtgUiCommonStepProps } from '../interfaces/index';

export class PtgUiFinalStep extends React.Component<PtgUiCommonStepProps> {
  override render() {
    const { details } = this.props;
    return (
      <div className="border border-2 border-dark pb-2 mb-2">
        <h5 className="text-center my-2">{'Confirm Details'}</h5>
        <div className="form-group  text-break">
          <div className="row ms-3 text-wrap">
            <div className=" col-5 form-text">{'User Name'} </div>
            <div className=" col-6 form-text mb-2">{details?.userName}</div>
            <div className=" col-5 form-text">{'Name'} </div>
            <div className=" col-6 form-text mb-2">
              {details?.greeting +
                ' ' +
                details?.firstName +
                ' ' +
                details?.lastName}
            </div>
            <div className=" col-5 form-text">{'Gender'} </div>
            <div className=" col-6 form-text mb-2">{details?.gender}</div>
            <div className=" col-5 form-text">{'Email'}</div>
            <div className=" col-6 mb-2 form-text">{details?.email}</div>
            <div className=" col-5 form-text">{'Phone'}</div>
            <div className=" col-6 form-text mb-2">{details?.phone}</div>
            <div className=" col-5 form-text">{'Card Type'}</div>
            <div className=" col-6 form-text mb-2">{details?.cardType}</div>
            <div className=" col-5 form-text">{'Card Number'} </div>
            <div className=" col-6 form-text mb-2">{details?.cardNumber}</div>
            <div className=" col-5 form-text">{'Adresse'} </div>
            <div className=" col-6 form-text mb-2">{`${details?.homeAddress},${details?.state},${details?.zipCode}\n ${details?.country}`}</div>
          </div>
        </div>
      </div>
    );
  }
}
