import { render, screen, fireEvent } from '@testing-library/react';
import { PtgUiThirdStep } from './ThirdStep';
import { PtgUiCommonStepProps } from '../interfaces/index';
import '@testing-library/jest-dom';

const mockProps: PtgUiCommonStepProps = {
	handleChange: jest.fn(),
	handleBlur: jest.fn(),
	details: {
		cardType: '',
		cardNumber: '',
		cvc: '',
		expiration: '',
		cardHolder: '',
	},
	error: {
		cardType: false,
		cardNumber: false,
		cvc: false,
		expiration: false,
		cardHolder: false,
	},
};

describe('PtgUiThirdStep', () => {
	it('should render all input fields and select dropdown', () => {
		render(<PtgUiThirdStep {...mockProps} />);

		expect(screen.getByLabelText('Card Type')).toBeInTheDocument();
		expect(screen.getByLabelText('Card Number')).toBeInTheDocument();
		expect(screen.getByLabelText('CVC')).toBeInTheDocument();
		expect(screen.getByLabelText('Expiration')).toBeInTheDocument();
		expect(screen.getByLabelText('Card Holder Name')).toBeInTheDocument();
	});

	it('should call handleChange when input values change', () => {
		render(<PtgUiThirdStep {...mockProps} />);

		const cardNumberInput = screen.getByLabelText('Card Number');
		fireEvent.change(cardNumberInput, { target: { value: '1234567890123456' } });
		expect(mockProps.handleChange).toHaveBeenCalled();

		const cvcInput = screen.getByLabelText('CVC');
		fireEvent.change(cvcInput, { target: { value: '123' } });
		expect(mockProps.handleChange).toHaveBeenCalled();

		const expirationInput = screen.getByLabelText('Expiration');
		fireEvent.change(expirationInput, { target: { value: '12/34' } });
		expect(mockProps.handleChange).toHaveBeenCalled();

		const cardHolderInput = screen.getByLabelText('Card Holder Name');
		fireEvent.change(cardHolderInput, { target: { value: 'John Doe' } });
		expect(mockProps.handleChange).toHaveBeenCalled();
	});

	it('should call handleBlur when inputs lose focus', () => {
		render(<PtgUiThirdStep {...mockProps} />);

		const cardNumberInput = screen.getByLabelText('Card Number');
		fireEvent.blur(cardNumberInput);
		expect(mockProps.handleBlur).toHaveBeenCalled();

		const cvcInput = screen.getByLabelText('CVC');
		fireEvent.blur(cvcInput);
		expect(mockProps.handleBlur).toHaveBeenCalled();

		const expirationInput = screen.getByLabelText('Expiration');
		fireEvent.blur(expirationInput);
		expect(mockProps.handleBlur).toHaveBeenCalled();

		const cardHolderInput = screen.getByLabelText('Card Holder Name');
		fireEvent.blur(cardHolderInput);
		expect(mockProps.handleBlur).toHaveBeenCalled();
	});

	it('should apply error class when there are validation errors', () => {
		const errorProps = {
			...mockProps,
			error: {
				cardType: true,
				cardNumber: true,
				cvc: true,
				expiration: true,
				cardHolder: true,
			},
		};

		render(<PtgUiThirdStep {...errorProps} />);

		expect(screen.getByLabelText('Card Type')).toHaveClass('border-danger');
		expect(screen.getByLabelText('Card Number')).toHaveClass('border-danger');
		expect(screen.getByLabelText('CVC')).toHaveClass('border-danger');
		expect(screen.getByLabelText('Expiration')).toHaveClass('border-danger');
		expect(screen.getByLabelText('Card Holder Name')).toHaveClass('border-danger');
	});
});
