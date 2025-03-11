/**
 * @since March 2022
 * @author Aakash Patidar
 * @Module Material datatable;
 * @description This module used for reusable Material datatable
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatatableComponent } from './mat-datatable/mat-datatable.component';
import { InputModule } from '@ptg-ui/angular/input';




@NgModule({
  declarations: [MatDatatableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    InputModule
  ],
  exports:[
    MatDatatableComponent
  ]
})
export class MatDatatableModule { }
