/**
 * @since April 2022
 * @author Aakash Patidar
 * @Module Downloads;
 * @description This module used for reusable Downloads
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileDownloadComponent } from './file-download/file-download.component';
import { SelectModule } from '../select/select.module';

@NgModule({
  declarations: [
    FileDownloadComponent
  ],
  imports: [
    CommonModule,
    SelectModule
  ],
  exports:[
    FileDownloadComponent
  ]
})
export class FileDownloadsModule { }
