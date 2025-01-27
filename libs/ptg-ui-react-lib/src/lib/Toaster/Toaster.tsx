import React, { useEffect, useState } from 'react';
import { Toast } from 'react-bootstrap';
import './toaster.scss';

interface ToasterProps {
    show: boolean;
    setShow: (e) => void;
    message: string;
    type: string;
    children?: [];
}

export function PtgUiToaster({ show, setShow, message, type }: ToasterProps) {
    const [showToast, setShowToast] = useState(show);
    const toastObj: React.CSSProperties = {
        position: "absolute",
        top: 80,
        right: 20
    }

    useEffect(() => {
        setShowToast(show);
        const timer = setTimeout(() => {
            setShowToast(show);
            setShow(show);
        }, 5000);

        return () => clearTimeout(timer);
    }, [show, setShow]);

    return (
        <div className="toastHead" style={toastObj} >
            <Toast show={showToast} onClose={() => setShow(false)} delay={5000} autohide>
                <Toast.Header closeButton={true}>
                    <strong className={`me-auto ${type === 'error' ? 'text-danger' : 'text-success'}`}>
                        {type === 'error' ? 'Error' : 'Success'}
                    </strong>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </div>
    );
}
export default PtgUiToaster;
