import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PtgUiMultiStep } from './MultiStep';
import { IPtgUiMultiStepFormProps } from '../interfaces';

export default {
	title: 'Components/MultiStep',
	component: PtgUiMultiStep,
	argTypes: {
		stepperSteps: {
			control: 'object',
			description: 'Array of steps to be displayed in the stepper',
		},
		allSteps: {
			control: 'object',
			description: 'Array of React components for each step content',
		},
		manageNextStepValidation: {
			action: 'validated',
			description: 'Function to validate the current step before moving to next step',
		},
		resetForm: {
			action: 'resetForm',
			description: 'Function called when reset button is clicked',
		},
		submitForm: {
			action: 'submitForm',
			description: 'Function called when submit button is clicked',
		},
		orientation: {
			control: 'select',
			options: ['horizontal', 'vertical'],
			description: 'Orientation of the stepper component',
		},
	},
} as Meta<typeof PtgUiMultiStep>;

const Template: StoryFn<IPtgUiMultiStepFormProps> = (args) => <PtgUiMultiStep {...args} />;

// Step components for demonstration
const Step1Content = () => (
	<div className="p-3 border rounded">
		<h3>Step 1: Account Info</h3>

		<div className="mb-3">
			<label className="form-label">Email</label>
			<input type="email" className="form-control" placeholder="Enter your email" />
		</div>
		<div className="mb-3">
			<label className="form-label">Password</label>
			<input type="email" className="form-control" placeholder="Enter your email" />
		</div>
		<div className="mb-3">
			<label className="form-label">Confirm Password </label>
			<input type="text" className="form-control" placeholder="Enter your name" />
		</div>
	</div>
);

const Step2Content = () => (
	<div className="p-3 border rounded">
		<h3>Step 2: Personal Information</h3>
		<div className="mb-3">
			<label className="form-label">Greeting</label>
			<input type="text" className="form-control" placeholder="Enter Greeting" />
		</div>
		<div className="mb-3">
			<label className="form-label">Gender</label>
			<input type="text" className="form-control" placeholder="Enter Gender" />
		</div>
		<div className="mb-3">
			<label className="form-label">First Name</label>
			<input type="text" className="form-control" placeholder="Enter First Name" />
		</div>
		<div className="mb-3">
			<label className="form-label">Last Name</label>
			<input type="text" className="form-control" placeholder="Enter Last Name" />
		</div>
		<div className="mb-3">
			<label className="form-label">Email</label>
			<input type="text" className="form-control" placeholder="Enter Email" />
		</div>
		<div className="mb-3">
			<label className="form-label">Phone</label>
			<input type="text" className="form-control" placeholder="Enter Phone" />
		</div>
		<div className="mb-3">
			<label className="form-label">Zip Code</label>
			<input type="text" className="form-control" placeholder="Enter zip code" />
		</div>
		<div className="mb-3">
			<label className="form-label">State</label>
			<input type="text" className="form-control" placeholder="Enter State" />
		</div>
		<div className="mb-3">
			<label className="form-label">Home Address</label>
			<input type="text" className="form-control" placeholder="Enter Home Address" />
		</div>
		<div className="mb-3">
			<label className="form-label">Country</label>
			<input type="text" className="form-control" placeholder="Enter Country" />
		</div>
	</div>
);

const Step3Content = () => (
	<div className="p-3 border rounded">
		<h3>Step 3: Payment nformation</h3>
		<div className="mb-3">
			<label className="form-label">Card Type</label>
			<input type="text" className="form-control" placeholder="Enter Card Type" />
		</div>
		<div className="mb-3">
			<label className="form-label">Card Number</label>
			<input type="text" className="form-control" placeholder="Enter Card Number" />
		</div>
		<div className="mb-3">
			<label className="form-label">CVC</label>
			<input type="text" className="form-control" placeholder="Enter cvc" />
		</div>
		<div className="mb-3">
			<label className="form-label">Expiration</label>
			<input type="text" className="form-control" placeholder="Enter Expiration" />
		</div>
		<div className="mb-3">
			<label className="form-label">Card Holder Name</label>
			<input type="text" className="form-control" placeholder="Enter Card Holder Name" />
		</div>
	</div>
);
const Step4Content = () => (
	<div className="p-3 border rounded">
		<h3>Step 3: Confirm Your nformation</h3>
		<p>Please review your information before submitting.</p>
		<div className="alert alert-info">All fields have been filled out correctly. You can now submit the form.</div>
	</div>
);

// Basic multistep form with horizontal orientation
export const HorizontalMultiStep = Template.bind({});
HorizontalMultiStep.args = {
	stepperSteps: [
		{ id: 1, label: 'Account Info' },
		{ id: 2, label: 'Personal Information' },
		{ id: 3, label: 'Payment Details' },
		{ id: 4, label: 'Confirm Your Details' },
	],
	allSteps: [
		<Step1Content key="step1" />,
		<Step2Content key="step2" />,
		<Step3Content key="step3" />,
		<Step4Content key="step4" />,
	],
	orientation: 'horizontal',
	manageNextStepValidation: (stepIndex) => {
		// This would normally validate the current step
		console.log(`Validating step ${stepIndex}`);
		return false; // Not blocking progression for demo purposes
	},
};

// Multistep form with vertical orientation
export const VerticalMultiStep = Template.bind({});
VerticalMultiStep.args = {
	...HorizontalMultiStep.args,
	orientation: 'vertical',
};
