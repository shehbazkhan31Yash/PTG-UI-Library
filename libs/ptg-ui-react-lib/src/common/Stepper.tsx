import './Stepper.scss';
import { IStepperProps } from '../lib/interfaces/index';
import classNames from 'classnames';

export function Stepper(props: IStepperProps) {
	const { steps, activeStep = 0, orientation = 'vertical' } = props;
	return (
		<div className={`stepper-container ${orientation}`}>
			<div className={`stepper ${orientation}`}>
				{steps?.map((step, index) => {
					const isActive = index <= activeStep;
					const stepClass = classNames('step', { active: isActive });
					const circleClass = classNames('circle', { active: isActive }, orientation);
					const labelClass = classNames('label', { active: isActive }, orientation);
					const lineClass = classNames('line', { active: isActive }, orientation);
					return (
						<div key={step.id} className={stepClass}>
							<div className={circleClass}>{index < activeStep ? "ToDo" : index + 1}</div>
							<div className={labelClass}>{step.label}</div>
							{index < steps.length - 1 && <div className={lineClass} />}
							{orientation === 'vertical'
								? index < steps.length - 1 && <div className={lineClass} />
								: index < steps.length && <div className={lineClass} />}
						</div>
					);
				})}
			</div>
		</div>
	);
}
