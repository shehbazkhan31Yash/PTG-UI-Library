/**
 * @since May 2022
 * @author Aakash Patidar
 * @Module ptg-ui-accordion;
 * @description This module for accordion;
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    CommonModule   
  ],
  exports:[
    AccordionComponent
  ]
})
export class AccordionModule { }
