import { Component, ReactNode } from 'react';
import './Stepper.scss';
import { IStep } from '../lib/interfaces/index';
import CheckIcon from '@mui/icons-material/Check';

interface StepperProps {
	children?: ReactNode;
	steps?: IStep[];
	activeStep?: number;
	orientation?: string;
}

export class Stepper extends Component<StepperProps> {
	override render() {
		const { steps, activeStep = 0, orientation = 'vertical' } = this.props;
		return (
			<div className={`stepper-container ${orientation}`}>
				<div className={`stepper ${orientation}`}>
					{steps?.map((step, index) => (
						<div key={step.id} className={`step ${index <= activeStep ? 'active' : ''}`}>
							<div className={`circle ${index <= activeStep ? 'active' : ''} ${orientation} `}>
								{index < activeStep ? <CheckIcon fontSize="small" /> : index + 1}
							</div>
							<div className={`label ${index <= activeStep ? 'active' : ''} ${orientation}`}>{step.label}</div>
							{orientation === 'vertical'
								? index < steps.length - 1 && (
										<div className={`line ${index <= activeStep ? 'active' : ''} ${orientation}`} />
								  )
								: index < steps.length && (
										<div className={`line  ${index <= activeStep ? 'active' : ''} ${orientation}`} />
								  )}
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Stepper;
