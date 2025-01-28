/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Module ButtonModule;
 * @description This module for button
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridRowComponent,GridColumnComponent } from './grid/grid.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    GridRowComponent,
    GridColumnComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    GridRowComponent,
    GridColumnComponent
  ]
})
export class GridModule { }
