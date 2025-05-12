import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PtgUiSecondStep } from './SecondStep';
import { SALUTATION_LIST } from '../mock/mock';

describe('PtgUiSecondStep Component', () => {
	const mockHandleChange = jest.fn();
	const mockHandleBlur = jest.fn();
	const mockDetails = {
		greeting: '',
		gender: '',
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		zipCode: '',
		state: '',
		homeAddress: '',
		country: '',
	};
	const mockError = {};

	it('should render all input fields and dropdowns', () => {
		render(
			<PtgUiSecondStep
				handleChange={mockHandleChange}
				handleBlur={mockHandleBlur}
				details={mockDetails}
				error={mockError}
			/>
		);

		// Check if all labels are rendered
		expect(screen.getByLabelText('Greeting')).toBeInTheDocument();
		expect(screen.getByLabelText('Gender')).toBeInTheDocument();
		expect(screen.getByLabelText('First Name')).toBeInTheDocument();
		expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
		expect(screen.getByLabelText('Email')).toBeInTheDocument();
		expect(screen.getByLabelText('Phone')).toBeInTheDocument();
		expect(screen.getByLabelText('Zip Code')).toBeInTheDocument();
		expect(screen.getByLabelText('State')).toBeInTheDocument();
		expect(screen.getByLabelText('Home Address')).toBeInTheDocument();
		expect(screen.getByLabelText('Country')).toBeInTheDocument();
	});

	it('should call handleChange on input change', () => {
		render(
			<PtgUiSecondStep
				handleChange={mockHandleChange}
				handleBlur={mockHandleBlur}
				details={mockDetails}
				error={mockError}
			/>
		);

		const firstNameInput = screen.getByLabelText('First Name');
		fireEvent.change(firstNameInput, { target: { value: 'John' } });
		expect(mockHandleChange).toHaveBeenCalled();
	});

	it('should call handleBlur on input blur', () => {
		render(
			<PtgUiSecondStep
				handleChange={mockHandleChange}
				handleBlur={mockHandleBlur}
				details={mockDetails}
				error={mockError}
			/>
		);

		const emailInput = screen.getByLabelText('Email');
		fireEvent.blur(emailInput);
		expect(mockHandleBlur).toHaveBeenCalled();
	});

	it('should display error class when error is present', () => {
		const errorDetails = { firstName: 'First name is required' };
		render(
			<PtgUiSecondStep
				handleChange={mockHandleChange}
				handleBlur={mockHandleBlur}
				details={mockDetails}
				error={errorDetails}
			/>
		);

		const firstNameInput = screen.getByLabelText('First Name');
		expect(firstNameInput).toHaveClass('border-danger');
	});

	it('should render dropdown options correctly', () => {
		render(
			<PtgUiSecondStep
				handleChange={mockHandleChange}
				handleBlur={mockHandleBlur}
				details={mockDetails}
				error={mockError}
			/>
		);

		const greetingSelect = screen.getByLabelText('Greeting');
		fireEvent.change(greetingSelect, { target: { value: SALUTATION_LIST[0] } });
		expect(mockHandleChange).toHaveBeenCalled();
	});
});
