import React from 'react';
import { PtgUiModalProps } from '@ptg-react-libs/interfaces';
import { PtgUiButton } from '../button/button';
import './modal.css';

/**
 * PtgUiModal component to render a customizable modal dialog.
 *
 * This component provides a flexible modal dialog with options for a header, footer,
 * confirm and cancel buttons, and customizable content. It supports controlled visibility
 * and allows for backdrop click handling.
 *
 * @param {PtgUiModalProps} props - The properties for the PtgUiModal component.
 * @param {boolean} props.isOpen - Determines whether the modal is open or closed.
 * @param {string} [props.modalSize='sm'] - The size of the modal (e.g., 'sm', 'md', 'lg').
 * @param {boolean} [props.showHeader=true] - Whether to display the modal header.
 * @param {string} [props.header] - The content of the modal header.
 * @param {boolean} [props.showFooter=true] - Whether to display the modal footer.
 * @param {string} [props.confirmButton] - The text for the confirm button.
 * @param {Function} [props.onConfirmed] - Callback function triggered when the confirm button is clicked.
 * @param {Function} [props.onModalClose] - Callback function triggered when the modal is closed.
 * @param {string} [props.cancelButton] - The text for the cancel button.
 * @param {boolean} [props.backdropClick=true] - Whether clicking on the backdrop closes the modal.
 * @param {string} [props.content] - The content to display inside the modal body.
 * @param {string} [props.confirmButtonColor='#2196f3'] - The background color of the confirm button.
 * @param {string} [props.cancelButtonColor='#dd3434'] - The background color of the cancel button.
 * @param {React.ReactNode} [props.children] - Custom children to render inside the modal body.
 * @returns {JSX.Element | null} The rendered modal component or null if not open.
 */
export const PtgUiModal: React.FC<PtgUiModalProps> = ({
	isOpen,
	modalSize = 'sm',
	showHeader = true,
	header,
	showFooter = true,
	confirmButton,
	onConfirmed,
	onModalClose,
	cancelButton,
	backdropClick = true,
	content,
	confirmButtonColor = '#2196f3',
	cancelButtonColor = '#dd3434',
	children,
}) => {
	const closeModal = () => {
		if (backdropClick) onModalClose();
	};

	if (!isOpen) return null;

	return (
		<>
			<div className="modal-wrapper isOpen" data-backdrop="static">
				<div className={`modal-body modal ${modalSize}`} role="dialog" aria-modal="true">
					{showHeader && header && (
						<div className="header">
							<h4>{header}</h4>
							<div className="close" id="closeButton" onClick={onModalClose} role="button" aria-label="Close modal">
								×
							</div>
						</div>
					)}
					<div className="body">{children || <p>{content}</p>}</div>
					{showFooter && (
						<div className="footer">
							{confirmButton && (
								<PtgUiButton
									text={confirmButton}
									onClick={onConfirmed}
									textColor="#fff"
									backgroundColor={confirmButtonColor}
								/>
							)}
							{cancelButton && (
								<div className="cancel">
									<PtgUiButton
										text={cancelButton}
										onClick={onModalClose}
										textColor="#fff"
										backgroundColor={cancelButtonColor}
									/>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
			<div className="modal-overlay" onClick={closeModal}></div>
		</>
	);
};
