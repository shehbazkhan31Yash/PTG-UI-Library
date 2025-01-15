/**
 * @since Feb 2022
 * @author Ankit Patidar
 * @uses Reusable Component for Button
 * @Updated Manish Patidar
 *
 */
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
  onModalClose?: any;
  closeOutsideClick?: boolean;
  dialogContentText?: string;
  confirmButtonColor?: string;
  cancelButtonColor?: string;
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
    closeOutsideClick=true,
    dialogContentText,
    confirmButtonColor="#2196f3",
    cancelButtonColor ="#dd3434",
  } = props;

  const closeModule = () => {
    if(closeOutsideClick)
      onModalClose();
  }

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
              <h2>{dialogContentText} </h2>
            </div>
            {showFooter && (
              <div className="footer">
                {confirmButtonName && (
                  <PtgUiButton
                    text={confirmButtonName}
                    onClick={onConfirmed}
                    textColor="#fff"
                    backgroundColor={confirmButtonColor}
                  ></PtgUiButton>
                )}
                {cancelButtonName && (
                  <div className="cancel">
                    <PtgUiButton
                      text={cancelButtonName}
                      onClick={onModalClose}
                      textColor="#fff"
                      backgroundColor={cancelButtonColor}
                    ></PtgUiButton>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
      {isOpen && <div className="modal-overlay1" onClick={closeModule}></div>}
    </div>
  );
}

export default PtgUiModal;
