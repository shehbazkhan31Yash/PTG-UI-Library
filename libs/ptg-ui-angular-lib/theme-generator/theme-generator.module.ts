/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Module ButtonModule;
 * @description This module for button
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeGeneratorComponent } from './theme-generator/theme-generator.component';

import { ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    ThemeGeneratorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ThemeGeneratorComponent
  ]
})
export class ThemeGeneratorModule { }
