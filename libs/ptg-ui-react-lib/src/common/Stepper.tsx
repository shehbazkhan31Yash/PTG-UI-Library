import React, { Component, ReactNode } from 'react';
import './Stepper.scss';


interface IStep {
  label: string;
}

interface StepperProps {
  children?: ReactNode;
  steps?: IStep[]; 
  activeStep?: number; 
  orientation?: string; 
  onStepChange?: (step: number) => void; 
}

// interface StepperState {}

export class Stepper extends Component<StepperProps> {
    constructor(props: StepperProps) {
        super(props);
        this.state = {};
      } 

  override render() {
    const { steps, activeStep, orientation = 'horizontal' } = this.props;
    return (
      <div className={'stepper-container'}>
        <div className={`stepper ${orientation}`}>
          { steps?.map((step, index) => (
            <div className={`step ${index === activeStep ? 'active' : ''}`}>
                <div className={`circle ${index === activeStep ? 'active' : ''}`}>{index + 1}</div>
                <div className={`label ${index === activeStep ? 'active' : ''}`}>{step.label}</div>
                {index < steps.length - 1 && <div className={`line ${orientation}`} />}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Stepper;