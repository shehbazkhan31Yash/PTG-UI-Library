import { Component } from '@angular/core';

@Component({
  selector: 'ptg-ui-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss'],
})
export class DialogExampleComponent {
  isOpen: boolean = false;
  isFooterOpen: boolean = false;
  isStaticBackdrop = "static";
  isKeyboardEnabled = "false";
  hideModal = false;
  headerTitle = "Modal Header";
  isModalPopover = true;
  btnLabel = "Launch Modal";
  btnClass = "btn-primary";
  isCloseIconReq = true;
  isCloseBtnReq = true;
  closeBtnLabel = "close";
  modalBodyContent = "<p>Modal body text goes here.</p>";
  modalId = "dialog-test";

  // Modal Features base on input
  isScrollable = false;
  isCenter = true;
  modalSize = "";
  fullScreenmodalSize = "";

  htmlCode = `
  <ptg-ui-dialog [isStaticBackdrop]="isStaticBackdrop" [isKeyboardEnabled]="isKeyboardEnabled" 
    [hideModal]="hideModal" [isFooterOpen]="isFooterOpen"></ptg-ui-dialog>
  `;

  htmlCodeToHideFooter = `
  <ptg-ui-dialog [isStaticBackdrop]="isStaticBackdrop" [isKeyboardEnabled]="isKeyboardEnabled" 
    [hideModal]="hideModal" [isFooterOpen]="isFooterOpen"></ptg-ui-dialog>
  `;

  tsCode = `
    // All of the above props are optional and default values are provided
    // You can hide header/footer by using the props options
    // showHeader = false, It will remove the Header from dialog

    import { Component } from '@angular/core';

    @Component({
      selector: 'demo-dialog-component',
      templateUrl: './demo-dialog.component.html'
    })
    export class DemoDialogComponent {
      isFooterOpen: boolean =false;
      // This method to open the dialog with footer
      openFooterModal(){
        this.isFooterOpen =true;
      }
      // This method will be called when we close or cancel the dialog with footer
      modalFooterClosed() {
        this.isFooterOpen =false;
      }
      // This method will be called when we confirm the dialog with footer
      confirmFooterClicked(){
        this.isFooterOpen =false;
      }
    }`;

  tsCodeToHideFooter = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'demo-dialog-component',
      templateUrl: './demo-dialog.component.html'
    })
    export class DemoDialogComponent {
      isOpen:boolean =false;
      btnName: any = "Open Modal";
      // This method will be called when we close or cancel the dialog without footer
      modalClosed() {
        this.isOpen =false;
      }  
      // This method will be called when we confirm the dialog without footer
      confirmClicked(){
        this.isOpen =false;
      }   
      // This method to open the dialog without footer
      openModal(){
        this.isOpen =true;
      }
    }
    `;

  modalClosed() {
    this.isOpen = false;
  }

  confirmClicked() {
    this.isOpen = false;
  }

  openModal() {
    this.isOpen = true;
  }

  openFooterModal() {
    this.isFooterOpen = true;
  }

  modalFooterClosed() {
    this.isFooterOpen = false;
  }

  confirmFooterClicked() {
    this.isFooterOpen = false;
  }

  updateModalStatus() {
    this.hideModal = false;
  }
}
