import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  standalone: true
})
export class DialogComponent {

  dialogData = inject(MAT_DIALOG_DATA);
  stringyFiedData: any = null
  constructor() {
    this.stringyFiedData = this.dialogData.themeSettingValues ? JSON.stringify(this.dialogData.themeSettingValues, null, 2) : '';
  }

  copyToClipboard() {
    try {
      navigator.clipboard.writeText(this.stringyFiedData);
      console.log('console.cpoied')
    } catch (e) {
      console.log('error to copy', e);
    }

  }

}
