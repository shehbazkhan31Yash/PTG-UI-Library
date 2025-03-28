import { PtgUiInput } from '../input/input';
import { PtgUiSelect } from '../select/select';
import { PtgUiTextArea } from '../textarea/textarea';
import { SALUTATION_LIST, GENDER_LIST_SELECT, STATE_LIST, COUNTRY_LIST } from '../mock/mock';
import { PtgUiCommonStepProps } from '../interfaces/index';

const salutationList = SALUTATION_LIST;
const genderList = GENDER_LIST_SELECT;
const stateList = STATE_LIST;
const contriesList = COUNTRY_LIST;

export function PtgUiSecondStep(props: Readonly<PtgUiCommonStepProps>) {
	const { handleChange, details, error, handleBlur } = props;
	return (
		<div className="p-2">
			<div className="row">
				<div className="form-group required col-md-4 mb-2">
					<label htmlFor="inputGreeting">{'Greeting'} </label>
					<PtgUiSelect
						name="greeting"
						list={salutationList}
						id="inputGreeting"
						className={`sel-placeholder w-100 bg_0 ${error?.greeting ? 'border-danger' : ''}`}
						aria-label="given-name"
						onBlur={handleBlur}
						value={details?.greeting}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group required col-md-8 mb-2">
					<label htmlFor="inputGender">{'Gender'} </label>
					<PtgUiSelect
						name="gender"
						list={genderList}
						id="inputGender"
						className={`sel-placeholder w-100 bg_0 ${error?.gender ? 'border-danger' : ''}`}
						aria-label="given-name"
						onBlur={handleBlur}
						value={details?.gender}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="form-group required row">
				<div className="col-md-6 mb-2">
					<label htmlFor="inputFirstName">{'First Name'} </label>
					<PtgUiInput
						className={`w-100 form-control bg_0 ${error?.firstName ? 'border-danger' : ''}`}
						type="text"
						name="firstName"
						id="inputFirstName"
						value={details?.firstName}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</div>
				<div className="col-md-6 mb-2">
					<label htmlFor="inputLastName">{'Last Name'} </label>
					<PtgUiInput
						className={`w-100 form-control bg_0 ${error?.lastName ? 'border-danger' : ''}`}
						type="text"
						name="lastName"
						id="inputLastName"
						value={details?.lastName}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</div>
			</div>
			<div className="form-group required col-md-12 mb-2">
				<label htmlFor="inputEmail">{'Email'} </label>
				<PtgUiInput
					className={`w-100 form-control bg_0 ${error?.email ? 'border-danger' : ''}`}
					type="text"
					name="email"
					id="inputEmail"
					value={details?.email}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
			</div>
			<div className="form-group required col-md-12 mb-2">
				<label htmlFor="inputPhone">{'Phone'} </label>
				<PtgUiInput
					className={`w-100 form-control bg_0 ${error?.phone ? 'border-danger' : ''}`}
					type="phone"
					name="phone"
					id="inputPhone"
					value={details?.phone}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{error?.phone && <span className="form-text text-danger">{error.phone}</span>}
			</div>
			<div className="form-group required vrow">
				<div className="col-md-4 mb-2">
					<label htmlFor="inputZipCode">{'Zip Code'}</label>
					<PtgUiInput
						className={`w-100 form-control bg_0 ${error?.zipCode ? 'border-danger' : ''}`}
						type="text"
						name="zipCode"
						id="inputZipCode"
						value={details?.zipCode}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</div>
				<div className="form-group required col-md-8 mb-2">
					<label htmlFor="inputState">{'State'} </label>
					<PtgUiSelect
						name="state"
						list={stateList}
						id="inputState"
						className={`sel-placeholder w-100 bg_0 ${error?.state ? 'border-danger' : ''}`}
						aria-label="given-name"
						onBlur={handleBlur}
						value={details?.state}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="form-group required col-md-12 mb-2">
				<label htmlFor="inputAddress">{'Home Address'} </label>
				<PtgUiTextArea
					className={`w-100 form-control bg_0 ${error?.homeAddress ? 'border-danger' : ''}`}
					rows={2}
					name="homeAddress"
					id="inputAddress"
					value={details?.homeAddress}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
			</div>
			<div className="form-group required col-md-12 mb-2">
				<label htmlFor="inputContry">{'Country'} </label>
				<PtgUiSelect
					name="country"
					list={contriesList}
					id="inputContry"
					className={`sel-placeholder w-100 bg_0 ${error?.country ? 'border-danger' : ''}`}
					aria-label="given-name"
					onBlur={handleBlur}
					value={details?.country}
					onChange={handleChange}
				/>
			</div>
		</div>
	);
}
