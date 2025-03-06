/**
 * @since May 2022
 * @author Aakash Patidar
 * @Module ptg-ui-accordion;
 * @description This module for accordion;
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';


@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),    
  ],
  exports:[
    AccordionComponent
  ]
})
export class AccordianModule { }
