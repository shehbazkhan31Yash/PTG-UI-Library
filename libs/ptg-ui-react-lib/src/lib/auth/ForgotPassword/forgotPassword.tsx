import React, { useState } from 'react';
import './forgotPassword.scss';
import PtgUiButton from '../../button/button';
import PtgUiInput from '../../input/input';
import { PtgUiModal } from '../../modal/modal';
import { EMAIL_REGEX, FORGOT_PASSWORD_BTN_COLOR, MODAL_SIZE_LARGE } from '../../constants/Constants';
import { IForgotPassword } from '../../interfaces';

// Destructure button color constants for easier access
const { FORGOT_BTN_TEXT, FORGOT_BTN_BACKGROUND, FORGOT_BTN_BACKGROUND_GRAY } = FORGOT_PASSWORD_BTN_COLOR;

/**
 * PtgUIForgotPassword component allows users to request a password reset.
 * 
 * @param {Object} props - The component props
 * @param {function} props.onForgotPasswordSubmit - Function to handle the forgot password submission
 * @param {function} props.fPasswordEmail - Function to handle the email input change
 * @param {string} props.forgotPasswordLabel - Label for the forgot password link
 */
export const PtgUIForgotPassword: React.FC<IForgotPassword> = ({ onForgotPasswordSubmit, fPasswordEmail, forgotPasswordLabel }) => {

	const [values, setValues] = useState({
		show: false,
		email: '',
		btnDisable: true,
		showMessage: { show: false, type: '', message: '' },
	});

	const [formErr, setFormErr] = useState({ email: false });

	const handleClose = () => {
		setValues((prevValues) => ({
			...prevValues,
			show: false,
		}));
		setFormErr({ email: false });
	};

	const handleShow = () => {
		setValues({
			show: true,
			email: '',
			btnDisable: true,
			showMessage: { show: false, type: '', message: '' },
		});
		setFormErr({ email: false });
	};

	/**
	 * Handles changes to the input fields and validates the input.
	 * 
	 * @param {React.ChangeEvent<HTMLInputElement>} event - The change event from the input
	 */
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
		validate(name, value);
	};

	/**
	 * Validates the email format using a regular expression.
	 * 
	 * @param {string} value - The email value to validate
	 * @returns {boolean} - True if the email is valid, false otherwise
	 */
	const isEmailValid = (value: string): boolean => EMAIL_REGEX.test(value);

	/**
	 * Determines if the submit button should be disabled based on input validity.
	 * 
	 * @param {boolean} isInvalid - Indicates if the input is invalid
	 * @param {string} value - The current input value
	 * @returns {boolean} - True if the button should be disabled, false otherwise
	 */
	const shouldDisableButton = (isInvalid: boolean, value: string): boolean => isInvalid || value === '';

	/**
	 * Updates the state for button disable status and form errors.
	 * 
	 * @param {string} fieldName - The name of the field being validated
	 * @param {boolean} isInvalid - Indicates if the field is invalid
	 * @param {string} value - The current value of the field
	 */
	const updateState = (fieldName: string, isInvalid: boolean, value: string) => {
		const btnDisable = shouldDisableButton(isInvalid, value);

		setValues((prevValues) => ({
			...prevValues,
			btnDisable,
		}));

		setFormErr((prevErr) => ({
			...prevErr,
			[fieldName]: isInvalid,
		}));

		if (fieldName === 'email') {
			fPasswordEmail?.(value);
		}
	};

	/**
	 * Validates the input fields based on their names and values.
	 * 
	 * @param {string} fieldName - The name of the field being validated
	 * @param {string} value - The current value of the field
	 */
	const validate = (fieldName: string, value: string) => {
		let isInvalid = false;

		if (fieldName === 'email') {
			isInvalid = !isEmailValid(value);
		}

		updateState(fieldName, isInvalid, value);
	};

	/**
	 * Generates the class name for the email input field based on validation state.
	 * 
	 * @returns {string} - The class name for the input field
	 */
	const getInputClassName = () => `w-100 form-control bg_0 ${formErr.email ? 'border-danger' : ''}`;

	return (
		<div>
			<a className="forgot-password float-end" onClick={handleShow} id="linkForgotPassword" href='#'>
				{`${forgotPasswordLabel}?`}
			</a>
			<PtgUiModal isOpen={values.show} modalSize={MODAL_SIZE_LARGE} backdropClick={true} onModalClose={handleClose}>
				<div className="forgot-wrapper container-fluid p-0 d-flex justify-content-center align-items-center">
					<div className="forgot-container">
						<div className="forgot-form-wrapper">
							<div className="form-group">
								<div className="text-center mb-3">
									<h3>Forgot Password</h3>
								</div>
							</div>
							<div className="forgot-form">
								<div className="form-group required mb-4">
									<label htmlFor="inputEmail">Email</label>
									<PtgUiInput
										type="email"
										className={getInputClassName()}
										name="email"
										id="email"
										placeholder="Enter Your Email"
										onChange={handleChange}
										value={values.email}
									/>
								</div>
								<div className="row">
									<div className="col-9 col-lg-8 col-md-8 col-sm-9 col-xs-9">
										<PtgUiButton
											data-testid="handleSubmit"
											textColor={FORGOT_BTN_TEXT}
											backgroundColor={FORGOT_BTN_BACKGROUND}
											text="Forgot Password"
											onClick={onForgotPasswordSubmit}
											disabled={values.btnDisable}
										/>
									</div>
									<div className="col-3 col-lg-4 col-md-4 col-sm-3 col-xs-3 text-md-end">
										<PtgUiButton
											data-testid="handleClose"
											onClick={handleClose}
											textColor={FORGOT_BTN_TEXT}
											backgroundColor={FORGOT_BTN_BACKGROUND_GRAY}
											text="Cancel"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</PtgUiModal>
		</div>
	);
};