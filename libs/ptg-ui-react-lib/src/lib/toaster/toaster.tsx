import React, { useEffect, useState } from 'react';
import { ToasterProps } from '@ptg-react-libs/interfaces';
/**
 * PtgUiToaster Component
 *
 * A functional component that renders a customizable toaster notification.
 *
 * @param {Readonly<ToasterProps>} props - The props for the toaster component.
 * @param {boolean} props.show - Indicates whether the toaster is visible.
 * @param {function} props.setShow - The function to call to set the visibility of the toaster.
 * @param {string} props.message - The message to display in the toaster.
 * @param {string} props.type - The type of the toaster (e.g., 'error', 'success', 'info', or 'warning').
 * @param {boolean} props.showDescription - Whether to show the description/message in the toaster.
 * @param {React.ReactNode} props.closeIcon - The custom close icon for the toaster.
 * @param {string} props.alignItem - The alignment of the toaster on the vertical axis (e.g., 'flex-start', 'center', 'flex-end').
 * @param {string} props.justifyContent - The alignment of the toaster on the horizontal axis (e.g., 'flex-start', 'center', 'flex-end').
 * @param {number} props.timeToShow - The duration (in milliseconds) for which the toaster is visible.
 * @param {React.ReactNode} props.icon - The custom icon to display in the toaster.
 *
 * @returns {JSX.Element} A JSX element representing the toaster.
 */

export function PtgUiToaster({
	show,
	setShow,
	message,
	type,
	showDescription,
	closeIcon,
	alignItem,
	justifyContent,
	timeToShow,
	icon,
}: Readonly<ToasterProps>) {
	const [showToast, setShowToast] = useState(show);
	useEffect(() => {
	setShowToast(show);
	if (show) {
		const timer = setTimeout(() => {
			setShowToast(false);
			setShow(false);
		}, timeToShow);

		return () => clearTimeout(timer);
	}
	return undefined;
}, [show, setShow, timeToShow]);

	return (
		<div className="custom-toast-container" style={{ alignItems: alignItem, justifyContent: justifyContent }}>
			<div className={`custom-toast ${type} ${showToast ? 'show' : 'hide'}`}>
				<div className={`toast-header  ${type}`}>
					<strong className={`toast-title ${type}`}>
						{icon}
						{type}
					</strong>
					<button
						className="toast-close-btn"
						onClick={() => {
							setShowToast(false);
							setShow(false);
						}}
					>
						{closeIcon}
					</button>
				</div>
				{showDescription && (
					<>
						<hr className="toast-divider" />
						<div className="toast-message">{message}</div>
					</>
				)}
			</div>
		</div>
	);
}

export default PtgUiToaster;
