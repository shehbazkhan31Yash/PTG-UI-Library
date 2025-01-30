import { PtgUiButton, PtgUiInput, PtgUiSelect } from '@ptg-ui/react';
import React from 'react';
import { CARD_LIST } from '../mock/mock';
import { IUserDetails, PtgUiMultiStepState } from '../interfaces/index';

interface IPtgUiThirdStepProps {
  showPrevious?: () => void;
  showNext?: () => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  details?: IUserDetails;
  error?: IUserDetails;
}
const cardData = CARD_LIST;

export class PtgUiThirdStep extends React.Component<
  IPtgUiThirdStepProps,
  PtgUiMultiStepState
> {
  constructor(props: IPtgUiThirdStepProps) {
    super(props);
    this.state = {
      isDisabled: true,
    };
  }
  override componentDidMount(): void {
    this.updateButtonState();
  }

  override componentDidUpdate(prevProps: IPtgUiThirdStepProps) {
    if (
      prevProps.details !== this.props.details ||
      prevProps.error !== this.props.error
    ) {
      this.updateButtonState();
    }
  }

  updateButtonState = () => {
    const { details, error } = this.props;
    if (details && error) {
      const ButtonDisabled = !(
        details.cardType &&
        details.cardNumber &&
        !error.cardNumber &&
        details.cvc &&
        !error.cvc &&
        details.expiration &&
        details.cardHolder
      );
      this.setState({ isDisabled: ButtonDisabled });
    }
  };

  override render() {
    const { showNext, handleChange, details, error, handleBlur, showPrevious } =
      this.props;
    const { isDisabled } = this.state;
    return (
      <div className="p-2">
        <div className="col-md-12 mb-2">
          <label htmlFor="inputCardType">{'CARD_TYPE'} </label>
          <PtgUiSelect
            name="cardType"
            list={cardData}
            id="inputCardType"
            data-testid="city"
            className={`sel-placeholder w-100 bg_0 ${
              error?.cardType ? 'border-danger' : ''
            }`}
            aria-label="given-name"
            onBlur={handleBlur}
            value={details?.cardType}
            onChange={handleChange}
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-2">
            <label htmlFor="inputCardNumber">{'CARD_NUMBER'} </label>
            <PtgUiInput
              className={`w-100 form-control bg_0 ${
                error?.cardNumber ? 'border-danger' : ''
              }`}
              type="text"
              name="cardNumber"
              id="inputCardNumber"
              value={details?.cardNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="col-md-3 mb-2">
            <label htmlFor="inputCvc">{'CVC'} </label>
            <PtgUiInput
              className={`w-100 form-control bg_0 ${
                error?.cvc ? 'border-danger' : ''
              }`}
              type="text"
              name="cvc"
              id="inputCvc"
              value={details?.cvc}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="col-md-3 mb-2">
            <label htmlFor="inputexpirationDate">{'EXPIRATION_DATE'} </label>
            <PtgUiInput
              className={`w-100 form-control bg_0 ${
                error?.expiration ? 'border-danger' : ''
              }`}
              type="text"
              name="expiration"
              id="inputexpirationDate"
              placeholder="MM/YY"
              value={details?.expiration}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="col-md-12 form-group required mb-2">
          <label htmlFor="inputCardHolderName">{'CARD_HOLDER_NAME'} </label>
          <PtgUiInput
            className={`w-100 form-control bg_0 ${
              error?.cardHolder ? 'border-danger' : ''
            }`}
            type="text"
            name="cardHolder"
            id="inputCardHolderName"
            value={details?.cardHolder}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12 mt-2">
            <PtgUiButton
              className="w-100"
              type="button"
              onClick={showPrevious}
              aria-label="previous"
              data-testid="previous"
            >
              {'PREVIOUS'}
            </PtgUiButton>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 mt-2">
            <PtgUiButton
              className="w-100"
              type="button"
              onClick={showNext}
              disabled={isDisabled}
              aria-label="next"
              data-testid="next"
            >
              {'NEXT'}
            </PtgUiButton>
          </div>
        </div>
      </div>
    );
  }
}
