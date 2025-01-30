/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Module ButtonModule;
 * @description This module for button
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GridComponent } from './grid/grid.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    GridComponent
  ]
})
export class GridModule { }
