/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * @since March 2022
 * @author Anmol Mathur
 * @Updatedby Ankit Patidar
 * @Updatedby Harsha Zalawa
 * @updatedby Manish Patidar
 * @desc Forgot Password Component
 *
 */
import { Component } from 'react';
import './forgotPassword.scss';
import PtgUiButton from '../../button/button';
import PtgUiInput from '../../input/input';
import { PtgUiModal } from '../../modal/modal';
import { FORGOT_PASSWORD_BTN_COLOR } from '../../constants/Constants';
import { IForgotPassword, IState } from '../../interfaces';

export class PtgUiForgotPassword extends Component<IForgotPassword, IState> {
	constructor(props: IForgotPassword) {
		super(props);
		this.state = {
			values: {
				show: false,
				email: '',
				btnDisable: true,
				showMessage: { show: false, type: '', message: '' },
			},
			formErr: { email: false, password: false },
		};
	}
	override render() {
		const { FORGOT_BTN_TEXT, FORGOT_BTN_BACKGROUND, FORGOT_BTN_BACKGROUND_GRAY } = FORGOT_PASSWORD_BTN_COLOR;
		const { onForgotPasswordSubmit, fPasswordEmail, forgotPasswordLabel } = this.props;
		const { values, formErr } = this.state;

		const handleClose = () => {
			this.setState({
				values: {
					...values,
					show: false,
				},
				formErr: { email: false, password: false },
			});
		};

		const handleShow = () => {
			this.setState({
				values: {
					show: true,
					email: '',
					btnDisable: true,
					showMessage: { show: false, type: '', message: '' },
				},
				formErr: { email: false, password: false },
			});
		};

		const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = event.target;
			this.setState((prevState) => ({
				values: {
					...prevState.values,
					[name]: value,
				},
			}));
			validate(name, value);
		};

		//validate email and password
		const validate = (fieldName: string, value: string) => {
			let disabled = true;
			let formErr = false;
			switch (fieldName) {
				case 'email':
					const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
					if (value === '' || value ? true : false !== regexEmail.test(value)) {
						if (!regexEmail.test(value)) {
							formErr = true;
						} else {
							disabled = false;
						}
					}
					break;
			}
			this.setState((prevState) => ({
				values: {
					...prevState.values,
					btnDisable: disabled,
				},
				formErr: {
					...prevState.formErr,
					[fieldName]: formErr,
				},
			}));
			fPasswordEmail?.(value);
		};

		return (
			<div>
				<a className="forgot-password float-end" onClick={() => handleShow()} data-testid="linkForgotPassword">
					{`${forgotPasswordLabel}?`}
				</a>
				<PtgUiModal isOpen={values?.show} modalSize={'lg'} backdropClick={true} onModalClose={handleClose}>
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
											className={`w-100 form-control bg_0 ${formErr?.email ? 'border-danger' : ''}`}
											name="email"
											data-testid="email"
											placeholder="Enter Your Email"
											onChange={handleChange}
											value={values?.email}
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
												disabled={values?.btnDisable}
											/>
										</div>
										<div className="col-3 col-lg-4 col-md-4 col-sm-3 col-xs-3 text-md-end">
											<PtgUiButton
												data-testid="handleClose"
												onClick={handleClose}
												textColor={FORGOT_BTN_TEXT}
												backgroundColor={FORGOT_BTN_BACKGROUND_GRAY}
												text={'Cancel'}
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
	}
}
