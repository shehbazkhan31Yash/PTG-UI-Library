/**
 * @since Feb 2022
 * @author Ankit Patidar
 * @uses Reusable Component for Button
 * @Updated Manish Patidar
 *
 */
import { ReactNode } from 'react';
import { PtgUiButton } from '../button/button';
import './modal.scss';

interface PtgUiModalProps {
  isOpen?: boolean;
  onConfirmed?: any;
  modalSize?: string;
  showHeader?: boolean;
  modalHeaderName?: string;
  showFooter?: boolean;
  confirmButtonName?: string;
  cancelButtonName?: string;
  children?: ReactNode;
  onModalClose?: any;
}

export function PtgUiModal(props: PtgUiModalProps) {
  const {
    isOpen,
    modalSize,
    showHeader = true,
    modalHeaderName,
    showFooter = true,
    confirmButtonName,
    onConfirmed,
    onModalClose,
    cancelButtonName,
    children,
  } = props;

  return (
    <div>
      {isOpen && (
        <div
          className={isOpen ? 'modal-wrapper isOpen' : 'modal-wrapper'}
          data-backdrop="static"
        >
          <div
            className={`modal-body modal ${
              modalSize === 'lg' ? 'lg' : modalSize === 'sm' ? 'sm' : 'md'
            }`}
          >
            {showHeader && (
              <div className="header">
                <h4>{modalHeaderName}</h4>
                <div
                  className="close"
                  data-testid="closeButton"
                  onClick={onModalClose}
                >
                  ×
                </div>
              </div>
            )}
            <div className="body">
              <slot name="body-block" />
              {children}
            </div>
            {showFooter && (
              <div className="footer">
                {confirmButtonName && (
                  <PtgUiButton
                    text={confirmButtonName}
                    appearance={'primary'}
                    onClick={onConfirmed}
                  ></PtgUiButton>
                )}
                {cancelButtonName && (
                  <div className="cancel">
                    <PtgUiButton
                      text={cancelButtonName}
                      appearance={'danger'}
                      onClick={onModalClose}
                    ></PtgUiButton>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
      {isOpen && <div className="modal-overlay1" onClick={onModalClose}></div>}
    </div>
  );
}

export default PtgUiModal;
