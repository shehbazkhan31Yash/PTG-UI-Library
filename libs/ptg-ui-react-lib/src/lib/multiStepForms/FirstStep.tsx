import { PtgUiInput } from '../input/input';
import { PtgUiCommonStepProps } from '../interfaces/index';

export function PtgUiFirstStep(props: PtgUiCommonStepProps) {
	const { handleChange, details, error, handleBlur } = props;
	return (
		<div className="p-2">
			<div className="form-group required col-md-12 mb-2">
				<label htmlFor="inputUsername">{'User Name'} </label>
				<PtgUiInput
					className={`w-100 form-control bg_0 ${error?.userName ? 'border-danger' : ''}`}
					type="text"
					name="userName"
					id="inputUsername"
					value={details?.userName}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
			</div>
			<div className="form-group required col-md-12 mb-2">
				<label htmlFor="password">{'Password'} </label>
				<PtgUiInput
					className={`w-100 form-control bg_0 ${error?.password ? 'border-danger' : ''}`}
					type="password"
					name="password"
					id="password"
					value={details?.password}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
			</div>
			<div className="form-group required col-md-12 mb-2">
				<label htmlFor="confirmPassword">{'Confirm Password'} </label>
				<PtgUiInput
					className={`w-100 form-control bg_0 ${error?.confirmPassword ? 'border-danger' : ''}`}
					type="password"
					name="confirmPassword"
					id="confirmPassword"
					value={details?.confirmPassword}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{error?.confirmPassword && <span className="form-text text-danger">{error.confirmPassword}</span>}
			</div>
		</div>
	);
}
