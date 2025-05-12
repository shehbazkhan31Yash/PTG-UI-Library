import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PtgUiFinalStep } from './FinalStep';
import { PtgUiCommonStepProps } from '../interfaces/index';

describe('PtgUiFinalStep', () => {
	const mockDetails: PtgUiCommonStepProps['details'] = {
		userName: 'johndoe',
		greeting: 'Mr.',
		firstName: 'John',
		lastName: 'Doe',
		gender: 'Male',
		email: 'johndoe@example.com',
		phone: '1234567890',
		cardType: 'Visa',
		cardNumber: '4111111111111111',
		homeAddress: '123 Main St',
		state: 'California',
		zipCode: '90001',
		country: 'USA',
		password: 'password123',
		confirmPassword: 'password123',
		cvc: '123',
		expiration: '12/25',
		cardHolder: 'John Doe',
	};

	it('should render the component with all user details', () => {
		render(<PtgUiFinalStep details={mockDetails} />);

		expect(screen.getByText('Confirm Details')).toBeInTheDocument();
		expect(screen.getByText('User Name')).toBeInTheDocument();
		expect(screen.getByText('johndoe')).toBeInTheDocument();
		expect(screen.getByText('Name')).toBeInTheDocument();
		expect(screen.getByText('Mr. John Doe')).toBeInTheDocument();
		expect(screen.getByText('Gender')).toBeInTheDocument();
		expect(screen.getByText('Male')).toBeInTheDocument();
		expect(screen.getByText('Email')).toBeInTheDocument();
		expect(screen.getByText('johndoe@example.com')).toBeInTheDocument();
		expect(screen.getByText('Phone')).toBeInTheDocument();
		expect(screen.getByText('1234567890')).toBeInTheDocument();
		expect(screen.getByText('Card Type')).toBeInTheDocument();
		expect(screen.getByText('Visa')).toBeInTheDocument();
		expect(screen.getByText('Card Number')).toBeInTheDocument();
		expect(screen.getByText('4111111111111111')).toBeInTheDocument();
		expect(screen.getByText('Adresse')).toBeInTheDocument();
		expect(screen.getByText(/123 Main St,California,90001\s*USA/)).toBeInTheDocument();
	});
});
