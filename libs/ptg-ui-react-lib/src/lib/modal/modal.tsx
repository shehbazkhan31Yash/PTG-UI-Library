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
  header?: string;
  showFooter?: boolean;
  confirmButton?: string;
  cancelButton?: string;
  onModalClose?: any;
  closeOutsideClick?: boolean;
  content?: string;
  confirmButtonColor?: string;
  cancelButtonColor?: string;
}

export function PtgUiModal(props: PtgUiModalProps) {
  const {
    isOpen,
    modalSize,
    showHeader = true,
    header,
    showFooter = true,
    confirmButton,
    onConfirmed,
    onModalClose,
    cancelButton,
    closeOutsideClick=true,
    content,
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
                <h4>{header}</h4>
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
              <p>{content} </p>
            </div>
            {showFooter && (
              <div className="footer">
                {confirmButton && (
                  <PtgUiButton
                    text={confirmButton}
                    onClick={onConfirmed}
                    textColor="#fff"
                    backgroundColor={confirmButtonColor}
                  ></PtgUiButton>
                )}
                {cancelButton && (
                  <div className="cancel">
                    <PtgUiButton
                      text={cancelButton}
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
