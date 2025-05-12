import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { PtgUiFirstStep } from './FirstStep';
import { PtgUiCommonStepProps } from '../interfaces/index';

describe('PtgUiFirstStep', () => {
	const mockHandleChange = jest.fn();
	const mockHandleBlur = jest.fn();

	const defaultProps: PtgUiCommonStepProps = {
		handleChange: mockHandleChange,
		handleBlur: mockHandleBlur,
		details: {
			userName: '',
			password: '',
			confirmPassword: '',
		},
		error: {
			userName: '',
			password: '',
			confirmPassword: '',
		},
	};

	it('should render the component correctly', () => {
		render(<PtgUiFirstStep {...defaultProps} />);
		expect(screen.getByLabelText('User Name')).toBeInTheDocument();
		expect(screen.getByLabelText('Password')).toBeInTheDocument();
		expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
	});

	it('should call handleChange when input values are changed', () => {
		render(<PtgUiFirstStep {...defaultProps} />);
		const userNameInput = screen.getByLabelText('User Name');
		fireEvent.change(userNameInput, { target: { value: 'testUser' } });
		expect(mockHandleChange).toHaveBeenCalled();
	});

	it('should call handleBlur when inputs lose focus', () => {
		render(<PtgUiFirstStep {...defaultProps} />);
		const passwordInput = screen.getByLabelText('Password');
		fireEvent.blur(passwordInput);
		expect(mockHandleBlur).toHaveBeenCalled();
	});

	it('should display error messages when errors are present', () => {
		const errorProps = {
			...defaultProps,
			error: {
				userName: 'User name is required',
				password: '',
				confirmPassword: 'Passwords do not match',
			},
		};
		render(<PtgUiFirstStep {...errorProps} />);
		expect(screen.getByText('Passwords do not match')).toBeInTheDocument();
	});

	it('should apply the border-danger class when there are errors', () => {
		const errorProps = {
			...defaultProps,
			error: {
				userName: 'User name is required',
				password: '',
				confirmPassword: '',
			},
		};
		render(<PtgUiFirstStep {...errorProps} />);
		const userNameInput = screen.getByLabelText('User Name');
		expect(userNameInput).toHaveClass('border-danger');
	});
});
