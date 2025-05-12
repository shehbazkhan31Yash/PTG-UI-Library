import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { PtgUiMultiStep } from './MultiStep';

jest.mock('../../common/Stepper', () => ({
	Stepper: jest.fn(() => <div data-testid="stepper" />),
}));

jest.mock('../button/button', () => ({
	PtgUiButton: jest.fn(({ text, onClick }) => (
		<button onClick={onClick} data-testid={text}>
			{text}
		</button>
	)),
}));

jest.mock('../gridRow/GridRow', () => ({
	PtgUiRow: jest.fn(({ children }) => <div data-testid="row">{children}</div>),
}));

describe('PtgUiMultiStep', () => {
	const stepperSteps = ['Step 1', 'Step 2', 'Step 3'];
	const allSteps = [
		<div key="1">Step 1 Content</div>,
		<div key="2">Step 2 Content</div>,
		<div key="3">Step 3 Content</div>,
	];
	const mockManageNextStepValidation = jest.fn();
	const mockResetForm = jest.fn();
	const mockSubmitForm = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should render the component with initial step', () => {
		render(
			<PtgUiMultiStep
				stepperSteps={stepperSteps}
				allSteps={allSteps}
				manageNextStepValidation={mockManageNextStepValidation}
				orientation="horizontal"
				resetForm={mockResetForm}
				submitForm={mockSubmitForm}
			/>
		);

		expect(screen.getByTestId('stepper')).toBeInTheDocument();
		expect(screen.getByText('Step 1 Content')).toBeInTheDocument();
		expect(screen.getByTestId('Next')).toBeInTheDocument();
	});

	it('should navigate to the next step when "Next" button is clicked', () => {
		render(
			<PtgUiMultiStep
				stepperSteps={stepperSteps}
				allSteps={allSteps}
				manageNextStepValidation={mockManageNextStepValidation}
				orientation="horizontal"
				resetForm={mockResetForm}
				submitForm={mockSubmitForm}
			/>
		);

		fireEvent.click(screen.getByTestId('Next'));
		expect(mockManageNextStepValidation).toHaveBeenCalledWith(1);
		expect(screen.getByText('Step 2 Content')).toBeInTheDocument();
	});

	it('should navigate to the previous step when "Previous" button is clicked', () => {
		render(
			<PtgUiMultiStep
				stepperSteps={stepperSteps}
				allSteps={allSteps}
				manageNextStepValidation={mockManageNextStepValidation}
				orientation="horizontal"
				resetForm={mockResetForm}
				submitForm={mockSubmitForm}
			/>
		);

		fireEvent.click(screen.getByTestId('Next'));
		fireEvent.click(screen.getByTestId('Previous'));
		expect(mockManageNextStepValidation).toHaveBeenCalledWith(0);
		expect(screen.getByText('Step 1 Content')).toBeInTheDocument();
	});

	it('should reset the form when "Reset" button is clicked', () => {
		render(
			<PtgUiMultiStep
				stepperSteps={stepperSteps}
				allSteps={allSteps}
				manageNextStepValidation={mockManageNextStepValidation}
				orientation="horizontal"
				resetForm={mockResetForm}
				submitForm={mockSubmitForm}
			/>
		);

		fireEvent.click(screen.getByTestId('Next'));
		fireEvent.click(screen.getByTestId('Next'));
		fireEvent.click(screen.getByTestId('Reset'));
		expect(mockResetForm).toHaveBeenCalled();
		expect(mockManageNextStepValidation).toHaveBeenCalledWith(0);
		expect(screen.getByText('Step 1 Content')).toBeInTheDocument();
	});

	it('should submit the form when "Submit" button is clicked', () => {
		render(
			<PtgUiMultiStep
				stepperSteps={stepperSteps}
				allSteps={allSteps}
				manageNextStepValidation={mockManageNextStepValidation}
				orientation="horizontal"
				resetForm={mockResetForm}
				submitForm={mockSubmitForm}
			/>
		);

		fireEvent.click(screen.getByTestId('Next'));
		fireEvent.click(screen.getByTestId('Next'));
		fireEvent.click(screen.getByTestId('Submit'));
		expect(mockSubmitForm).toHaveBeenCalled();
		expect(mockManageNextStepValidation).toHaveBeenCalledWith(0);
		expect(screen.getByText('Step 1 Content')).toBeInTheDocument();
	});
});
