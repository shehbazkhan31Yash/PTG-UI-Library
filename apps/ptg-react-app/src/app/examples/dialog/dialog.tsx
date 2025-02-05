/**
 * @since December 2023
 * @author Nimish Jain
 * @updatedby Ankita Keshri
 * @uses Example using dialog/modal as reusable component.
 *
 */

import { useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import { PtgUiButton, PtgUiModal } from '@ptg-ui/react';
import './dialog.scss';
import { FONT_SIZE_12, BUTTON_VARIANT, WIDTH_110, MODAL_CANCEL_BUTTON_COLOR, MODAL_CANCEL_BUTTON_TEXT, MODAL_CONFIRM_BUTTON_COLOR, MODAL_CONFIRM_BUTTON_TEXT, POSITIONS, WIDTH_200 } from '@ptg-react-app/constants/Constant';

const DialogExample = () => {
  const [showCode, setShowCode] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

// Note: showExampleCode function show code 
  const showExampleCode = () => setShowCode(!showCode);
 
  // Note: Handle modal close 
  const modalClosed = () => setIsOpen(false);

// Note: Handle confirm click
  const confirmClicked = () => setIsOpen(false);

// Note: Handle open modal
  const openModal = () =>  setIsOpen(true);
  

  const componentCode = `
    const [showCode, setShowCode] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

   // Note: showExampleCode function show code 
   const showExampleCode = () => setShowCode(!showCode);
 
  // Note: Handle modal close 
  const modalClosed = () => setIsOpen(false);

  // Note: Handle confirm click
  const confirmClicked = () => setIsOpen(false);

  // Note: Handle open modal
  const openModal = () =>  setIsOpen(true);
  `;

  const cssCode = `
  import "@ptg-ui/react/lib/styles/index.css"`;

  const htmlCode = `
    import { PtgUiButton, PtgUiModal } from '@ptg-ui/react';

    <PtgUiButton
      text="Click Here"
      data-testid="open-button"
      appearance="primary"
      btnIconAlignment="right"
      onClick={openModal}
      width="136px"
      fontSize="13px"
      hasbtnIconSlot={true}
    >
      // You can use Icon here
      <div className="btn-icon">+</div>
    </PtgUiButton>

     <PtgUiModal
      isOpen={isOpen}  
      onConfirmed={confirmClicked}
      modalSize='lg' 
      header="Header Name Here"
      confirmButton="Okay"
      cancelButton="Cancel"
      onModalClose={modalClosed}
      content={'React Slot for Body'}
      confirmButtonColor={"#2196f3"}
      cancelButtonColor={'#dd3434'}
      backdropClick={true}
      showHeader={true}
      showFooter={true}
    />`;

  const ModalProps = {
    isOpen: isOpen,
    onConfirmed: confirmClicked,
    modalSize: 'lg',
    header: 'Header Name Here',
    confirmButton: MODAL_CONFIRM_BUTTON_TEXT,
    cancelButton: MODAL_CANCEL_BUTTON_TEXT,
    onModalClose: modalClosed,
    content: 'React Slot for Body',
    confirmButtonColor: MODAL_CONFIRM_BUTTON_COLOR,
    cancelButtonColor: MODAL_CANCEL_BUTTON_COLOR,
    backdropClick: true,
    showHeader: true,
    showFooter: true,
  };

  return (
    <section className="card-section-two bg-white rounded pt-2 pb-2 mt-2">
      <div className="row">
        <div className="col-10 mt-1">
          <h5 className="font-weight-bold example-heading">Dialog/Modal</h5>
        </div>
        <div className="col-2 mr-5 mb-2">
          <CodeIcon
            onClick={showExampleCode}
            fontSize="large"
            className="show-code-icon"
          ></CodeIcon>
        </div>
        <hr className="horizontal-line" />

        {showCode && (
          <ShowCodeComponent
            componentCode={componentCode}
            htmlCode={htmlCode}
            cssCode={cssCode}
          />
        )}
        <div className="ms-2">
          <PtgUiButton
            text="Click Here"
            data-testid="open-button"
            appearance={BUTTON_VARIANT.PRIMARY}
            btnIconAlignment={POSITIONS.RIGHT}
            onClick={openModal}
            width={WIDTH_200}
            fontSize={FONT_SIZE_12}
            hasbtnIconSlot={true}
          >
            <div className="btn-icon">+</div>
          </PtgUiButton>
        </div>

        <PtgUiModal {...ModalProps} />
      </div>
    </section>
  );
};

export default DialogExample;
