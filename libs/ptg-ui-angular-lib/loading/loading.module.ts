/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Module LoadingModule;
 * @description This module for loading
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
// import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    // NgxLoadingModule.forRoot({}),
  ], exports: [
    LoadingComponent
  ]
})
export class LoadingModule { }
