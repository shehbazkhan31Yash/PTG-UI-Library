import React from 'react';
import { Stepper } from '../../common/Stepper';
import { PtgUiButton, PtgUiGridColumn, PtgUiRow } from '@ptg-ui/react';
import {IUserDetails, IPtgUiMutliStepProps, IStep } from '../interfaces/index';

interface IPtgUiMultiStepState {
  stepCount: number;
  isDisabled: boolean;
  showNext?: () => void;
}
interface IPtgUiMutliStepFormProps {
  stepperSteps?: IStep[];
  allSteps?: React.ReactElement<IPtgUiMutliStepProps>[];
  error?: IUserDetails;
  details?: IUserDetails;
  resetForm?: () => void;
  submitForm?: () => void;
}

export class PtgUiMultiStep extends React.Component<
  IPtgUiMutliStepFormProps,
  IPtgUiMultiStepState
> {
  constructor(props: IPtgUiMutliStepProps) {
    super(props);
    this.state = {
      stepCount: 0,
      isDisabled: true,
    };
  }
  showNext = () => {
    console.log('shownext')
    this.setState((prevState) => ({
      stepCount: prevState.stepCount + 1
    }))
  }
  showPrevious = () => {
   this.setState((prevState) => ({
     stepCount: prevState.stepCount - 1
   }))
  };
  resetFormDetails = () => {
    this.setState({stepCount: 0 })
    this.props.resetForm?.();
  }
  submitFormDetails = () => {
    this.setState({stepCount: 0})
    this.props.submitForm?.();
  }
  override componentDidMount(): void {
    this.updateButtonState();
  }

  override componentDidUpdate(
    prevProps: IPtgUiMutliStepFormProps,
    prevState: IPtgUiMultiStepState
  ) {
    if (
      prevProps.details !== this.props.details ||
      prevProps.error !== this.props.error ||
      prevState.stepCount !== this.state.stepCount
    ) {
      this.updateButtonState();
    }
  }

  updateButtonState = () => {
    console.log('this', this.state.stepCount);
    const { details, error } = this.props;
    const {stepCount} = this.state;
    if (details && error) {
      let ButtonDisabled = true;
      if (stepCount === 0) {
        ButtonDisabled = !(
          details?.userName?.length > 0 &&
          details?.password?.length > 0 &&
          details?.confirmPassword?.length > 0 &&
          !error?.userName &&
          !error?.password &&
          !error?.confirmPassword
        );
      } else if (stepCount === 1) {
        ButtonDisabled = !(
          details.greeting.length &&
          details.gender.length &&
          details.firstName &&
          details.lastName &&
          details.email &&
          !error.email &&
          details.phone &&
          !error.phone &&
          details.zipCode &&
          !error.zipCode &&
          details.state &&
          details.homeAddress &&
          details.country
        );
      } else if (stepCount === 2) {
        ButtonDisabled = !(
          details.cardType &&
          details.cardNumber &&
          !error.cardNumber &&
          details.cvc &&
          !error.cvc &&
          details.expiration &&
          details.cardHolder
        );
      }
      this.setState({ isDisabled: ButtonDisabled });
    }
  };

  override render() {
    const { stepCount, isDisabled } = this.state;
    const {stepperSteps = []} = this.props;
    const {
      allSteps = [],
      submitForm,
      resetForm,
    } = this.props;
    return (
      <>
        <PtgUiRow>
          <PtgUiGridColumn
            xl={3}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            className={'mr-5'}
          >
            <Stepper
              activeStep={stepCount}
              steps={stepperSteps}
              orientation="vertical"
            />
          </PtgUiGridColumn>
          <PtgUiGridColumn
            xl={8}
            lg={8}
            md={8}
            sm={12}
            xs={12}
            className={'mr-5'}
          >
            {allSteps && allSteps[stepCount]}
            <PtgUiRow>
              <div className="col-md-4 col-sm-12">
                {stepCount !== 0 && (
                  <PtgUiButton
                    text="PREVIOU"
                    textColor="#fff"
                    backgroundColor={'#052982'}
                    width="200px"
                    onClick={this.showPrevious}
                  />
                )}
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                {stepperSteps.length === stepCount + 1 && <PtgUiButton
                  text="RESET"
                  textColor="#fff"
                  backgroundColor={'#052982'}
                  width="200px"
                  onClick={this.resetFormDetails}
                />}
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                {stepperSteps.length !== stepCount + 1 ? (
                  <PtgUiButton
                    text="NEXT"
                    textColor="#fff"
                    backgroundColor={'#052982'}
                    width="200px"
                    onClick={this.showNext}
                    disabled={isDisabled}
                  />
                ) : (
                  <PtgUiButton
                    text="SUBMIT"
                    textColor="#fff"
                    backgroundColor={'#052982'}
                    width="200px"
                    onClick={this.submitFormDetails}
                  />
                )}
              </div>
            </PtgUiRow>
          </PtgUiGridColumn>
        </PtgUiRow>
      </>
    );
  }
}
