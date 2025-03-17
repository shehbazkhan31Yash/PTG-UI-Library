/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Module ButtonModule;
 * @description This module for button
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { themeGeneratorComponent } from './theme-generator/theme-generator.component';

@NgModule({
  declarations: [
    themeGeneratorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    themeGeneratorComponent
  ]
})
export class themeGeneratorModule { }
