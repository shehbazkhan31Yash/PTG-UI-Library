import React, { useState } from 'react';
import { Stepper } from '../../common/Stepper';
import { PtgUiButton } from '../button/button';
import { PtgUiRow } from '../gridRow/GridRow';
import { IPtgUiMultiStepFormProps } from '../interfaces/index';
import { BACKGROUND_COLOR, COLOR, WIDTH } from '../constants/Constants';

export const PtgUiMultiStep: React.FC<IPtgUiMultiStepFormProps> = ({
	stepperSteps = [],
	allSteps = [],
	manageNextStepValidation,
	orientation,
	resetForm,
	submitForm,
}) => {
	const [stepCount, setStepCount] = useState(0);

	const showNext = () => {
		setStepCount((prevStepCount) => {
			const newStepCount = prevStepCount + 1;
			manageNextStepValidation?.(newStepCount);
			return newStepCount;
		});
	};

	const showPrevious = () => {
		setStepCount((prevStepCount) => {
			const newStepCount = prevStepCount - 1;
			manageNextStepValidation?.(newStepCount);
			return newStepCount;
		});
	};

	const resetFormDetails = () => {
		setStepCount(0);
		resetForm?.();
		manageNextStepValidation?.(0);
	};

	const submitFormDetails = () => {
		setStepCount(0);
		submitForm?.();
		manageNextStepValidation?.(0);
	};

	const flag = manageNextStepValidation?.(stepCount);

	return (
		<div className={`row p-2 ${orientation === 'horizontal' ? 'flex-column' : 'd-flex'}`}>
			<div className="col-md-4">
				<Stepper activeStep={stepCount} steps={stepperSteps} orientation={orientation} />
			</div>
			<div className="col-md-7">
				{allSteps && allSteps[stepCount]}
				<PtgUiRow className="p-2">
					<div className="col-md-4 col-sm-12">
						{stepCount !== 0 && (
							<PtgUiButton
								text="Previous"
								textColor={COLOR}
								backgroundColor={BACKGROUND_COLOR}
								width={WIDTH}
								onClick={showPrevious}
							/>
						)}
					</div>
					<div className="col-md-4 col-sm-12 col-xs-12">
						{stepperSteps.length === stepCount + 1 && (
							<PtgUiButton
								text="Reset"
								textColor={COLOR}
								backgroundColor={BACKGROUND_COLOR}
								width={WIDTH}
								onClick={resetFormDetails}
							/>
						)}
					</div>
					<div className="col-md-4 col-sm-12 col-xs-12 d-flex justify-content-end">
						<PtgUiButton
							text={stepperSteps.length !== stepCount + 1 ? 'Next' : 'Submit'}
							textColor={COLOR}
							backgroundColor={BACKGROUND_COLOR}
							width={WIDTH}
							onClick={stepperSteps.length !== stepCount + 1 ? showNext : submitFormDetails}
							disabled={stepperSteps.length !== stepCount + 1 ? flag : false}
						/>
					</div>
				</PtgUiRow>
			</div>
		</div>
	);
};
