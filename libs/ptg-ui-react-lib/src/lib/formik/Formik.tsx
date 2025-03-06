import { Formik } from 'formik';
import './Formik.scss';
import { IPtgUiFormikProps } from '../interfaces/index';

export function PtgUiFormik(props: IPtgUiFormikProps) {
	const { initialValues = {}, validate, CustomForm, children = '', image = '', onSubmit } = props;

	return (
		<div className="login-wrapper container-fluid p-0 d-flex justify-content-center">
			<div className="login-container">
				<div className="login-form-wrapper">
					{image && (
						<div className="form-group">
							<div className="login-logo text-center mb-3">
								<img className="login-logo" src={image} alt="Yash Logo" />
							</div>
						</div>
					)}
					<Formik
						initialValues={initialValues}
						validate={validate}
						onSubmit={(values, { setSubmitting }) => {
							onSubmit && onSubmit(values);
							setTimeout(() => {
								setSubmitting(false);
							}, 400);
						}}
					>
						{({ values }) => {
							return (
							<>
								<CustomForm values={values}/>
								{children && children}
							</>
							)
						}}
					</Formik>
				</div>
			</div>
		</div>
	);
}

export default PtgUiFormik;
