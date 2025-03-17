/**
 * @since March 2022
 * @author Aakash Patidar
 * @Module Ngx datatable;
 * @description This module used for reusable Ngx datatable
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PtgNgxDatatableComponent } from './ptg-ngx-datatable/ptg-ngx-datatable.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { InputModule } from '@ptg-ui/angular/input';
@NgModule({
  declarations: [
    PtgNgxDatatableComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    NgxDatatableModule
  ], 
  exports:[
    PtgNgxDatatableComponent
  ]
})
export class PtgNgxDatatableModule { }
