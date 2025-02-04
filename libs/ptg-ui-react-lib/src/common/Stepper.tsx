import React, { Component, ReactNode } from 'react';
import './Stepper.scss';
import { IStep } from '../lib/interfaces/index'


interface StepperProps {
  children?: ReactNode;
  steps?: IStep[]; 
  activeStep?: number; 
  orientation?: string; 
}


export class Stepper extends Component<StepperProps> {
  
  override render() {
    const { steps, activeStep, orientation = 'horizontal' } = this.props;
    return (
      <div className={'stepper-container'}>
        <div className={`stepper ${orientation}`}>
          { steps?.map((step, index) => (
            <div key = {step.id} className={`step ${index === activeStep ? 'active' : ''}`}>
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