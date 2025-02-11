import React from 'react';
import { PtgUiCommonStepProps } from '../interfaces/index';
import { UserInfo } from '../../common/ReusableComponents';

export class PtgUiFinalStep extends React.Component<PtgUiCommonStepProps> {
	override render() {
		const { details } = this.props;
		return (
			<div className="border border-2 border-dark pb-2 mb-2">
				<h5 className="text-center my-2">{'Confirm Details'}</h5>
				<div className="form-group  text-break">
					<div className="row ms-3 text-wrap">
						<UserInfo label={'User Name'} data={details?.userName} />
						<UserInfo label={'Name'} data={details?.greeting + ' ' + details?.firstName + ' ' + details?.lastName} />
						<UserInfo label={'Gender'} data={details?.gender} />
						<UserInfo label={'Email'} data={details?.email} />
						<UserInfo label={'Phone'} data={details?.phone} />
						<UserInfo label={'Card Type'} data={details?.cardType} />
						<UserInfo label={'Card Number'} data={details?.cardNumber} />
						<UserInfo
							label={'Adresse'}
							data={`${details?.homeAddress},${details?.state},${details?.zipCode}\n ${details?.country}`}
						/>
					</div>
				</div>
			</div>
		);
	}
}
