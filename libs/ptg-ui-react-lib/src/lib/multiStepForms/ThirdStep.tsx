import { PtgUiInput } from '../input/input';
import { PtgUiSelect } from '../select/select';
import { CARD_LIST } from '../mock/mock';
import { PtgUiCommonStepProps } from '../interfaces/index';

const cardData = CARD_LIST;

export function PtgUiThirdStep(props: PtgUiCommonStepProps) {
	const { handleChange, details, error, handleBlur } = props;
	return (
		<div className="p-2">
			<div className="col-md-12 mb-2">
				<label htmlFor="inputCardType">{'Card Type'} </label>
				<PtgUiSelect
					name="cardType"
					list={cardData}
					id="inputCardType"
					className={`sel-placeholder w-100 bg_0 ${error?.cardType ? 'border-danger' : ''}`}
					aria-label="given-name"
					onBlur={handleBlur}
					value={details?.cardType}
					onChange={handleChange}
				/>
			</div>
			<div className="row">
				<div className="col-md-6 mb-2">
					<label htmlFor="inputCardNumber">{'Card Number'} </label>
					<PtgUiInput
						className={`w-100 form-control bg_0 ${error?.cardNumber ? 'border-danger' : ''}`}
						type="text"
						name="cardNumber"
						id="inputCardNumber"
						value={details?.cardNumber}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</div>
				<div className="col-md-3 mb-2">
					<label htmlFor="inputCvc">{'CVC'} </label>
					<PtgUiInput
						className={`w-100 form-control bg_0 ${error?.cvc ? 'border-danger' : ''}`}
						type="text"
						name="cvc"
						id="inputCvc"
						value={details?.cvc}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</div>
				<div className="col-md-3 mb-2">
					<label htmlFor="inputexpirationDate">{'Expiration'} </label>
					<PtgUiInput
						className={`w-100 form-control bg_0 ${error?.expiration ? 'border-danger' : ''}`}
						type="text"
						name="expiration"
						id="inputexpirationDate"
						placeholder="MM/YY"
						value={details?.expiration}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
				</div>
			</div>
			<div className="col-md-12 form-group required mb-2">
				<label htmlFor="inputCardHolderName">{'Card Holder Name'} </label>
				<PtgUiInput
					className={`w-100 form-control bg_0 ${error?.cardHolder ? 'border-danger' : ''}`}
					type="text"
					name="cardHolder"
					id="inputCardHolderName"
					value={details?.cardHolder}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
			</div>
		</div>
	);
}
