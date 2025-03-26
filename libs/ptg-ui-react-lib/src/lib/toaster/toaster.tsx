import React, { useEffect, useState } from 'react';
import { Toast } from 'react-bootstrap';
import './toaster.css';
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
 * @param {React.ReactNode[]} props.children - Any additional content to display inside the toaster.
 * 
 * @returns {JSX.Element} A JSX element representing the toaster.
 */


export function PtgUiToaster({ show, setShow, message, type }: Readonly<ToasterProps>) {
	const [showToast, setShowToast] = useState(show);
    const toastObj: React.CSSProperties = {
        position: 'absolute',
        top: 80,
        right: 20,
    };

    useEffect(() => {
        setShowToast(show);
        const timer = setTimeout(() => {
			setShowToast(show);
			setShow(show);
        }, 5000);

        return () => clearTimeout(timer);
    }, [show, setShow]);

	return (
        <div className="toastHead" style={toastObj}>
            <Toast show={showToast} onClose={() => setShow(false)} delay={5000} autohide>
                <Toast.Header closeButton={true}>
                    <strong className={`me-auto ${type === 'error' ? 'text-danger' : 'text-success'}`}>
                        {type === 'error' ? 'Error' : 'Success'}
                    </strong>
                </Toast.Header>
                <Toast.Body>
                    {message}
                </Toast.Body>
            </Toast>
        </div>
    );
}
export default PtgUiToaster;
