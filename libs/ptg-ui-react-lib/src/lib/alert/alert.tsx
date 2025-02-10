/**
 * @since Feb 2022
 * @author Ankit Patidar
 * @uses Reusable Component for Alert
 *
 */

import './alert.module.scss';
import { AlertProps } from '../interfaces';

const defaultProps: AlertProps = {
	type: 'danger',
};
export function PtgUiAlert({ type, message }: AlertProps) {
	return (
		<div>
			<div className={`alert alert-${type}`} role="alert" style={{ padding: 5, fontSize: 14 }}>
				{message}
			</div>
		</div>
	);
}

PtgUiAlert.defaultProps = defaultProps;
export default PtgUiAlert;
