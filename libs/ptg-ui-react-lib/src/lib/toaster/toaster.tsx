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
 * @param {string} props.type - The type of the toaster (e.g., 'error' or 'success').
 * 
 * @returns {JSX.Element} A JSX element representing the toaster.
 */

export function PtgUiToaster({ show, setShow, message, type }: Readonly<ToasterProps>) {
    const [showToast, setShowToast] = useState(show);

    useEffect(() => {
        setShowToast(show);
        if (show) {
            const timer = setTimeout(() => {
                setShowToast(false);
                setShow(false);
            }, 5000);

            return () => clearTimeout(timer);
        }

        return () => {};
    }, [show, setShow]);

    return (
        <div className={`custom-toast ${type} ${showToast ? 'show' : 'hide'}`} >
            <div className="toast-header">
                <strong className={`toast-title ${type}`}>{type === 'error' ? 'Error' : 'Success'}</strong>
                <button
                    className="toast-close-btn"
                    onClick={() => {
                        setShowToast(false);
                        setShow(false);
                    }}
                >
                    &times;
                </button>
            </div>
            <hr className="toast-divider" />
            <div className="toast-message">{message}</div>
        </div>
    );
}
export default PtgUiToaster;
