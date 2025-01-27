/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Module ButtonModule;
 * @description This module for button
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BreadcrumbsComponent
  ]
})
export class BreadcrumbsModule { }
