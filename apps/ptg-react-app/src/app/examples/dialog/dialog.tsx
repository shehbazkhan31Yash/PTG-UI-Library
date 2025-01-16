/**
 * @since December 2023
 * @author Nimish Jain
 * @uses Example using dialog/modal as reusable component.
 *
*/

import { useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '../../common/showCode/showCodeComponent';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { PtgUiButton, PtgUiModal } from '@ptg-ui/libs/ptg-ui-react-lib/src';
import './dialog.scss';

const DialogExample = () => {
  const [showCode, setShowCode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const ShowExampleCode = () => {
    if (!showCode) {
      setShowCode(true);
    } else {
      setShowCode(false);
    }
  };

  const modalClosed = (event) => {
    setIsOpen(false);
  }

  const confirmClicked = (event) => {
    setIsOpen(false);
  }

  const openModal = () => {
    setIsOpen(true);
  }

  const componentCode = `
  import { PtgUiButton, PtgUiModal } from '@ptg-ui/react';
  import AddCircleIcon from '@mui/icons-material/AddCircle';
  const [isOpen, setIsOpen] = useState(false);

  const modalClosed = (event) => {
    setIsOpen(false);
  }

  const confirmClicked = (event) => {
    setIsOpen(false);
  }

  const openModal = () => {
    setIsOpen(true);
  }

  export default DialogExample;
  `

  const cssCode = `
  import "@ptg-ui/react/lib/styles/index.css"`;

  const htmlCode = `
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
          <div slot="btnIcon">
            <AddCircleIcon />
          </div>
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
      />`

      const ModalProps = {
        isOpen:isOpen,
        onConfirmed:confirmClicked,
        modalSize:'lg',
        header:"Header Name Here",
        confirmButton:"Okay",
        cancelButton:"Cancel",
        onModalClose:modalClosed,
        content:'React Slot for Body',
        confirmButtonColor:"#2196f3",
        cancelButtonColor:'#dd3434',
        backdropClick:true,
        showHeader:true,
        showFooter:true,
      }

  return (
    <section className='card-section-two bg-white rounded pt-2 pb-2 mt-2'>
    <div className='row'>
      <div className="col-10 mt-1">
        <h5 className="font-weight-bold example-heading">Dialog/Modal</h5>
      </div>
      <div className='col-2 mr-5 mb-2'>
        <CodeIcon onClick={ShowExampleCode} fontSize="large" className='show-code-icon'></CodeIcon>
      </div>
      <hr className='horizontal-line'/>

      {showCode && (
        <ShowCodeComponent componentCode={componentCode} htmlCode={htmlCode} cssCode={cssCode} />
      )}
      <div className='ms-2'>
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
          <div slot="btnIcon">
            <AddCircleIcon />
          </div>
      </PtgUiButton>
      </div>

      <PtgUiModal {...ModalProps}  />
    </div>
    </section>
  );
};

export default DialogExample;
