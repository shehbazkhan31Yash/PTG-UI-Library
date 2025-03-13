/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since Dec 24, 2024
 * @author Suyog Mohan Sakpal
 * @Component DialogComponent;
 * @description This module for Dialog
**/

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ptg-ui-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent {
  @Input() headerTitle?: string = "Modal Header";
  @Input() isModalPopover = true;
  @Input() btnLabel = "Launch Modal";
  @Input() btnClass = "btn-primary";
  @Input() isCloseIconReq = true;
  @Input() isCloseBtnReq = true;
  @Input() closeBtnLabel = "close";
  @Input() modalBodyContent = "<p>Modal body text goes here.</p>";
  @Input() modalId = "dialog-test";
  @Input() hideModal = true;
  @Input() isFooterOpen = true;

  // Modal Features base on input
  @Input() isScrollable = false;
  @Input() isCenter = true;
  @Input() isStaticBackdrop: boolean | string = true;
  @Input() isKeyboardEnabled: boolean | string = true;
  @Input() modalSize = "";
  @Input() fullScreenmodalSize = "";

  @Output() closeDialog = new EventEmitter<any>();

  onClosed(): void {
    this.closeDialog.emit(null);
  }

  updateModalStatus() {
    this.hideModal = false;
  }
}
