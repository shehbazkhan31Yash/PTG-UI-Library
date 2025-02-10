import React from 'react';
import { Stepper } from '../../common/Stepper';
import { PtgUiButton } from '../button/button';
import { PtgUiRow } from '../gridRow/GridRow';
import { IPtgUiMutliStepFormProps, IPtgUiMultiStepState } from '../interfaces/index';
import { BACKGROUND_COLOR, COLOR, WIDTH } from '../constants/Constants';

export class PtgUiMultiStep extends React.Component<IPtgUiMutliStepFormProps, IPtgUiMultiStepState> {
	constructor(props: IPtgUiMutliStepFormProps) {
		
    super(props);
		this.state = {
			stepCount: 0,
		};
	}
	showNext = () => {
		const { manageNextStepValidation } = this.props;
		this.setState((prevState) => ({
			stepCount: prevState.stepCount + 1,
		}));
		manageNextStepValidation?.(this.state.stepCount + 1);
	};
	showPrevious = () => {
		const { manageNextStepValidation } = this.props;
		this.setState((prevState) => ({
			stepCount: prevState.stepCount - 1,
		}));
		manageNextStepValidation?.(this.state.stepCount - 1);
	};
	resetFormDetails = () => {
		const { resetForm, manageNextStepValidation } = this.props;
		this.setState({ stepCount: 0 });
		resetForm?.();
		manageNextStepValidation?.(0);
	};
	submitFormDetails = () => {
		const { submitForm, manageNextStepValidation } = this.props;
		this.setState({ stepCount: 0 });
		submitForm?.();
		manageNextStepValidation?.(0);
	};

	override render() {
		const { stepCount } = this.state;
		const { stepperSteps = [], allSteps = [], manageNextStepValidation, orientation } = this.props;
		const flag = manageNextStepValidation?.(stepCount);
		return (
			<div className={`'row p-2 ${orientation === 'horizontal' ? 'flex-column' : 'd-flex'} `}>
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
									onClick={this.showPrevious}
								/>
							)}
						</div>
						<div className="col-md-4 col-sm-12 col-xs-12 d-flex justify-content-around">
							{stepperSteps.length === stepCount + 1 && (
								<PtgUiButton
									text="Reset"
									textColor={COLOR}
									backgroundColor={BACKGROUND_COLOR}
									width={WIDTH}
									onClick={this.resetFormDetails}
								/>
							)}
						</div>
						<div className="col-md-4 col-sm-12 col-xs-12 d-flex justify-content-end">
							<PtgUiButton
								text={stepperSteps.length !== stepCount + 1 ? 'Next' : 'Submit'}
								textColor={COLOR}
								backgroundColor={BACKGROUND_COLOR}
								width={WIDTH}
								onClick={stepperSteps.length !== stepCount + 1 ? this.showNext : this.submitFormDetails}
								disabled={stepperSteps.length !== stepCount + 1 ? flag : false}
							/>
						</div>
					</PtgUiRow>
				</div>
			</div>
		);
	}
}
