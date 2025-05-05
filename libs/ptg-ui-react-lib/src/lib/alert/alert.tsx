import './alert.module.css';
import { AlertProps } from '../interfaces';
import React from 'react';

/**
 * PtgUiAlert component to render a customizable alert message.
 *
 * @param {AlertProps} props - The properties for the PtgUiAlert component.
 * @param {string} [props.type='danger'] - The type of the alert (e.g., 'success', 'warning', 'danger').
 * @param {string} props.message - The message to display inside the alert.
 * @returns {JSX.Element} The rendered alert component.
 */
export const PtgUiAlert: React.FC<AlertProps> = ({ type = 'danger', message }) => {
	return (
		<div>
			<div className={`alert alert-${type}`} role="alert" style={{ padding: 5, fontSize: 14 }}>
				{message}
			</div>
		</div>
	);
};
