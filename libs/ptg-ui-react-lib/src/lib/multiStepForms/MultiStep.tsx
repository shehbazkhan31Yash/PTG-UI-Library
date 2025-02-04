import React from 'react';
import { Stepper } from '../../common/Stepper';
import { PtgUiButton, PtgUiGridColumn, PtgUiRow } from '@ptg-ui/react';
import { IPtgUiMutliStepFormProps, IPtgUiMultiStepState } from '../interfaces/index';


export class PtgUiMultiStep extends React.Component<
  IPtgUiMutliStepFormProps,
  IPtgUiMultiStepState
> {
  constructor(props: IPtgUiMutliStepFormProps) {
    super(props);
    this.state = {
      stepCount: 0
    };
  }
  showNext = () => {
    const { manageNextStepValidation } = this.props;
    this.setState((prevState) => ({
      stepCount: prevState.stepCount + 1
    }))
    manageNextStepValidation?.(this.state.stepCount + 1)
  }
  showPrevious = () => {
    const { manageNextStepValidation } = this.props;
   this.setState((prevState) => ({
     stepCount: prevState.stepCount - 1
   }))
   manageNextStepValidation?.(this.state.stepCount -1)
  };
  resetFormDetails = () => {
    const { resetForm, manageNextStepValidation} = this.props;
    this.setState({stepCount: 0 })
    resetForm?.();
    manageNextStepValidation?.(0)
  }
  submitFormDetails = () => {
    const { submitForm, manageNextStepValidation} = this.props;
    this.setState({stepCount: 0})
    submitForm?.();
    manageNextStepValidation?.(0)
  }
  
  override render() {
    const { stepCount} = this.state;
    const {stepperSteps = []} = this.props;
    const {
      allSteps = [],
      manageNextStepValidation,
    } = this.props;
    const flag = manageNextStepValidation?.(stepCount)
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
            <PtgUiRow className='p-2'>
              <div className="col-md-4 col-sm-12">
                {stepCount !== 0 && (
                  <PtgUiButton
                    text="Previous"
                    textColor="#fff"
                    backgroundColor={'#052982'}
                    width="200px"
                    onClick={this.showPrevious}
                  />
                )}
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12 d-flex justify-content-around">
                {stepperSteps.length === stepCount + 1 && <PtgUiButton
                  text="Reset"
                  textColor="#fff"
                  backgroundColor={'#052982'}
                  width="200px"
                  onClick={this.resetFormDetails}
                />}
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12 d-flex justify-content-end">
                  <PtgUiButton
                    text={stepperSteps.length !== stepCount + 1 ? "Next" : "Submit"}
                    textColor="#fff"
                    backgroundColor={'#052982'}
                    width="200px"
                    onClick={stepperSteps.length !== stepCount + 1 ? this.showNext : this.submitFormDetails}
                    disabled={stepperSteps.length !== stepCount + 1 ? flag : false}
                  />
              </div>
            </PtgUiRow>
          </PtgUiGridColumn>
        </PtgUiRow>
      </>
    );
  }
}
