/**
 * @since Oct 2024
 * @author Manish Patidar
 * @desc Reusable Signup Component
 *
 */
import React from 'react';
import './signup.scss';
import { Link } from 'react-router-dom';
import { CITY_LIST, GENDER_LIST } from './mocks';
import PtgUiButton from '../../button/button';
import PtgUiCalendar from '../../calendar/calendar';
import PtgUiCheckbox from '../../checks/checks';
import PtgUiInput from '../../input/input';
import PtgUiRadio from '../../radio/radio';
import PtgUiSelect from '../../select/select';
import PtgUiAlert from '../../alert/alert';
import { PtgUiSignupProps } from '../../interfaces';

export class PtgUiSignup extends React.Component<PtgUiSignupProps> {
	constructor(props: PtgUiSignupProps) {
		super(props);
	}

	override render() {
		const {
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
		} = this.props;

		return (
			<div className="signup-wrapper container-fluid p-0 d-flex justify-content-center align-items-center">
				<div className="signup-container">
					<div className="signup-form-wrapper">
						<div className="form-group">
							{errorMessage && <PtgUiAlert type={'danger'} message={errorMessage} />}
							{successMessage && <PtgUiAlert type={'success'} message={successMessage} />}
						</div>
						<div className="form-group">
							<div className="text-center mb-3">
								<h3>REGISTRATION</h3>
							</div>
						</div>
						<form className="form-login">
							<div className="login-form">
								<div className="form-container">
									<div className="row">
										<div className="col-sm-6">
											<div className="form-group required mb-2">
												<label htmlFor="inputUsername" tabIndex={0} aria-label="User Name">
													User Name
												</label>
												<PtgUiInput
													type="text"
													id="inputUsername"
													value={user?.username}
													onChange={handleChange}
													className={`w-100 form-control bg_0 ${formErr?.username ? 'border-danger' : ''}`}
													name="username"
													placeholder="Enter User Name"
													//onBlur={user.username === '' ? handleBlur : null}
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group required mb-2">
												<label htmlFor="inputEmail" tabIndex={0} aria-label="Email">
													Email
												</label>
												<PtgUiInput
													type="email"
													id="inputEmail"
													value={user?.email}
													onChange={handleChange}
													className={`w-100 form-control bg_0 ${formErr?.email ? 'border-danger' : ''}`}
													name="email"
													placeholder="Enter Your Email"
													//onBlur={user.email === '' ? handleBlur : null}
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-sm-6">
											<div className="form-group required mb-2" id="dob">
												<label htmlFor="inputDOB" tabIndex={0} aria-label="DOB">
													DOB
												</label>
												<PtgUiCalendar
													selected={date}
													className={`form-control w-100`}
													onChange={handleDateChange}
													startDate={null}
													endDate={new Date()}
													// id="inputDOB"
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group required mb-2">
												<label htmlFor="city" tabIndex={0} aria-label="cityList">
													City
												</label>
												<PtgUiSelect
													name="city"
													id="city"
													list={CITY_LIST}
													className={`sel-placeholder w-100 ${formErr?.city ? 'border-danger' : ''}`}
													onChange={handleChange}
													value={user?.city}
													//onBlur={user.city === '' ? handleBlur : null}
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-12">
												<div className="form-group required mb-2">
													<label htmlFor="inputGender" tabIndex={0} aria-label="gender">
														Gender
													</label>
													<div className="d-flex">
														<PtgUiRadio
															name="gender"
															onChange={handleChange}
															id="inputGender"
															list={GENDER_LIST}
															value={user?.gender}
														/>
													</div>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-12">
												<div className="form-group required mb-2">
													<label htmlFor="password" tabIndex={0} aria-label="password">
														Password
													</label>
													<PtgUiInput
														type="password"
														onChange={handleChange}
														value={user?.password}
														className={`w-100 form-control bg_0 ${formErr?.password ? 'border-danger' : ''}`}
														id="password"
														name="password"
														placeholder="Enter Password"
														//onBlur={user.password === '' ? handleBlur : null}
													/>
												</div>
												<div className="form-group required mb-2">
													<label htmlFor="confirmPassword" tabIndex={0} aria-label="confirmPassword">
														Confirm Password
													</label>
													<PtgUiInput
														type="password"
														onChange={handleChange}
														value={user?.confirmPassword}
														className={`w-100 form-control bg_0 ${formErr?.confirmPassword ? 'border-danger' : ''}`}
														id="confirmPassword"
														name="confirmPassword"
														placeholder="Enter Confirm Password"
														//onBlur={user.password === '' ? handleBlur : null}
													/>
												</div>
											</div>
										</div>
										<div className="mb-2 pwd-warning">
											Password with at least 8 characters, including uppercase letters, lowercase letters, numbers, and
											special characters.
										</div>
										<div className="row">
											<div className="col-12">
												<div className="form-group required mb-2">
													<PtgUiCheckbox
														label="I here by declare that all the information provided are true to my knowledge"
														htmlFor="confirm"
														checked={selectedCheck}
														onChange={handleCheckChange}
														className={`form-check-input `}
														name="confirm-registration"
														id="confirm"
														aria-label="confirm"
													/>
												</div>
											</div>
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
										text={'Submit'}
										className="w-100"
										type="button"
										disabled={user?.disable}
										data-testid="register"
										textColor="#000000"
										border={'1px solid #000'}
										backgroundColor="#ddd"
										width="100%"
										onClick={(event) => onSubmit && onSubmit(event)}
									/>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
