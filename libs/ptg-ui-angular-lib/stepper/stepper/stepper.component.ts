/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Priyanka Jain
 * @Component ptg-ui-grid;
 * @description This component for grid
 **/


import { Component, ContentChildren, QueryList, TemplateRef, AfterContentInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ptg-ui-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})

export class StepperComponent {
  @ContentChildren(TemplateRef) stepTemplates!: QueryList<TemplateRef<any>>;
  @Input() showVertical?: boolean = false;
  @Input() formGroups: FormGroup[]=[];
  @Output() formSubmit = new EventEmitter<void>(); 
  @Input() steps:string[]=[];
  currentStep=0;
  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
  ngAfterContentInit() {
    // Ensure stepTemplates is defined after content initialization
    if (!this.stepTemplates) {
      this.stepTemplates = new QueryList<TemplateRef<any>>();
    }
  }
  nextStep() {
    if (this.formGroups[this.currentStep].valid) {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
      } else {
        this.formSubmit.emit();
      }
    } else {
      this.formGroups[this.currentStep].markAllAsTouched();
      console.log('',this.formGroups[this.currentStep])
    }
  }

  // previousStep() {
  //   if (this.currentStep > 0) {
  //     this.currentStep--;
  //   }
  // }

  // getStepContent(index: number): TemplateRef<any> | null {
  //   return this.steps.toArray()[index] || null;
  // }
 
    // if (this.formGroups[this.currentStep].valid) {
    //   if (this.currentStep < this.steps.length - 1) {
    //     this.currentStep++;
    //   } else {
    //     this.formSubmit.emit();
    //   }
    // } else {
    //   this.formGroups[this.currentStep].markAllAsTouched();
    //   console.log('',this.formGroups[this.currentStep])
    // }
  }

