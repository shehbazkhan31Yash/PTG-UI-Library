import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import { PtgUiButton } from '../../button/button';
import PtgUiCalendar from '../../calendar/calendar';
import PtgUiCheckbox from '../../checks/checks';
import PtgUiInput from '../../input/input';
import PtgUiRadio from '../../radio/radio';
import PtgUiSelect from '../../select/select';
import { IFormGroupProps, PtgUiSignupProps } from '../../interfaces';
import { classNames, MessageDisplay } from '../Common/common';

/**
 * FormGroup component to render a form group with a label and optional error styling.
 *
 * @param {Object} props - The properties for the FormGroup component.
 * @param {string} props.label - The label text for the form group.
 * @param {boolean} props.required - A flag indicating whether field is required or not .
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the form group.
 * @returns {JSX.Element} The rendered form group component.
 */
const FormGroup: React.FC<IFormGroupProps> = ({ label = '', required = false, children }) => {
	if (!label) {
		return children as React.ReactElement;
	}
	return (
		<div className={`${required ? 'form-group required mb-2' : ''}`}>
			<label>{label}</label>
			{children}
		</div>
	);
};

/**
 * Component to render the signup form.
 *
 * @param {Object} props - The properties for the PtgUiSignup component.
 * @param {Object} props.user - The user data.
 * @param {Object} props.formErr - The form error data.
 * @param {boolean} props.selectedCheck - The state of the checkbox.
 * @param {Date} props.date - The selected date.
 * @param {Function} props.handleChange - The function to handle input changes.
 * @param {Function} props.handleDateChange - The function to handle date changes.
 * @param {Function} props.handleCheckChange - The function to handle checkbox changes.
 * @param {Function} props.onSubmit - The function to handle form submission.
 * @param {string} props.errorMessage - The error message to display.
 * @param {string} props.successMessage - The success message to display.
 * @param {Array} props.cityList - The list of cities.
 * @param {Array} props.genderList - The list of genders.
 * @returns {JSX.Element} The rendered signup form component.
 */
export const PtgUiSignup: React.FC<PtgUiSignupProps> = ({
	user,
	formErr,
	selectedCheck,
	date,
	handleChange,
	handleDateChange,
	handleCheckChange,
	onSubmit,
	errorMessage,
	successMessage,
	cityList,
	genderList,
}) => {
	return (
		<div className="signup-wrapper container-fluid p-0 d-flex justify-content-center align-items-center">
			<div className="signup-container">
				<div className="signup-form-wrapper">
					<div className="form-group">
						<MessageDisplay errorMessage={errorMessage} successMessage={successMessage} />
					</div>
					<div className="text-center mb-3">
						<h3>REGISTRATION</h3>
					</div>
					<form className="form-login">
						<div className="login-form">
							<div className="form-container">
								<div className="row">
									<div className="col-sm-6">
										<FormGroup label="User  Name" required={true}>
											<PtgUiInput
												type="text"
												id="inputUsername"
												value={user?.username}
												onChange={handleChange}
												className={classNames('w-100 form-control bg_0', formErr?.username && 'border-danger')}
												name="username"
												placeholder="Enter User Name"
											/>
										</FormGroup>
									</div>
									<div className="col-sm-6">
										<FormGroup label="Email" required={true}>
											<PtgUiInput
												type="email"
												id="inputEmail"
												value={user?.email}
												onChange={handleChange}
												className={classNames('w-100 form-control bg_0', formErr?.email && 'border-danger')}
												name="email"
												placeholder="Enter Your Email"
											/>
										</FormGroup>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-6">
										<FormGroup label="DOB" required={true}>
											<PtgUiCalendar
												selected={date}
												className="form-control w-100"
												onChange={handleDateChange}
												startDate={null}
												endDate={new Date()}
											/>
										</FormGroup>
									</div>
									<div className="col-sm-6">
										<FormGroup label="City" required={true}>
											<PtgUiSelect
												name="city"
												id="city"
												list={cityList || []}
												className={classNames('sel-placeholder w-100', formErr?.city && 'border-danger')}
												onChange={handleChange}
												value={user?.city}
											/>
										</FormGroup>
									</div>
									<div className="col-12">
										<FormGroup label="Gender" required={true}>
											<PtgUiRadio
												name="gender"
												onChange={handleChange}
												id="inputGender"
												list={genderList || []}
												value={user?.gender}
											/>
										</FormGroup>
									</div>
									<div className="col-12">
										<FormGroup label="Password" required={true}>
											<PtgUiInput
												type="password"
												onChange={handleChange}
												value={user?.password}
												className={classNames('w-100 form-control bg_0', formErr?.password && 'border-danger')}
												id="password"
												name="password"
												placeholder="Enter Password"
											/>
										</FormGroup>
										<FormGroup label="Confirm Password" required={true}>
											<PtgUiInput
												type="password"
												onChange={handleChange}
												value={user?.confirmPassword}
												className={classNames('w-100 form-control bg_0', formErr?.confirmPassword && 'border-danger')}
												id="confirmPassword"
												name="confirmPassword"
												placeholder="Enter Confirm Password"
											/>
										</FormGroup>
									</div>
									<div className="mb-2 pwd-warning">
										Password must be at least 8 characters, including uppercase letters, lowercase letters, numbers, and
										special characters.
									</div>
									<div className="col-12">
										<FormGroup>
											<PtgUiCheckbox
												label="I hereby declare that all the information provided is true to my knowledge"
												htmlFor="confirm"
												checked={selectedCheck}
												onChange={handleCheckChange}
												className="form-check-input"
												name="confirm-registration"
												id="confirm"
												aria-label="confirm"
											/>
										</FormGroup>
									</div>
								</div>
								<div className="new_label text-center mt-3 mb-2">
									<label>
										If you already have an account please click on{' '}
										<Link to="/auth-login" className="signup-btn">
											LOG IN
										</Link>
										.
									</label>
								</div>
								<PtgUiButton
									text="Submit"
									className="w-100"
									type="button"
									disabled={user?.disable}
									data-testid="register"
									textColor="#000000"
									border="1px solid #000"
									backgroundColor="#ddd"
									width="100%"
									onClick={onSubmit}
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
