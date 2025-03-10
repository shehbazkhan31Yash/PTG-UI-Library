import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { PtgUIForgotPassword } from '../ForgotPassword/forgotPassword';
import { PtgUiButton } from '../../button/button';
import PtgUiInput from '../../input/input';
import { PtgUiLoginProps } from '../../interfaces';
import { MessageDisplay } from '../Common/common';

/**
 * Function to determine the class name for the input field.
 *
 * @param {boolean} isValid - A flag indicating whether the input is valid.
 * @returns {string} The class name string for the input field.
 */
const getInputClassName = (isValid) => {
	return `w-100 form-control bg_0 ${!isValid ? 'border-danger' : ''}`;
};

/**
 * Reusable input field component.
 *
 * @param {Object} props - The properties for the InputField component.
 * @param {string} props.type - The type of the input (e.g., email, password).
 * @param {string} props.id - The unique identifier for the input field.
 * @param {string} props.value - The current value of the input field.
 * @param {function} props.onChange - The function to handle changes to the input field.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {boolean} props.isValid - A flag indicating whether the input is valid.
 * @returns {JSX.Element} The rendered input field component.
 */
const InputField = ({ type, id, value, onChange, placeholder, isValid }) => (
	<div className="userid flex-nowrap">
		<PtgUiInput
			type={type}
			id={id}
			value={value}
			onChange={onChange}
			className={getInputClassName(isValid)}
			name={id}
			placeholder={placeholder}
		/>
	</div>
);

/**
 * Component for rendering the login form.
 *
 * @component
 * @param {PtgUiLoginProps} props - The properties for the login component.
 * @returns {JSX.Element} The rendered login form component.
 */
export const PtgUiLogin: React.FC<PtgUiLoginProps> = ({
	emailLabel,
	passwordLabel,
	emailPlaceholder,
	passwordPlaceholder,
	loginButtonName,
	signupMsg,
	signupButtonName,
	msalButtonName,
	forgotPasswordLabel,
	imgPath,
	handleChange,
	user,
	emailType = 'email',
	passwordType = 'password',
	isEmailValid,
	onLoginClick,
	onMsalClick,
	isForgotPassword,
	onForgotPasswordSubmit,
	getForgetEmail,
	errorMessage,
	successMessage,
}) => {
	return (
		<div className="login-wrapper container-fluid p-0 d-flex justify-content-center">
			<div className="login-container">
				<div className="login-form-wrapper">
					{/* Display error and success messages */}
					<MessageDisplay errorMessage={errorMessage} successMessage={successMessage} />
					<div className="form-group">
						{/* Logo for the login form */}
						<div className="login-logo text-center mb-3">
							<img alt="Login Logo" className="login-logo" src={imgPath} />
						</div>
					</div>
					<form className="form-login">
						<div className="login-form">
							<div className="form-group mb-4 required">
								{/* Email label */}
								<label htmlFor="inputEmail">{emailLabel}</label>
								{/* Email input field */}
								<InputField
									type={emailType}
									id="inputEmail"
									value={user?.email}
									onChange={handleChange}
									placeholder={emailPlaceholder}
									isValid={isEmailValid}
								/>
							</div>
							<div className="form-group mb-4 required">
								{/* Password label */}
								<label htmlFor="inputPassword">{passwordLabel}</label>
								<div className="forgot-password float-end">
									{/* Render forgot password component if applicable */}
									{isForgotPassword && (
										<PtgUIForgotPassword
											onForgotPasswordSubmit={onForgotPasswordSubmit}
											fPasswordEmail={getForgetEmail}
											forgotPasswordLabel={forgotPasswordLabel}
										/>
									)}
								</div>
								{/* Password input field */}
								<InputField
									type={passwordType}
									id="inputPassword"
									value={user?.password}
									onChange={handleChange}
									placeholder={passwordPlaceholder}
									isValid={true} // Placeholder for future validation logic
								/>
							</div>
						</div>
						<div className="new_label text-center mb-3">
							{/* Sign-up prompt with link */}
							<label>
								{signupMsg}{' '}
								<Link to="/auth-signup" className="signup-btn">
									{signupButtonName}
								</Link>
							</label>
						</div>
						{/* Login button */}
						<PtgUiButton
							className="w-100"
							disabled={!user?.email || !user?.password || !isEmailValid}
							data-testid="login"
							width="100%"
							border={'1px solid #000'}
							backgroundColor="#ddd"
							onClick={onLoginClick}
						>
							{loginButtonName}
						</PtgUiButton>
						<p className="text-center mx-3 mb-0">OR</p>
						{/* MSAL button for alternative login method */}
						<PtgUiButton
							className="w-100"
							width="100%"
							border={'1px solid #000'}
							backgroundColor="#ddd"
							onClick={onMsalClick}
						>
							{msalButtonName}
						</PtgUiButton>
					</form>
				</div>
			</div>
		</div>
	);
};
