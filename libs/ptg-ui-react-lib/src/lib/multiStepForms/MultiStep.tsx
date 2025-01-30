import { Step, StepLabel } from '@material-ui/core';
import React from 'react';
import { PtgUiFirstStep } from './FirstStep';
import { Stepper } from '../../common/Stepper';
import { IUserDetails } from '../interfaces/index';
import { PtgUiSecondStep } from './SecondStep';
import { PtgUiThirdStep } from './ThirdStep';
import { PtgUiFinalStep } from './FinalStep';
import { PtgUiGridColumn, PtgUiRow } from '@ptg-ui/react';

interface IPtgUiMultiStepState {
  step: number;
}
interface IPtgUiMutliStepProps {
  error?: IUserDetails;
  details?: IUserDetails;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  resetForm?: () => void;
  submitForm?: () => void;
}

const steps = [
  { label: 'Account Info' },
  { label: 'Personal Information' },
  { label: 'Payment Details' },
  { label: 'Confirm Your Details' },
];

export class PtgUiMultiStep extends React.Component<
  IPtgUiMutliStepProps,
  IPtgUiMultiStepState
> {
  constructor(props: IPtgUiMutliStepProps) {
    super(props);
    this.state = {
      step: 0,
    };
  }

  showNext = () => {
    this.setState((prevState) => ({
      step: prevState.step + 1,
    }));
  };
  showPrevious = () => {
    this.setState((prevState) => ({
      step: prevState.step - 1,
    }));
  };

  resetForms = () => {
    const { resetForm } = this.props;
    this.setState({ step: 0 }, () => {
      resetForm?.();
    });
  };

  submitForms = () => {
    console.log('fun');
    this.setState({ step: 0 }, () => {
      this.props.submitForm?.();
      this.resetForms();
    });

    console.log('submitForms', this.state.step);
  };
  showStep = (step: number) => {
    console.log('step', step);
    const { details, handleChange, error, handleBlur } = this.props;
    switch (step) {
      case 0:
        return (
          <PtgUiFirstStep
            showNext={this.showNext}
            details={details}
            handleChange={handleChange}
            error={error}
            handleBlur={handleBlur}
          />
        );
      case 1:
        return (
          <PtgUiSecondStep
            showPrevious={this.showPrevious}
            showNext={this.showNext}
            details={details}
            handleChange={handleChange}
            error={error}
            handleBlur={handleBlur}
          />
        );
      case 2:
        return (
          <PtgUiThirdStep
            showNext={this.showNext}
            showPrevious={this.showPrevious}
            details={details}
            error={error}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        );
      case 3:
        return (
          <PtgUiFinalStep
            resetForm={this.resetForms}
            details={details}
            showPrevious={this.showPrevious}
            submitForm={this.submitForms}
          />
        );
      default:
        return <PtgUiFirstStep showNext={this.showNext} />;
    }
  };
  override render() {
    const { step } = this.state;
    return (
      <PtgUiRow>
        <PtgUiGridColumn
          xl={3}
          lg={4}
          md={4}
          sm={12}
          xs={12}
          className={'mr-5'}
        >
          <Stepper activeStep={step} steps={steps} orientation="vertical" />
        </PtgUiGridColumn>
        <PtgUiGridColumn
          xl={8}
          lg={8}
          md={8}
          sm={12}
          xs={12}
          className={'mr-5'}
        >
          {this.showStep(step)}
        </PtgUiGridColumn>
      </PtgUiRow>
    );
  }
}
