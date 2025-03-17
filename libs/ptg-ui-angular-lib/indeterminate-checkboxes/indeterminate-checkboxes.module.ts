/**
 * @since April 2022
 * @author Aakash Patidar
 * @Module IndeterminateCheckboxesModule;
 * @description This module for indeterminate checkboxes
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndeterminateCheckboxesComponent } from './indeterminate-checkboxes/indeterminate-checkboxes.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
// import { TreeviewModule } from 'ngx-treeview';

@NgModule({
  declarations: [
    IndeterminateCheckboxesComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    // TreeviewModule.forRoot()
  ],
  exports:[
    IndeterminateCheckboxesComponent
  ]
})
export class IndeterminateCheckboxesModule { }
